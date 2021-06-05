import React from 'react';
import Card from "../Card/Card";

// Deconstructed prop (robots)
const CardList = ({robots}) => {
    if (true) {
        throw new Error("whoops")
    }
    return (
        <div>
            {
                // Maps through the robots and uses indices to display, rather than posting 10 cards
                robots.map((user, i) => {

                    // A unique key must be given to the items in a list.
                    // The virtual DOM wont be able to know which cards were deleted or changed
                    // and will have to re-render everything, however with the key it only changes
                    // that one specific component, minimizing the work the DOM has to do.
                    return <Card
                        key={i}
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}
                    />
                })
            }
        </div>
    );
}
;

export default CardList;
