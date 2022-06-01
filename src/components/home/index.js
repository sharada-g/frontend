import React from "react";
import styled from "styled-components";

//import components
import ViewPost from "../viewPost";
import AddPost from "../addPost";

import { useContextProvider } from "../../context/contextProvider";

const Header = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 110px;
  background-color: ${(props) => props.theme.secondaryColor};
  z-index: 0;
  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    height: 90px;
  }
`;

function Home() {
  const {
    ShowNewPostView,
    setShowNewPostView,
    newPostHttp,
    ShowNewReplyView,
    setShowNewReplyView,
  } = useContextProvider();

  return (
    <>
      <Header />
      <ViewPost />
      {ShowNewPostView && (
        <AddPost
          ShowNewView={ShowNewPostView}
          setShowNewView={() => setShowNewPostView(false)}
          newPostHttp={newPostHttp}
          name="pseudonym"
          details="post"
        />
      )}
      {ShowNewReplyView && (
        <AddPost
          ShowNewView={ShowNewReplyView}
          setShowNewView={() => setShowNewReplyView(false)}
          name="pseudonym"
          details="reply"
        />
      )}
    </>
  );
}

export default Home;
