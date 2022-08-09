import React from 'react';
import Banner from '../Component/Banner';
import Footer from '../Component/Footer';
import Info from '../Component/Info';
import Navbar from '../Component/Navbar';
import Products from '../Component/Products';
import Promotion from '../Component/Promotion';
import Reviews from '../Component/Review';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Info></Info>
            <Products></Products>
            <Promotion></Promotion>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;