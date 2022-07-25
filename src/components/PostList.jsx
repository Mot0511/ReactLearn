import React from 'react';
import Block from "./Block";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import '../css/index.css'

const PostList = ({posts, title, remove}) => {
    if (posts.length === 0){
        return <h1 style={{textAlign: 'center'}}>Posts not found</h1>
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
                <TransitionGroup>
                {
                    posts.map(post =>
                        <CSSTransition
                            key={post.id}
                            timeout={500}
                            classNames="post"
                        >
                            <Block post={post} remove={remove}/>
                        </CSSTransition>
                    )
                }
                </TransitionGroup>

        </div>
    );
};

export default PostList;