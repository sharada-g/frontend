import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 12.5px;
  left: 0;
  right: 0;
  margin: auto;
  width: 85%;
  height: 225px;
  background-color: ${(props) => props.theme.tineryColor};
  border-radius: 25px;
  box-shadow: 0px 10px 10px ${(props) => props.theme.shadowColorSecondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`;

const Header = styled.h1`
  margin: 7.5%;
  width: 33%;
  color: white;
  //font-size: xx-large;
  font-size: 2rem;
`;

const PostBtn = styled.button`
  margin: 7.5%;
  width: 33%;
  height: 100px;
  border-radius: 45px;
  border-color: ${(props) => props.theme.primaryColor};
  color: white;
  background-color: transparent;
  font-size: 2rem;
`;

function Banner() {
  return (
    <>
      <Container>
        <Header>Maths For 'em</Header>
        <PostBtn>New Post</PostBtn>
      </Container>
    </>
  );
}

export default Banner;
