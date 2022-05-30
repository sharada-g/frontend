import React from "react";
import styled from "styled-components";

const BgContainer = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 75%;
  z-index: 2;
`;
const Container = styled.div`
  position: absolute;
  top: 275px;
  left: 0;
  right: 0;
  margin: auto;
  width: 75%;
  height: max-content;
  background-color: #f7f7f7;
  box-shadow: 0px 10px 10px black;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DetailInput = styled.input`
  margin-top: 140px;
  width: 65%;
  height: 275px;
  border-radius: 30px;
  border: 1px solid #7510f7;
  color: #7510f7;
  background-color: white;
  font-size: 1.5rem;
  box-shadow: 0px 0px 10px 5px #dfdfdf;
  align-self: center;
  //change placeholder color
  ::placeholder {
    position: absolute;
    margin-top: 50px;
    margin-left: 5%;
    color: gray;
    font-size: xx-large;
  }
`;

const NameInput = styled.input`
  margin-top: 35px;
  width: 65%;
  height: 90px;
  border-radius: 30px;
  border: 1px solid #7510f7;
  color: #7510f7;
  background-color: #f7f7f7;
  font-size: 1.5rem;
  box-shadow: 0px 0px 10px 5px #dfdfdf;
  align-self: center;
  ::placeholder {
    position: absolute;
    margin-top: 25px;
    margin-left: 5%;
    color: gray;
    font-size: xx-large;
  }
`;

const NewPostBtn = styled.button`
  margin-bottom: 140px;
  margin-top: 52.5px;
  margin-left: 17.5%;
  width: 30%;
  height: 75px;
  align-self: flex-start;
  font-size: xx-large;
  border-radius: 35px;
  color: white;
  background-color: #7510f7;
  border: none;
`;

function AddPost() {
  return (
    <>
      <BgContainer />
      <Container>
        <DetailInput placeholder="Write your post..." />
        <NameInput placeholder="Enter your pseudonym" />
        <NewPostBtn>Post</NewPostBtn>
      </Container>
    </>
  );
}

export default AddPost;
