import React from 'react';

export const Footer = () => {
  let Footerstyle={
    top: "100vh",
    position: "relative",
    width: "100%"
  }
  return (
    <footer className='bg-dark py-2 pt-2' style={Footerstyle}>
      <p className="text-center text-white" >
        CopyRight &copy; Dharam TodoList 2022
      </p>
    </footer>
  );
};
