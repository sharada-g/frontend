import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// import components
import LikeBox from "./likeBox";
import CommentBox from "./commentBox";

const Container = styled(motion.div)`
  margin-bottom: 60px;
  display: flex;
  flex-direction: row;
`;

function Post({ postId, post }) {
  const { id, name, details, likes } = post;
  return (
    <>
      <Container>
        <LikeBox id={id} likes={likes} />
        <CommentBox id={id} name={name} details={details} />
      </Container>
    </>
  );
}

export default Post;
