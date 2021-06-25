import logo from './logo.svg';
import './App.css';
import Map from './Map/Map';
import Direction from './Map/Direction';
import { useState } from 'react';


function App() {
  const [origin,setOrigin]=useState('');
  const [destination,setDestination]=useState('');
  return (
   <div>
     <input type="text" placeholder='Starting From'  onBlur={e=> setOrigin(e.target.value)} name="" id=""/>
     <input type="text" placeholder='Going Destination'  onBlur={e=> setDestination(e.target.value)} name="" id=""/>
  <Direction origin={origin} destination={destination}></Direction>
   </div>
  );
}

export default App;
