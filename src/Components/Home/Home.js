import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';

const Home = () => {

    const [post, setPost] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    return (
        <div>
            <h1>Total Posts: {post.length}</h1>
            {
                post.map(data => <Posts key={data.id} data={data}></Posts>)
            }
        </div>
    );
};

export default Home;