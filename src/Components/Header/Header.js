import React from 'react';

const Header = () => {

    const headerStyle ={
        background: '#5656ff',
        color: 'white',
        textAlign: 'center',
        padding: '10px',
        marginTop: '20px',
        marginBottom: '20px'
    }
    const textStyle ={
        fontSize: '45px',
        
    }

    return (
        <div style={headerStyle}>
            <h1 style={textStyle}>textbook</h1>
        </div>
    );
};

export default Header;