import { useContext, useEffect, useState } from "react";
import Post from "./post";
import { PostList as PostListData } from "../store/post-list-provider";
import WelcomeMessage from "./welcomeMessage";
import LoadingSpinner from "./loading";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  // const { postList } = useContext(PostListData);
  const postList = useLoaderData();
  // const [fetching, setFetching] = useState();
  // useEffect(() => {
  //   setFetching(true);
  //   const controller = new AbortController();
  //   const signal = controller.signal;
  //   fetch("https://dummyjson.com/posts", { signal })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPost(data.posts);
  //       setFetching(false);
  //     });
  //   return () => {
  //     console.log("cleaning up useEffect");
  //     controller.abort();
  //   };
  // }, []);
  // const [dataFetched, setDataFetched] = useState(false);
  // if (!dataFetched) {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPost(data.posts);
  //     });
  //   setDataFetched(true);
  // }
  return (
    <>
      {/* {fetching && <LoadingSpinner />} */}
      {/* !fetching && */ postList.length === 0 && <WelcomeMessage />}
      {
        /* !fetching && */ postList.map((post) => (
          <Post key={post.id} post={post} />
        ))
      }
    </>
  );
};
export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};
export default PostList;
