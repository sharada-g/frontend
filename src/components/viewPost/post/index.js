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

function Post({ type, postId, post }) {
  const { id, name, detail, likes } = post;
  return (
    <>
      <Container>
        <LikeBox type={type} id={id} likes={likes} />
        <CommentBox id={postId} name={name} detail={detail} />
      </Container>
    </>
  );
}

export default Post;
