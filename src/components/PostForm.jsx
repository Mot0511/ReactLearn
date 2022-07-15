import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create, posts}) => {
    let [title, setTitle] = useState('')
    let [description, setDescription] = useState('')

    function addNewPost(){

        const newPost = {
            id: posts.length,
            title,
            description
        }

        setTitle('')
        setDescription('')
        create(newPost)

    }

    return (
        <form>
            <h1>Create post</h1>
            <MyInput
                placeholder={"Post name"}
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <MyInput
                placeholder={"Post description"}
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <MyButton type={"button"} onClick={addNewPost}>Create post</MyButton>
        </form>
    );
};

export default PostForm;