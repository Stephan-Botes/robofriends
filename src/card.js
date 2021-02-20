import React from 'react'; // React is always required when writing jsx, which is the html like syntax used below

const Card = ({ id, name, email }) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img src={`https://robohash.org/${id}`} alt='robots'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;