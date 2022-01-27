import React from 'react';

const ErrorMessage = ({ children }) => {
  return (
    <div style={{ background: 'red', color: 'white', padding: '3px' , marginTop:'25px', marginBottom:'25px'}}>
      {children}
    </div>
  );
};

export {ErrorMessage};