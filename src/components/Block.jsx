import React from 'react'
import MyButton from "./UI/button/MyButton";
import { useNavigate  } from "react-router-dom";

function Block({post, remove}){
    let router = useNavigate();
    return(
        <div className="block">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <MyButton onClick={() => router(`/posts/${post.id}`)}>Open</MyButton>
            <MyButton onClick={() => remove(post)}>Delete</MyButton>
        </div>
    )
}

export default Block