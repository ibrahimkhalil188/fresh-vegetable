import React from 'react';
import Banner from '../Component/Banner';
import Info from '../Component/Info';
import Navbar from '../Component/Navbar';
import Products from '../Component/Products';

const index = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Info></Info>
      <Products></Products>
    </div>
  );
};

export default index;