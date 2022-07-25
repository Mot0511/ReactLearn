import React, {useState, useEffect, useMemo} from 'react'
import './css/index.css'
import PostList from './components/PostList'
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import axios from "axios";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/loader";

function App() {
    let [posts, setPosts] = useState([])
    let [filter, setFilter] = useState({sort: '', query: ''})
    let [modal, setModal] = useState(false)
    let [isLoading, setIsLoading] = useState(false)
    let sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    async function fetchPosts() {
        setIsLoading(true)
        setTimeout(async () => {
            const posts = await PostService.getAll()
            setPosts(posts)
            setIsLoading(false)
        }, 2000)
    }

    useEffect(() => {
        fetchPosts()
    }, [ ])

    function createPost(post){
        post.id = post.id++
        setPosts([...posts, post])
        setModal(false)
    }
    function removePost(post){
        setPosts(posts.filter(p => p.id !== post.id))
    }
    return (
      <div className="App">
          <MyButton onClick={fetchPosts}>Get response</MyButton>
          <MyButton onClick={() => setModal(true)}>Create post</MyButton>
          <MyModal visible={modal} setVisible={setModal}>
              <PostForm create={createPost} posts={posts}/>
          </MyModal>
          <PostFilter filter={filter} setFilter={setFilter} />
          {
              isLoading
                  ? <center><Loader /></center>
                  : <PostList remove={removePost} posts={sortedAndSearchedPosts} isLoading={isLoading} title={'Posts'} />

          }
      </div>

  );
}

export default App;
