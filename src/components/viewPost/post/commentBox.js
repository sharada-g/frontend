import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useContextProvider } from "../../../context/contextProvider";

const CommentContainer = styled.div`
  background-color: white;
  width: 100%;
  min-height: 150px;
  height: fit-content;
  box-shadow: 0px 0px 10px 2px ${(props) => props.theme.shadowColorSecondary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 35px 3.5%;
`;

const CommentName = styled.h1`
  color: black;
  font-size: 1.75rem;
  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-size: 1.25rem;
  }
`;

const CommentBody = styled.p`
  font-size: 1.25rem;
  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-size: 1rem;
  }
`;

const CommentReplyBtn = styled(motion.button)`
  align-self: flex-end;
  width: 20%;
  height: 60px;
  border-radius: 35px;
  border-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryColor};
  background-color: transparent;
  font-size: 1.25rem;
  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    padding: 5px;
    width: 40%;
    height: max-content;
    font-size: 1rem;
  }
`;

const CommentReplyBtnVariant = {
  rest: { scale: 0, opacity: 0 },
  anim: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 0.5,
    },
  },
  hover: {
    scale: [1, 0.9, 1],
    opacity: [1, 0.75, 1],
    transition: {
      type: "spring",
      duration: 0.4,
      bounce: 0.25,
      repeat: Infinity,
    },
  },
  press: {
    scale: [1, 1.25, 1],
    transition: {
      type: "spring",
      duration: 0.1,
      bounce: 0.5,
    },
  },
};

function CommentBox({ id, name, detail }) {
  const { ShowNewReplyView, setShowNewReplyView, setReplyId } =
    useContextProvider();
  return (
    <>
      <CommentContainer>
        <CommentName>{name}</CommentName>
        <CommentBody>{detail}</CommentBody>
        <CommentReplyBtn
          variants={CommentReplyBtnVariant}
          initial="rest"
          animate="anim"
          whileHover="hover"
          whileTap="press"
          exit="rest"
          onClick={() => {
            setReplyId(id);
            !ShowNewReplyView && setShowNewReplyView(true);
          }}
        >
          Reply
        </CommentReplyBtn>
      </CommentContainer>
    </>
  );
}

export default CommentBox;
