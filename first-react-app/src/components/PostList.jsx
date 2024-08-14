import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
  // const nodeRef = useRef(null);
  if (posts.length === 0) return <div>Посты не найдены!</div>;
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}>
      <h2 style={{ width: "100%" }}>{title}</h2>
      <TransitionGroup style={{ width: "100%" }}>
        {posts.map((post, index) => {
          const nodeRef = React.createRef();
          return (
            <CSSTransition
              key={post.id}
              timeout={100}
              classNames="post"
              nodeRef={nodeRef}>
              <div ref={nodeRef}>
                <PostItem
                  remove={remove}
                  number={index + 1}
                  post={post}
                  key={post.id}
                />
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
