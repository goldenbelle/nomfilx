import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  
  constructor(props){
      super(props);
      const { location: {pathname} } = props;

      this.state = {
          result: null,
          error: null,
          loading: true,
          isMovie: pathname.includes("/movie/"),
          seen: false,
          video: null
      }
  }

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  };

  async componentDidMount(){
      const { match: {params: {id}}, history: {push}} = this.props;
      const { isMovie } = this.state;
      const parsedId= parseInt(id);

      if(isNaN(parsedId)) {
          return push("/");
      }

      let result = null;
      let video = null;
      try {
        if (isMovie) {
            ({ data: result } = await moviesApi.movieDetail(parsedId));
            ({ data: {results: video}} = await moviesApi.video(parsedId));
         
        } else {
            ({ data: result } = await tvApi.showDetail(parsedId));
            ({ data: {results: video}} = await moviesApi.video(parsedId));
        }
      } catch {
        this.setState({ error: "Can't find anything." });
      } finally {
        this.setState({ loading: false, result, video });
      }

      

    }
  render() {
    const { result, error, loading, seen, video } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} seen={seen} togglePop={this.togglePop} video={video} />;
  }
}