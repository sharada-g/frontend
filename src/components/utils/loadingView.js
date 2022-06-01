import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const BgContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 75%;
  z-index: 999;
`;
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
const LoadingContainer = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  justify-content: center;
  align-items: center;
`;

const LoadingContainerVariant = {
  rest: {
    transition: {
      staggerChildren: 0.5,
    },
  },
  anim: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const LoadingCircle = styled(motion.span)`
  display: block;
  width: 2.5rem;
  height: 2.5rem;
  background-color: white;
  border-radius: 50%;
  text-align: center;
  font-size: 1.5rem;
  margin: 0.5rem;
`;

const LoadingCircleVariant = {
  rest: {
    y: 0,
  },
  anim: {
    y: "100%",
    transition: {
      duraion: 0.25,
      yoyo: Infinity,
      ease: "easeInOut",
    },
  },
};

const LoadingText = styled.h1`
  margin-top: 50px;
  color: white;
`;

function LoadingView() {
  return (
    <>
      <Container>
        <LoadingContainer
          variants={LoadingContainerVariant}
          initial="rest"
          animate="anim"
        >
          <LoadingCircle variants={LoadingCircleVariant}> E </LoadingCircle>
          <LoadingCircle variants={LoadingCircleVariant}> = </LoadingCircle>
          <LoadingCircle variants={LoadingCircleVariant}> m </LoadingCircle>
          <LoadingCircle variants={LoadingCircleVariant}> c </LoadingCircle>
          <LoadingCircle variants={LoadingCircleVariant}> 2 </LoadingCircle>
        </LoadingContainer>
        <LoadingText>Loading...</LoadingText>
      </Container>

      <BgContainer />
    </>
  );
}

export default LoadingView;
