import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = (props) => {
const [category,setCategory]=useContext(CategoryContext);
    return (
        <div>
            <h1>this is header:{category}</h1>
            <button onClick={()=>setCategory('laptop')}>laptop</button>
            <button onClick={()=>setCategory('mobile')}>mobile</button>
            <button onClick={()=>setCategory('camera')}>camera</button>
        </div>
    );
};

export default Header;