import React from "react";
import styled from "styled-components";

//components
import Post from "./post";

const Container = styled.div`
  position: absolute;
  top: 350px;
  left: 0;
  right: 0;
  margin: auto;
  width: 75%;
  height: fit-content;
  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    top: 200px;
    width: 85%;
  }
`;

const ReplyContainer = styled.div`
  margin-left: 15%;
  width: 85%;
  height: fit-content;
  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    margin-left: 5%;
    width: 95%;
  }
`;

function ViewPost() {
  return (
    <>
      <Container>
        <Post />
        <ReplyContainer>
          <Post />
          <Post />
        </ReplyContainer>
        <Post />
      </Container>
    </>
  );
}

export default ViewPost;
