import React, { useState } from "react";
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";

const MyForm = ({ addToList }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  function addPost(ev) {
    ev.preventDefault();
    const newPost = {
        ...post, id: Date.now()
    };
    addToList(newPost);
    setPost({ title: "", body: "" });
  }
  return (
    <form style={{ width: "100%" }}>
      <MyInput
        value={post.title}
        onChange={(ev) => setPost({ ...post, title: ev.target.value })}
      />
      <MyInput
        value={post.body}
        onChange={(ev) => setPost({ ...post, body: ev.target.value })}
      />
      <MyButton onClick={addPost}>Add</MyButton>
    </form>
  );
};

export default MyForm;
