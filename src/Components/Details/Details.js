import { Button, Link } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const Details = () => {

    const { link } = useParams()



    const [details, setDetails] = useState({})
    const [comment, setComment] = useState([])

    const { id, userId, title, body } = details;
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${link}`)
            .then(res => res.json())
            .then(data => setDetails(data))

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${link}`)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [details, comment])


    // const [comment, setComment] = useState([])
    // console.log(comment)
    // useEffect(()=>{
    //     fetch(`https://jsonplaceholder.typicode.com/comments?postId=${link}`)
    //     .then(res => res.json())
    //     .then(data => setComment(data))
    // }, [])

    // const handleComments = ()=>{
    //     const history = useHistory;
    //     history.push(<Comment></Comment>)
    // }

    const history = useHistory();
    const handleClick = (link) => {
        history.push('/home')
    }

    return (
        <div>
            <h1>Post No: {link}</h1>
            <h2>Title: {title}</h2>
            <h4>Body: {body}</h4>
            <br />

            <Button onClick={() => handleClick(id)} size="small" color="primary">
                Home
            </Button>

            <h2 style={{ textAlign: 'center', color: 'purple' }}>Comments: </h2>
            {/* <button onClick={()=> handleComments(comment)}>Comments</button> */}
            {
                comment.map(dt => <Comment dt={dt}></Comment>)
            }
        </div>
    );
};

export default Details;