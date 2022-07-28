import About from "../pages/About";
import Posts from "../pages/Posts";
import Post from "../pages/post";

export const routes = [
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: Post, exact: true}
]