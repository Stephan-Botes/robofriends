import React from 'react';

const Scroll = (props) => {
    return (
        // Makes the div container the scrollable part, instead of the whole page
        // This keeps the searchbox and heading at the top
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;
