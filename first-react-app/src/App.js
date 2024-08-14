import React, { useEffect, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyForm from "./components/MyForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/MyButton/MyButton";
import Loader from "./components/UI/Loader/Loader";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import { useFetching } from "./hooks/useFetching";

function App() {
  const [posts, setPosts] = useState([]);

  const [modal, setModal] = useState(false);

  const [filter, setFilter] = useState({ query: "", sort: "" });

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostLoading, postLoadingError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const addToPosts = (post) => {
    setPosts([...posts, post]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((elem) => post.id !== elem.id));
  };

  return (
    <div className="App">
      <MyButton
        onClick={() => {
          setModal(true);
        }}
        className="add-post-btn">
        Create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <MyForm addToList={addToPosts} />
      </MyModal>

      <PostFilter
        filter={filter}
        setFilter={setFilter}
        style={{ width: "100%" }}
      />
      {
        postLoadingError && <h1>Loading error: {postLoadingError}</h1>
      }
      {isPostLoading ? (
        <Loader />
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Posts"
        />
      )}
    </div>
  );
}

export default App;
