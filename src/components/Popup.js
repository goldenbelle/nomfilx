import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;

`;

const Modal = styled.div`
  position: fixed;
  z-index: 1;
  width: 560px;
  height: 315px;
`;

const ModalC = styled.div`
  position: absolute;
  top: 20px;
  width: 100%;
`;


export default class Popup extends Component {

  handleClick = () => {
    this.props.toggle();
  };

  render() {
    const { videoKey } = this.props;
    return (
      <Container>
      <Modal className="modal">
        <ModalC className="modal_content">
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoKey}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </ModalC>
      </Modal>
      </Container>
    );
  }
}
