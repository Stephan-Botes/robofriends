import React from 'react';

const Scroll = (props) => {
    // Selects the property of the Scroll object and returns all its children, which in this case is the cardList
    return (
        <div style={{overflowY: 'scroll', height: '550px', padding: "0.2rem"}}>
            {props.children}
        </div>
    );
}

export default Scroll;