import React from 'react';
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './Representation_style.css';

import coor from './coor.png';

const Representation = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])



    return (
        <div className='row mt-5 mb-2'>
           <div data-aos="flip-down" className='col-11 col-md-8 mx-auto d-flex  flex-column  align-items-center justify-content-center ' style={{height:'150px'}}>
           <img  src={coor} className='mainImg'/>
           <p  className=' main_text mt-3 ' >
               جهت همکاری و اخذ نمایندگی کلیک کنید
           </p>
           </div>
            
        </div>
    )
}

export default Representation
