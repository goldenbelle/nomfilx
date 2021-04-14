// Error, 404 등 에러 메세지 노출
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  color: ${(props) => props.color};
  //-> 에러 종류마다 텍스트 색깔이 변동되어야 함.
`;

// Message 호출하는 component에서 text, color 값을 선언해줘야함.
const Message = ({ text, propcolor }) => (
  <Container>
    <Text color={propcolor}>{text}</Text>
  </Container>
);

Message.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Message;
