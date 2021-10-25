import React from 'react';
import './BannerFooter.css';
import img from './asset/hamberguer.png';
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";


const BannerFooter = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
       },[])

    return (
        <div className="testclass mx-auto col-10 col-md-6 " >
            <div className='d-flex flex-column justify-content-center align-items-center' data-aos="flip-left" >
            <p className='text-white'>همه چیز برای شما آماده است</p>
            <img className='img-fluid  w-75 ' src={img} alt="" />
           
           

            </div>
            
        </div>
    )
}

export default BannerFooter
