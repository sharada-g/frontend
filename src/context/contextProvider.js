import React, { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();
export const useContextProvider = () => useContext(Context);

function ContextProvider(props) {
  const [data, setData] = useState({
    posts: [
      {
        id: 1,
        name: "John Doe",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: 0,
        reply: [
          {
            id: 1,
            name: "John Doe",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            likes: 0,
          },
        ],
      },
      {
        id: 2,
        name: "John Doe",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: 0,
        reply: [],
      },
    ],
  });

  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    // setTimeout(() => {
    //   const tempData = [...data.posts];
    //   tempData.unshift({
    //     id: nextId,
    //     name: "John Doe new",
    //     details:
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     likes: 0,
    //     reply: [],
    //   });
    //   setData({
    //     posts: tempData,
    //   });
    //   setNextId(data.posts.length + 1);
    // }, 5000);
  }, [data.posts.length]);

  const [loading, setLoading] = useState(true);
  const [ShowNewPostView, setShowNewPostView] = useState(false);
  const [ShowNewReplyView, setShowNewReplyView] = useState(false);
  const values = {
    loading,
    setLoading,
    data,
    setData,
    ShowNewPostView,
    setShowNewPostView,
    ShowNewReplyView,
    setShowNewReplyView,
  };
  return <Context.Provider value={values}>{props.children}</Context.Provider>;
}

export default ContextProvider;
