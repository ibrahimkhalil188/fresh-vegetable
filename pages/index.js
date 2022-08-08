import React from 'react';
import Banner from '../Component/Banner';
import Info from '../Component/Info';
import Navbar from '../Component/Navbar';

const index = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Info></Info>
    </div>
  );
};

export default index;