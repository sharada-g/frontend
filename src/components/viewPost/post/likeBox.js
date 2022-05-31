import React from "react";
import styled from "styled-components";

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
const LikeYesBtn = styled.button`
  height: 33%;
  border-radius: 50px;
  color: ${(props) => props.theme.fourthColor};
  background-color: transparent;
  border: none;
  font-size: 2.5rem;
`;
const LikeCount = styled.p`
  height: 33%;
  color: ${(props) => props.theme.fourthColor};
  font-weight: bold;
`;
const LikeNoBtn = styled.button`
  transform: rotate(180deg);
  height: 33%;
  border-radius: 50px;
  color: ${(props) => props.theme.fourthColor};
  background-color: transparent;
  border: none;
  font-size: 2.5rem;
`;

function LikeBox({ id, likes }) {
  return (
    <>
      <LikeContainer>
        <LikeYesBtn>^</LikeYesBtn>
        <LikeCount>{likes}</LikeCount>
        <LikeNoBtn>^</LikeNoBtn>
      </LikeContainer>
    </>
  );
}

export default LikeBox;
