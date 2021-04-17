import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Style
const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${(props) =>
    props.bgUrl}); //-> bgUrl: Image에 있는 사용자prop
  height: 180px; //-> height 없으면 이미지 안나타남.
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute; //-> parent와 연결
  opacity: 0; //-> 마우스 올리기 전 전체 태그 상태
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative; //-> child의 absolute를 위해
  &:hover {
    ${Image} {
      opacity: 0.3;
      width: 300px;
      height: 300px;
      z-index: 0;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`; //-> <Image>, <Rating>을 꾸며야 하니까 ImageContainer는 그 두개보다 밑에 위치.

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

// Poster Component
const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : require("../assets/noimg.png").default
          }
          //-> "??" 대신에 require("파일경로") 하면 주소르 부를 수 있다.
        />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐️
          </span>{" "}
          {rating}/10
        </Rating>
      </ImageContainer>

      <Title>
        {title && title.length > 18 ? `${title.substring(0, 18)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;
