import React from 'react'

const Card = (props) => {

    // Destructuring the parameter so that only name, email, id is used
    // instead of prop.name, prop.email, prop.id -> can be done in declaration or as a const (See below 2 lines)
    // const Card = ({ name, email, id }) => {
    const {name, email, id} = props;

    return (
        // tachyons styling added for the whole div
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>

            {/*image link + template string + image size set to 200x200*/}
            <img src={`https://robohash.org/${id}?200x200`} alt='robots'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
