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
`;

const ReplyContainer = styled.div`
  margin-left: 12.5%;
  width: 87.5%;
  height: fit-content;
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
