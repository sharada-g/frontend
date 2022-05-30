import React from "react";
import styled from "styled-components";

// import components
import LikeBox from "./likeBox";
import CommentBox from "./commentBox";

const Container = styled.div`
  margin-bottom: 60px;
  display: flex;
  flex-direction: row;
`;
function Post() {
  return (
    <>
      <Container>
        <LikeBox />
        <CommentBox />
      </Container>
    </>
  );
}

export default Post;
