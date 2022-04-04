import React from 'react';
import "./App.css"
import Pic from "./component/profile/ProfilePic"
import FullName from './component/profile/FullName';
import Address from "component/profile/Address"

function App() {

  return( 
    <div className='div'>
    <Pic />
    <FullName />
    <Address />
  </div>
);

}

    

export default App;
