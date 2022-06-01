//components
import React from "react";

import LoadingView from "./components/utils/loadingView";
import Home from "./components/home";
import Banner from "./components/banner";

import { useContextProvider } from "./context/contextProvider";

function App() {
  const { loading } = useContextProvider();
  return (
    <>
      <Banner />
      <Home />
      {loading && <LoadingView />}
    </>
  );
}

export default App;
