import AllProductts from '../components/AllProducts'
import Banner from '../components/Banner';
import Featured from '../components/Featured'
import { useState, useEffect } from "react";
import Footer from '../components/Footer';

import img1 from '../assets/Slider/Slider1.jpg'
import img2 from '../assets/Slider/Slider2.jpg'
import img3 from '../assets/Slider/Slider3.jpg'
import { Outlet } from 'react-router-dom';



function Home(props) {
    const { Data } = props;
    return (
        <>
            <div className="container">
                <Outlet />
                <Featured Data={Data} />
                <AllProductts Data={Data} From={0} To={3} />
                <h1 className='heading'>Explore More</h1>
                <Banner Title={'Office'} Image={img1} />
                <AllProductts Data={Data} From={3} To={9} />
                <Banner Title={'Living Room'} Image={img2} />
                <AllProductts Data={Data} From={9} To={15} />
                <Banner Title={'Kids'} Image={img3} />
                <AllProductts Data={Data} From={15} To={21} />
            </div>
        </>
    )
}

export default Home;