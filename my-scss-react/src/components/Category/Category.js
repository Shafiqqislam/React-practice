import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const allProduct =[{name:'lenovo', category:'laptop'},{name:'asus', category:'laptop'},{name:'dell', category:'laptop'},
               {name:'samsung', category:'mobile'},{name:'nokia', category:'mobile'},{name:'sony', category:'mobile'},
               {name:'canon', category:'camera'},{name:'nikon', category:'camera'},{name:'samsung', category:'camera'}]
const Category = (props) => {
 const category = useContext(CategoryContext);
 const [products,setProducts] = useState([]);
 useEffect(()=>{
   const matchedProducts = allProduct.filter(pd=> pd.category === category);
   setProducts(matchedProducts);
 },[category]);
    return (
        <div>
            <h3>Your selected category : {category}</h3>
            {
                products.map(pd=> <CategoryDetail product={pd}></CategoryDetail>)
            }
        </div>
    );
};

export default Category;