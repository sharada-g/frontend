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
  const [replyId, setReplyId] = useState(null);

  // api calls

  //get all posts
  const getAllPostHttp = async () => {
    setLoading(true);
    await axiosInstance
      .get("/post")
      .then((res) => {
        setData({ posts: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };
  //create new post or replya
  const newHttp = async (type, formValues) => {
    setLoading(true);
    if (type === "reply") formValues.postId = replyId;
    await axiosInstance
      .post(`/${type}`, formValues)
      .then((res) => {
        if (type === "post") {
          let newPosts = [...data.posts, res.data];
          setData({
            posts: [...newPosts],
          });
        } else {
          // update reply
          let newPosts = [...data.posts];
          let index = newPosts.findIndex((post) => post.id === res.data.postId);
          newPosts[index].Replies.push(res.data);
          setData({
            posts: [...newPosts],
          });
        }
        type === "post"
          ? setShowNewPostView(false)
          : setShowNewReplyView(false);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
    return true;
  };
  // like post and reply
  const likeHttp = async (type, id, liked) => {
    await axiosInstance
      .put(`/${type}/like`, { id, liked })
      .then((res) => {
        // type = post, loop through posts and update likes
        let newPosts = [...data.posts];
        newPosts.forEach((post) => {
          if (type === "post" && post.id === res.data.id) {
            liked ? post.likes++ : post.likes--;
          }
          if (type === "reply" && post.Replies) {
            post.Replies.forEach((reply) => {
              if (reply.id === res.data.id) {
                liked ? reply.likes++ : reply.likes--;
              }
            });
          }
        });
        setData({
          posts: [...newPosts],
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
    getAllPostHttp,
    newHttp,
    setReplyId,
    likeHttp,
  };
  return <Context.Provider value={values}>{props.children}</Context.Provider>;
}

export default ContextProvider;
