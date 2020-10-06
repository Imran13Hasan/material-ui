import React from 'react';

const Comment = (props) => {
    console.log(props)
    const { name, email, body } = props.dt;
    return (
        <div className='container' style={{display: 'flex'}}>
            <div className='image'>
                <img src="https://source.unsplash.com/user/erondu/100x100" alt=""/>
            </div>
            <div style={{ padding: '10px', margin: '10px', borderBottom: '1px solid gray' }}>
                <h5>Name: <small>{name}</small></h5>
                <h5>Email: <small>{email}</small></h5>
                <h5>Comment: <small>{body}</small></h5>
            </div>
        </div>
    );
};

export default Comment;