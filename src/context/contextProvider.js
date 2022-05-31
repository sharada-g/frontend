import React, { createContext, useContext, useState } from "react";

const Context = createContext();
export const useContextProvider = () => useContext(Context);

function ContextProvider(props) {
  const [ShowNewPostView, setShowNewPostView] = useState(false);
  const [ShowNewReplyView, setShowNewReplyView] = useState(false);
  const values = {
    ShowNewPostView,
    setShowNewPostView,
    ShowNewReplyView,
    setShowNewReplyView,
  };
  return <Context.Provider value={values}>{props.children}</Context.Provider>;
}

export default ContextProvider;
