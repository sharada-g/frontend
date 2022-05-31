import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
//components
import Post from "./post";

import { useContextProvider } from "../../context/contextProvider";

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

const ShowReply = ({ post, postIndex }) => {
  return (
    <motion.div
      initial={{ y: -1000, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          delay: postIndex * 0.75,
          type: "spring",
          bounce: 0.5,
          duration: 0.75,
        },
      }}
    >
      <Post key={postIndex} postId={post.id} post={post} />
      {post.reply.length > 0
        ? post.reply.map((reply, replyIndex) => (
            <ReplyContainer key={replyIndex}>
              <Post postId={post.id} post={reply} />
            </ReplyContainer>
          ))
        : null}
    </motion.div>
  );
};

function ViewPost() {
  const { data } = useContextProvider();
  const { posts } = data;

  return (
    <>
      <Container>
        <AnimatePresence>
          {posts.length > 0 ? (
            [...posts]
              .sort((a, b) => b.id - a.id)
              .map((post, postIndex) => (
                <ShowReply key={post.id} post={post} postIndex={postIndex} />
              ))
          ) : (
            <p>No posts to show</p>
          )}
        </AnimatePresence>
      </Container>
    </>
  );
}

export default ViewPost;
