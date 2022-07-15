import React from 'react';
import Block from "./Block";

const PostList = ({posts, title, remove}) => {

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {
                posts.map(post =>
                    <Block post={post} remove={remove} key={post.id}/>
                )
            }
        </div>
    );
};

export default PostList;