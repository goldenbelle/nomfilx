import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../components/Loader";
import Popup from "../../components/Popup";
import SubDetail from "../../components/SubDetail";

// Style
const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  //-> Background Image
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0; //-> 뒤에서 몇번째인가 말해주는 지표
`;

const Content = styled.div`
  //-> should be flex
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 20px;
`;

const Title = styled.h3`
  display: flex;
  font-size: 32px;
  font-weight: 600;
`;

const Year = styled.span`
  font-size: 20px;
  font-weight: 100;
  margin-left: 10px;
  margin-top: 9px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
  display: flex;
  font-size: 15px;
`;

const Item = styled.div``;

const Divider = styled.span`
  margin: 0 20px;
`;

const Overview = styled.p`
  font-size: 15px;
  opacity: 0.7;
  line-height: 1.5;
  width: 100%;
`;

const Img = styled.img`
  margin: 20px;
  width: 100px;
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Btn = styled.div`
  align-items: center;
  &:hover {
    color: yellow;
    cursor: pointer;
  }
`;

const Play = styled.div`
  margin-left: 12px;
  display: flex;
  font-weight: 800;
  font-size: 15px;
  align-items: center;
`;

const FIcon = styled.i`
  font-size: 22px;
  margin-right: 8px;
`;

const IMDB = styled.img`
  width: 40px;
`;

const Company = styled.div`
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  height: 10%;
  width: 10%;
  border-radius: 5px;
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
            <Year>
              {" "}
              (
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
              ){" "}
            </Year>
          </Title>
          <ItemContainer>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name}, `
                )}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time[0]} min
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.production_countries &&
                result.production_countries.map((n) => `${n.name}`)}
            </Item>
          </ItemContainer>
          <Icons>
            <Btn>
              {result.imdb_id ? (
                <>
                  <a href={`https://www.imdb.com/title/${result.imdb_id}/`}>
                    {" "}
                    <IMDB src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png" />
                  </a>
                </>
              ) : (
                <>
                  <a href={result.homepage}>
                    <FIcon className="fas fa-home fa-1x"></FIcon>
                  </a>
                </>
              )}
            </Btn>
            <Btn>
              {video && (
                <>
                  <Play onClick={togglePop}>
                    {" "}
                    <FIcon className="fas fa-play fa-1x"></FIcon> Play trailor{" "}
                  </Play>
                  {seen ? (
                    <Popup toggle={togglePop} videoKey={video[0].key} />
                  ) : null}{" "}
                </>
              )}
            </Btn>
          </Icons>
          <Overview>{result.overview}</Overview>

          {result.seasons ? (
            <SubDetail subtitle={"Seasons"} datas={result.seasons} />
          ) : null}
          {result.production_companies ? (
            <SubDetail
              subtitle={"Productions"}
              datas={result.production_companies}
            />
          ) : null}
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
