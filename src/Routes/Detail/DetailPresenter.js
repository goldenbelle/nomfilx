import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../components/Loader";
import Popup from "../../components/Popup";

// Style
const Container = styled.div `
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div ` //-> Background Image
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0; //-> 뒤에서 몇번째인가 말해주는 지표
`;

const Content = styled.div ` //-> should be flex
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div `
  width: 30%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div `
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3 `
  font-size: 32px;
`;

const ItemContainer = styled.div `
  margin: 20px 0;
`;

const Item = styled.span ``;

const Divider = styled.span `
  margin: 0 10px;
`;

const Overview = styled.p `
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const Company = styled.div `
  background-image: url(${props => props.bgImg});
  background-size: cover;
  height: 10%;
  width: 10%;
  border-radius: 5px;
`;

const Img = styled.img`
  margin: 20px;
  width: 100px;
`;

// Presenter
const DetailPresenter = ({ result, loading, error, seen, togglePop, video }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}{" "}
          | Nomflix
        </title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : "사진 없음"
          }
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date
                : result.first_air_date}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time[0]} min
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
            <Divider>•</Divider>
            <Item>
              { result.production_countries && result.production_countries.map( n => `${n.name}` ) }
            </Item>
          </ItemContainer>
          <div>
            <div>
              Homepage Link
              {result.imdb_id ? <>
                <a href={`https://www.imdb.com/title/${result.imdb_id}/`}>IMDB</a>
              </> : 
              <><a href={result.homepage}>Homepage</a></>}</div>

            <div>
              Video Link
              { video && <>
              <button onClick={togglePop}> play trailor </button> 
              {seen ? <Popup toggle={togglePop} videoKey={video[0].key}/> : null} </>} </div>
          </div>

          <Overview>{result.overview}</Overview>

          <div>
            Seasons
            <div> {result.seasons && result.seasons.map(n => n.name)} </div>
          </div>

          <div>
            { result.production_companies &&
            result.production_companies.map( (n, index)=> 
            n.logo_path ? 
            <>
            <Img key={index} src={`https://image.tmdb.org/t/p/original${n.logo_path}`} /> 
            </>
             : n.name ) }
          </div>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default DetailPresenter;
