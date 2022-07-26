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
import {useFetching} from "./hooks/useFetching";
import {getPageCount} from "./utils/pages";
import {getPagesArray} from "./utils/pages";

function App() {
    let [posts, setPosts] = useState([])
    let [filter, setFilter] = useState({sort: '', query: ''})
    let [modal, setModal] = useState(false)
    let [totalPages, setTotalPages] = useState(0)
    let [limit, setLimit] = useState(10)
    let [page, setPage] = useState(1)
    let sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    let pagesArray = getPagesArray(totalPages)

    console.log([pagesArray])
    let [fetchPosts, isLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = (response.headers['x-total-count'])
        setTotalPages(getPageCount(totalCount, limit))
    })

    console.log(totalPages)
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
          <div style={{display: 'flex', justifyContent: 'center'}}>
          {
              pagesArray.map(p =>

                      <MyButton style={{width: '100px'}}>{p}</MyButton>

              )
          }
          </div>
      </div>

  );
}

export default App;
