import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
    const {name}=props.product;
    return (
        <div>
           <h1>This is your category details</h1>
           <h5>Selected products: {name}</h5>
        </div>
    );
};

export default CategoryDetail;