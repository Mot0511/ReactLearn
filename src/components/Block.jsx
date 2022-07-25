import React from 'react'
import MyButton from "./UI/button/MyButton";

function Block({post, remove}){
    return(
        <div className="block">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <MyButton onClick={() => remove(post)}>Delete</MyButton>
        </div>
    )
}

export default Block