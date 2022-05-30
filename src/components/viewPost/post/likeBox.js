import React from "react";
import styled from "styled-components";

const LikeContainer = styled.div`
  width: 5%;
  height: 80px;
  align-self: center;
  margin-right: 2.5%;
  padding: 2.5% 0;
  border: 2px solid #d3bafd;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const LikeYesBtn = styled.button`
  height: 33%;
  border-radius: 50px;
  color: #d3bafd;
  background-color: transparent;
  border: none;
  font-size: 2.5rem;
`;
const LikeCount = styled.p`
  height: 33%;
  color: #d3bafd;
  font-weight: bold;
`;
const LikeNoBtn = styled.button`
  transform: rotate(180deg);
  height: 33%;
  border-radius: 50px;
  color: #d3bafd;
  background-color: transparent;
  border: none;
  font-size: 2.5rem;
`;

function LikeBox() {
  return (
    <>
      <LikeContainer>
        <LikeYesBtn>^</LikeYesBtn>
        <LikeCount>302</LikeCount>
        <LikeNoBtn>^</LikeNoBtn>
      </LikeContainer>
    </>
  );
}

export default LikeBox;
