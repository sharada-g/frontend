import React, { createContext, useContext, useState } from "react";
import axiosInstance from "../helper/axios";

const Context = createContext();
export const useContextProvider = () => useContext(Context);

function ContextProvider(props) {
  const [data, setData] = useState({
    posts: [],
  });
  const [loading, setLoading] = useState(false);
  const [ShowNewPostView, setShowNewPostView] = useState(false);
  const [ShowNewReplyView, setShowNewReplyView] = useState(false);

  // api calls
  const newPostHttp = async (formValues) => {
    setLoading(true);
    await axiosInstance
      .post("/post", formValues)
      .then((res) => {
        let newPosts = [...data.posts, res.data];
        setData({
          posts: [...newPosts],
        });
        setLoading(false);
        setShowNewPostView(false);
      })
      .catch((err) => {
        setLoading(false);
      });
    return true;
  };

  const values = {
    loading,
    setLoading,
    data,
    setData,
    ShowNewPostView,
    setShowNewPostView,
    ShowNewReplyView,
    setShowNewReplyView,
    newPostHttp,
  };
  return <Context.Provider value={values}>{props.children}</Context.Provider>;
}

export default ContextProvider;
