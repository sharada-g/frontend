import React, { useEffect } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
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
const NoPostHeader = styled.h2`
  font-weight: bold;
  color: white;
  text-align: center;
  width: 100%;
  margin: auto;
`;
const NoPostText = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  color: white;
  text-align: center;
`;

const ShowReply = ({ post, postIndex }) => {
  return (
    <motion.div
      initial={{ x: -1000, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          delay: postIndex * 0.25,
          type: "spring",
          bounce: 0.5,
          duration: 0.75,
        },
      }}
    >
      <Post key={postIndex} type={"post"} postId={post.id} post={post} />
      {post.Replies.length > 0
        ? post.Replies.map((reply, replyIndex) => (
            <ReplyContainer key={replyIndex}>
              <Post type={"reply"} postId={post.id} post={reply} />
            </ReplyContainer>
          ))
        : null}
    </motion.div>
  );
};

function ViewPost() {
  const { getAllPostHttp, data } = useContextProvider();
  const { posts } = data;
  useEffect(() => {
    getAllPostHttp();
  }, []);
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
            <>
              <NoPostHeader>
                Oh no! <FontAwesomeIcon icon={faFile} size="3x" />
              </NoPostHeader>
              <NoPostText>Nothing to see here! Please add a post!</NoPostText>
            </>
          )}
        </AnimatePresence>
      </Container>
    </>
  );
}

export default ViewPost;
