//components
import React from "react";
import styled from "styled-components";

import Home from "./components/home";
import Banner from "./components/banner";

const TempImg = styled.img`
  position: absolute;
  opacity: 25%;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  z-index: 10;
`;

function App() {
  return (
    <>
      <Banner />
      <Home />
      {/* <TempImg src="./Capture.png" /> */}
    </>
  );
}

export default App;
