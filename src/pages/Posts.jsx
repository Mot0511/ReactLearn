import React, {useState, useEffect, useMemo, useRef} from 'react'
import MyButton from "../components/UI/button/MyButton";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/pagination";
import Loader from "../components/UI/loader/loader";
// import './css/index.css'
// import PostList from './components/PostList'
// import PostForm from "./components/PostForm";
// import PostFilter from "./components/PostFilter";
// import MyModal from "./components/UI/MyModal/MyModal";
// import MyButton from "./components/UI/button/MyButton";
// import {usePosts} from "./hooks/usePosts";
// import PostService from "./API/PostService";
// import Loader from "./components/UI/loader/loader";
// import {useFetching} from "./hooks/useFetching";
// import {getPageCount} from "./utils/pages";
// import Pagination from "./components/UI/pagination/pagination";


function Posts() {
    let [posts, setPosts] = useState([])
    let [filter, setFilter] = useState({sort: '', query: ''})
    let [modal, setModal] = useState(false)
    let [totalPages, setTotalPages] = useState(0)
    let [limit, setLimit] = useState(10)
    let [page, setPage] = useState(1)
    let sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    let lastElement = useRef()
    let observer = useRef()
    let [fetchPosts, isLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data])
        const totalCount = (response.headers['x-total-count'])
        setTotalPages(getPageCount(totalCount, limit))
    })
    function changePage(page) {
        setPage(page)
    }
    useEffect(() => {
        if (isLoading) return
        if (observer.current) observer.current.disconnect()
        var callback = function(entries, observer) {
            if (entries[0].isIntersecting && page < totalPages) {
                console.log(page)
                setPage(page + 1)
            }
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElement.current)
    }, [isLoading])
    useEffect(() => {
        fetchPosts(limit, page)
    }, [page])

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
                isLoading &&
                <center><Loader/></center>
            }
            <PostList remove={removePost} posts={sortedAndSearchedPosts} isLoading={isLoading} title={'Posts'} />
            <div ref={lastElement} style={{height: 20}} />
            <Pagination totalPages={totalPages} page={page} changePage={changePage}/>
        </div>

    );
}

export default Posts;
