import React from 'react';
import Banner from '../Component/Banner';
import Info from '../Component/Info';
import Navbar from '../Component/Navbar';
import Products from '../Component/Products';
import Promotion from '../Component/Promotion';

const index = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Info></Info>
      <Products></Products>
      <Promotion></Promotion>
    </div>
  );
};

export default index;