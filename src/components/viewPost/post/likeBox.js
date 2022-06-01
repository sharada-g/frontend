import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

import { useContextProvider } from "../../../context/contextProvider";

const LikeContainer = styled.div`
  width: 5%;
  height: 80px;
  align-self: center;
  margin-right: 2.5%;
  padding: 2.5% 0;
  border: 2px solid ${(props) => props.theme.fourthColor};
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 12.5%;
  }
`;
const LikeYesBtn = styled(motion.button)`
  height: 33%;
  border-radius: 50px;
  color: ${(props) => props.theme.fourthColor};
  background-color: transparent;
  border: none;
  font-size: 2.5rem;
  :disabled {
    color: lightgray;
  }
`;
const LikeYesBtnVariant = {
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
    scale: [1, 1.5, 1],
    opacity: [1, 0.75, 1],
    transition: {
      type: "spring",
      duration: 0.4,
      bounce: 0.25,
      repeat: Infinity,
    },
  },
  press: {
    scale: [1, 1.75, 1],
    transition: {
      type: "spring",
      duration: 0.1,
      bounce: 0.5,
    },
  },
  disabled: {
    scale: 1,
    opacity: 0.25,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 0.25,
    },
  },
};
const LikeYesIcon = styled(motion.div)`
  position: absolute;
  width: 50px;
  height: 50px;
  color: red;
`;
const LikeYesIconVariant = {
  rest: { y: 0, scale: 0, opacity: 0 },
  anim: {
    scale: 1,
    opacity: [0, 2.5, 0],
    y: -100,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 5,
    },
  },
};

const LikeCount = styled.p`
  height: 33%;
  color: ${(props) => props.theme.fourthColor};
  font-weight: bold;
`;
const LikeNoBtn = styled(motion.button)`
  transform: rotate(180deg);
  height: 33%;
  border-radius: 50px;
  color: ${(props) => props.theme.fourthColor};
  background-color: transparent;
  border: none;
  font-size: 2.5rem;
  :disabled {
    color: lightgray;
  }
`;

const LikeNoBtnVariant = {
  rest: { scale: 0, opacity: 0 },
  anim: {
    scale: -1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 0.5,
    },
  },
  hover: {
    scale: [-1, -1.5, -1],
    opacity: [1, 0.75, 1],
    transition: {
      type: "spring",
      duration: 0.4,
      bounce: 0.25,
      repeat: Infinity,
    },
  },
  press: {
    scale: [-1, -1.75, -1],
    transition: {
      type: "spring",
      duration: 0.1,
      bounce: 0.5,
    },
  },
  disabled: {
    scale: -1,
    opacity: 0.25,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 0.25,
    },
  },
};

const LikeNoIcon = styled(motion.div)`
  position: absolute;
  width: 50px;
  height: 50px;
  color: white;
`;
const LikeNoIconVariant = {
  rest: { y: 0, scale: 0, opacity: 0 },
  anim: {
    scale: 1,
    opacity: [0, 2.5, 0],
    y: 100,
    transition: {
      type: "spring",
      bounce: 0.25,
      duration: 2.5,
    },
  },
};

function LikeBox({ type, id, likes }) {
  const { likeHttp } = useContextProvider();

  // like yes
  const [showYesIcon, setShowYesIcon] = useState(false);
  const [showNoIcon, setShowNoIcon] = useState(false);
  const [disableShowIcon, setDisableShowIcon] = useState(false);
  const handleYesLike = () => {
    setDisableShowIcon(true);
    //wait for likeHttp to finish
    likeHttp(type, id, true).then(() => {
      setShowYesIcon(true);
      setTimeout(() => {
        setShowYesIcon(false);
        setDisableShowIcon(false);
      }, 5000);
    });
  };
  // like no

  const handleNoLike = () => {
    setDisableShowIcon(true);
    //wait for likeHttp to finish
    likeHttp(type, id, false).then(() => {
      setShowNoIcon(true);
      setTimeout(() => {
        setShowNoIcon(false);
        setDisableShowIcon(false);
      }, 2500);
    });
  };

  return (
    <>
      <LikeContainer>
        <LikeYesBtn
          disabled={disableShowIcon}
          variants={LikeYesBtnVariant}
          initial="rest"
          animate={!disableShowIcon ? "anim" : "disabled"}
          whileHover={!disableShowIcon ? "hover" : ""}
          whileTap="press"
          exit="rest"
          onClick={() => handleYesLike()}
        >
          ^
        </LikeYesBtn>
        {showYesIcon && (
          <LikeYesIcon
            variants={LikeYesIconVariant}
            initial="rest"
            animate="anim"
            exit="rest"
          >
            <FontAwesomeIcon icon={faHeart} size="3x" />
          </LikeYesIcon>
        )}
        <LikeCount>{likes}</LikeCount>
        <LikeNoBtn
          disabled={disableShowIcon || likes === 0}
          variants={LikeNoBtnVariant}
          initial="rest"
          animate={!disableShowIcon ? "anim" : "disabled"}
          whileHover={!disableShowIcon && likes > 0 ? "hover" : ""}
          whileTap={likes > 0 ? "press" : ""}
          exit="rest"
          onClick={() => handleNoLike()}
        >
          ^
        </LikeNoBtn>
        {showNoIcon && (
          <LikeNoIcon
            variants={LikeNoIconVariant}
            initial="rest"
            animate="anim"
            exit="rest"
          >
            <FontAwesomeIcon icon={faThumbsDown} size="3x" />
          </LikeNoIcon>
        )}
      </LikeContainer>
    </>
  );
}

export default LikeBox;
