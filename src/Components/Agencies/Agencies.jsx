import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Agencies_style.css';

import img2 from './img2.png'



const Agencies = () => {
    useEffect(()=>{
        Aos.init({duration:2000})

    },[])


    return (
        <div>
            <div className='col-12 mx-auto  mt-5  '  >
                <div data-aos="flip-down" className="imgContainer row mx-auto text-center  d-flex justify-content-md-center justify-content-center" style={{direction:'rtl'}}>
                <div className='col-10   col-md-6' data-aos="flip-down">
                   <img  className='imgAgencies' src={img2} />
                   </div>
                
                  
                   

                </div>

            </div>
        </div>
    )
}

export default Agencies
