import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-provider";
// import { useNavigate } from "react-router-dom";

import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);
  // const navigate = useNavigate();
  // const userIdElement = useRef();
  // const postTitleElement = useRef();
  // const postBodyElement = useRef();
  // const reactionsElement = useRef();
  // const tagsElement = useRef();
  // const handleSubmit = (event) => {
  // event.preventDefault();
  // const userId = userIdElement.current.value;
  // const postTitle = postTitleElement.current.value;
  // const postBody = postBodyElement.current.value;
  // const reactions = reactionsElement.current.value;
  // const tags = tagsElement.current.value.split(" ");
  // userIdElement.current.value = "";
  // postTitleElement.current.value = "";
  // postBodyElement.current.value = "";
  // reactionsElement.current.value = "";
  // tagsElement.current.value = "";
  // fetch("https://dummyjson.com/posts/add", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     title: postTitle,
  //     body: postBody,
  //     reaction: reactions,
  //     userId: userId,
  //     tags: tags,
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((post) => {
  //     addPost(post);
  //     navigate("/");
  //   });
  // addPost(userId, postTitle, postBody, reactions, tags);
  // };
  return (
    <Form method="POST" className="create-post" /*onSubmit={handleSubmit}*/>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User Id here
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Your user Id"
          // ref={userIdElement}
          name="userId"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
          // ref={postTitleElement}
          name="title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          rows={4}
          className="form-control"
          id="body"
          placeholder="Tell us more about it..."
          // ref={postBodyElement}
          name="body"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          No. of reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post?"
          // ref={reactionsElement}
          name="reactions"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="Please enter your tags using space."
          // ref={tagsElement}
          name="tags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </Form>
  );
};
export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
    // body: JSON.stringify({
    //   title: postTitle,
    //   body: postBody,
    //   reaction: reactions,
    //   userId: userId,
    //   tags: tags,
    // }),
  })
    .then((res) => res.json())
    .then((post) => {
      addPost(post);
      // navigate("/");
    });
  return redirect("/");
}
export default CreatePost;
