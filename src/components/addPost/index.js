import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useContextProvider } from "../../context/contextProvider";

const BgContainer = styled.button`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 75%;
  z-index: 2;
`;
const Container = styled(motion.div)`
  position: absolute;
  top: 275px;
  left: 0;
  right: 0;
  margin: auto;
  width: 75%;
  height: max-content;
  background-color: ${(props) => props.theme.secondaryColor};
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    top: 125px;
    width: 90%;
    border-radius: 5px;
  }
`;
const ContainerVariant = {
  rest: { top: -1500, scale: 0, opacity: 0 },
  anim: {
    top: 275,
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 1,
    },
  },
};

const DetailInput = styled.textarea`
  margin-top: 140px;
  width: 65%;
  height: 275px;
  border-radius: 30px;
  border: 1px solid ${(props) => props.theme.primaryColor};
  background-color: white;
  font-size: 1.5rem;
  box-shadow: 0px 0px 10px 5px ${(props) => props.theme.shadowColorPrimary};
  align-self: center;
  padding: 10px;
  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    margin-top: 40px;
    width: 90%;
    height: 175px;
  }
  //change placeholder color
  ::placeholder {
    position: absolute;
    margin-top: 50px;
    margin-left: 5%;
    color: ${(props) => props.theme.shadowColorPrimary};
    font-size: xxx-large;
    @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
      margin-top: 25px;
      font-size: xx-large;
    }
  }
`;

const NameInput = styled.input`
  margin-top: 35px;
  width: 65%;
  height: 90px;
  border-radius: 30px;
  border: 1px solid ${(props) => props.theme.primaryColor};
  background-color: ${(props) => props.theme.secondaryColor};
  font-size: 1.5rem;
  box-shadow: 0px 0px 10px 5px ${(props) => props.theme.shadowColorPrimary};
  align-self: center;
  padding: 0 10px;
  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    margin-top: 17.5px;
    width: 90%;
  }
  ::placeholder {
    position: absolute;
    margin-top: 25px;
    margin-left: 5%;
    color: ${(props) => props.theme.shadowColorPrimary};
    font-size: xx-large;
    @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
      font-size: x-large;
    }
  }
`;

const ErrorMsg = styled.p`
  display: block;
  margin: auto;
  margin-top: 10px;
  width: 65%;
  color: red;
  font-size: 1rem;
`;

const NewPostBtn = styled(motion.button)`
  margin-bottom: 140px;
  margin-top: 42.5px;
  margin-left: 17.5%;
  width: 30%;
  height: 75px;
  align-self: flex-start;
  font-size: xx-large;
  border-radius: 35px;
  color: white;
  background-color: ${(props) => props.theme.primaryColor};

  :disabled {
    background-color: ${(props) => props.theme.secondaryColor};
    color: gray;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    margin-top: 17.5px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    width: 95%;
    height: max-content;
    padding: 2.5px;
  }
`;

const NewPostBtnVariant = {
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

function AddPost() {
  const { ShowNewPostView, setShowNewPostView } = useContextProvider();

  const [disabledBtn, setDisabledBtn] = useState(false);
  const [formValue, setFormValue] = useState({
    name: "",
    detail: "",
  });
  const [errorMsg, setErrorMsg] = useState([]);

  //handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    setDisabledBtn(false);
    setErrorMsg([]);
  };
  //handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabledBtn(true);
    // validate form name and detail
    let message = [];

    if (formValue.detail.length < 1) {
      message.push("Detail is required!");
    }
    if (formValue.name.length < 1) {
      message.push("Name is required!");
    }
    if (formValue.name.length > 0 && formValue.detail.length > 0) {
      setShowNewPostView(false);
    }
    setErrorMsg(message);
  };
  return (
    <>
      <BgContainer
        onClick={() => {
          ShowNewPostView && setShowNewPostView(false);
          setDisabledBtn(true);
        }}
      />
      <Container
        variants={ContainerVariant}
        initial="rest"
        animate="anim"
        exit="rest"
      >
        <DetailInput
          placeholder="Write your post..."
          name="detail"
          value={formValue.detail}
          onChange={handleChange}
        />
        <NameInput
          placeholder="Enter your pseudonym"
          name="name"
          value={formValue.name}
          onChange={handleChange}
        />
        <ErrorMsg>
          {errorMsg.map((msg) => (
            <span key={msg}>{msg} </span>
          ))}
        </ErrorMsg>
        <NewPostBtn
          disabled={disabledBtn}
          variants={NewPostBtnVariant}
          initial="rest"
          animate="anim"
          whileHover={!disabledBtn ? "hover" : ""}
          whileTap={!disabledBtn ? "press" : ""}
          exit="rest"
          onClick={handleSubmit}
        >
          Post
        </NewPostBtn>
      </Container>
    </>
  );
}

export default AddPost;
