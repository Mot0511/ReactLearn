import React, {useState} from 'react'
import './css/index.css'
import PostList from './components/PostList'
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    let [posts, setPosts] = useState([
            {id: 0, title: 'First', description: 'descruiption'},
            {id: 1, title: 'First', description: 'descruiption'},
            {id: 2, title: 'First', description: 'descruiption'}
        ]
    )
    function createPost(post){
        setPosts([...posts, post])
    }
    function removePost(post){
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
      <div className="App">
          <PostForm create={createPost} posts={posts}/>
          <MySelect
              defaultvalue={'Select sort'}
              options={[
                  {name: 'ByName', value: 'title'},
                  {name: 'ByDescription', value: 'descruiption'}
              ]}
          />
          {
              posts.length
                ? <PostList remove={removePost} posts={posts} title={'List 1'} />
                  : <h1 style={{textAlign: 'center'}}>Posts not found</h1>
          }

      </div>

  );
}

export default App;
