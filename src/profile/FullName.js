import React from 'react';
import Typed from 'react-typed';
import './profile.css';

const FullName = (props) => {
    return (
      <div className="Name">
      <p style={{color :'black', fontWeight:'bold'}}> FullName:</p>

      <Typed
                strings={['JOUINI Rania']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed>
      </div>
    );
  };


export default FullName;