import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../components/Section";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import Poster from "../../components/Poster";
import { moviesApi, tvApi } from "../../api";
import Main from "../../components/Main";

const Container = styled.div`
  padding: 0px 20px;
  margin-top: 500px;
`;


class MainPage extends React.Component {
  state = {
    mpopular: null,
    tpopular: null,
    loading: true,
    error: null
  };

  async componentDidMount() {
    try {
      const {data: { results: mpopular }
    } = await moviesApi.popular();
     
    const {
        data: { results: tpopular }
      } = await tvApi.popular();

      this.setState({ mpopular, tpopular });
      

    } catch {
      this.setState({
        error: "Can't find TV information."
      });

    } finally {
      this.setState({ loading: false });
    }
  }


  render() {
    const { mpopular, tpopular, loading, error } = this.state;
    return (
<>
<Helmet>
  <title>TV Shows | Nomflix</title>
</Helmet>
{loading ? (
    <Loader />
  ) : (
    <>
<Main movie={mpopular} tv={tpopular} />
    <Container>
          
            {mpopular && mpopular.length > 0 && (
        <Section title="Movies Tranding">
                {mpopular.map(movie => (
                  <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date.substring(0, 4)}
              isMovie={true}
            />
                ))}
        </Section>
      )}
      {tpopular && tpopular.length > 0 && (
        <Section title="TVs Trending">
          {tpopular.map(show => (
          <Poster
              key={show.id}
              id={show.id}
              imageUrl={show.poster_path}
              title={show.original_name}
              rating={show.vote_average}
              year={show.first_air_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
     

      {error && <Message color="#e74c3c" text={error} />}
    </Container>
    </>
    )}
  </>
    );
  }
}

export default MainPage;