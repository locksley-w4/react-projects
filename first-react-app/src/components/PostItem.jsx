import React from "react";
import MyButton from "./UI/MyButton/MyButton";

const PostItem = (props) => {
  return (
    <div className="post">
      <h2 className="post__title">
        {props.number}. {props.post.title}
      </h2>
      <div className="post__content">{props.post.body}</div>
      <div className="post__footer">
        <MyButton
          onClick={() => {
            props.remove(props.post);
          }}
          className="post__delete-btn">
          Delete post
        </MyButton>
      </div>
    </div>
  );
};
export default PostItem;
