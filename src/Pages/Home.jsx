import React from 'react';

import '../asset/style/totalStyle.css';
import { useState,useEffect } from 'react';




import Loading from '../Components/Loading/Loading';
import ManeMenu from '../Components/MainNav/MainNav' ;
import Slider from '../Components/Slider/Slider'
import LandingContent from '../Components/LandingContent/LandingContent';
import NewSwiper from '../Components/NewSwiper/NewSwiper'

import Representation from '../Components/Representation/Representation'
import Agencies from '../Components/Agencies/Agencies';
import YourComments from '../Components/YourComments/YourComments';
import BannerFooter from '../Components/BannerFooter/BannerFooter';
import MainFooter from '../Components/MainFooter/MainFooter';
import Warning from '../Components/WarningPrivacy/Warning'





function Home() {
 let LoadingPage=true;

    
  


    return (
        
       

     

        <div>
           
            <div className=' container-fluid totalContainer'>


               
              
                <Slider/>
                <LandingContent/>
                <NewSwiper data-aos="flip-left" service='قلیون'/>
                <Representation/>
                <NewSwiper service='غذا'/>
                <Agencies/>
                <NewSwiper service='دخانیات'/>
                <YourComments/>
                <BannerFooter/>
                <MainFooter/>
                <Warning/>
                
                
                
                


              
               
               
                
                
                
               


               
                
            </div>
            
            
        </div>
    )
}

export default Home
