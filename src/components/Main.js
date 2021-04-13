import React from "react";
import styled from "styled-components";
//import './main.css';

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 28px;
  margin-top: 20px;
`;

const Video = styled.iframe`
`;

export default () => (
  <Container>
    <div class="video-background">
  <div class="video-foreground">
    <iframe src="https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&rel=0&autoplay=1&mute=1&loop=1&playlist=W0LHTWG-UmQ" frameborder="0" allowfullscreen></iframe> 
  </div>
</div>
  </Container>
);





