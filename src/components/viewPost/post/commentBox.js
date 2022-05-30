import React from "react";
import styled from "styled-components";

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
`;

const CommentBody = styled.p`
  font-size: 1.25rem;
`;

const CommentReplyBtn = styled.button`
  align-self: flex-end;
  width: 20%;
  height: 60px;
  border-radius: 35px;
  border-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryColor};
  background-color: transparent;
  font-size: 1.25rem;
`;

function CommentBox() {
  return (
    <>
      <CommentContainer>
        <CommentName>Pythagoras</CommentName>
        <CommentBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
        </CommentBody>
        <CommentReplyBtn>Reply</CommentReplyBtn>
      </CommentContainer>
    </>
  );
}

export default CommentBox;
