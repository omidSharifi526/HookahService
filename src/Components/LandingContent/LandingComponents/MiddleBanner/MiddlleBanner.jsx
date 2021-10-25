import React from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

import '../MiddleBanner/middle_banner_style.css';
import img from '../../../../asset/imgs/LandingPage/images.png'

function MiddlleBanner() {

useEffect(()=>{
    Aos.init({duration:2000})
},[])


    return (
        <div className="row mt-5">
                 <div className='col-9 col-md-6 mx-auto   ' style={{height:'100px'}}>
                     <div className="img_middle_container rounded-3 ">
                         <img data-aos="fade-up"
                              data-aos-anchor-placement="top-bottom"  className='banner_img_2' src={img} alt="" />

                     </div>
                 </div>
             </div>
    )
}

export default MiddlleBanner
