import React from 'react';
import { useEffect } from 'react';

import Aos from "aos";
import "aos/dist/aos.css";
import imgsLand from './LandingComponents/logo.png';




import '../LandingContent/LandingContentStyle.css';
import HeaderBanner  from './LandingComponents/HeaderBanner';
import MainService from '../LandingContent/LandingComponents/MainService';
import MiddlleBanner from './LandingComponents/MiddleBanner/MiddlleBanner';
import FoodRotations from './LandingComponents/FooterRotations/FoodRotaions'




 function LandingContent() {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])



    return (
        <div >
            <div className="row " style={{direction:'rtl'}}>
               



                <div className="col-12 col-md-8 mt-5" >
                    <div className="main_Content_land ">
                        
                        
                        <MainService/>
                        <div className='mt-5 '>
                        <MiddlleBanner/>
                        </div>
                        <div className='d-md-none'>
                        <HeaderBanner/>
                        </div>
                       
                     



                    </div>

                </div>

                
                <div className='col-12 col-md-4 ' >
                
                <div  className="Land_img_container d-md-block d-none   ">
                    <img data-aos="zoom-in-down" className="main_image" src={imgsLand} alt="" />

                 </div>

                </div>


               
                

             


            </div>
            

          
        </div>
    )
}

export default LandingContent;
