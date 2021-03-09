import React from 'react';
import Card from "./Card";
import {robots} from "../robots"; // Can also destructure it below as a prop

const CardList = ({ robots }) => {

    return (
        // Fragment containing an array entry
        <>
            {
                // Maps through the robot array and assigns the properties
                robots.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    );
                })
            }
        </>
    );
}

export default CardList;