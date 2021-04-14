import React from "react";
import styled from "styled-components";
import "./main.css";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 28px;
`;

const Video = styled.iframe``;

const Dae = styled.div`
  margin-top: 100px;
  height: 0px;
  font-size: 90px;
`;

export default ({ movie, tv }) => {
  const a = [1, 2, 3, 4, 5];

  return (
    <Container>
      <Dae>Godzilla vs. King</Dae>
      <div className="video-background">
        <div className="video-foreground">
          <iframe
            src="https://www.youtube.com/embed/odM92ap8_c0?controls=0&rel=0&autoplay=1&mute=1&loop=1"
            frameBorder="0"
            allowFullScreen></iframe>
        </div>
      </div>
    </Container>
  );
};
