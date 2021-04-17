import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  justify-content: space-between;
`;

const List = styled.div`
  display: flex;
  width: 50%;
`;

const Item = styled.div`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid
    ${(props) => (props.current ? "#FFC300" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
  justify-content: space-evenly;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  font-size: 15px;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 50px;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/aa"}>
        <SLink to="/">
          <Img src={require("../assets/logo.png").default} />
        </SLink>{" "}
      </Item>
      <Item current={pathname === "/movie"}>
        <SLink to="/movie">Movies</SLink>{" "}
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>{" "}
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>{" "}
      </Item>
    </List>
  </Header>
));
