import React from "react";
import styled from "styled-components";

//import components
import ViewPost from "../viewPost";
import AddPost from "../addPost";

const Header = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 110px;
  background-color: #f7f7f7;
  z-index: 0;
`;

function Home() {
  return (
    <>
      <Header />
      <ViewPost />
      <AddPost />
    </>
  );
}

export default Home;
