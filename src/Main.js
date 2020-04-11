import React from 'react';
import './App.css';
import ProfilPhoto from './profile/ProfilPhoto';
import FullName from './profile/FullName';
import Adress from './profile/Adress';

function Main() {
  return (
    <div className="Main">
      <ProfilPhoto/>
      <FullName/>
      <Adress/>
         
    </div>
  );
}

export default Main;
