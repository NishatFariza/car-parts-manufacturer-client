import React from 'react';

const Review = ({reviewUser}) => {

    const { name, img, review } = reviewUser;

    return (
        <div>
           <h3>{name}</h3>
        </div>
    );
};

export default Review;