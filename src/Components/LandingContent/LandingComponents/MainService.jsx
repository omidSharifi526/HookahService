import React from 'react';
import './main_Service.css';
import OrderHookah from '../../../Pages/OrderHookah';

import {
     BrowserRouter as Router,
     Switch,
     Route,
     Link
   } from "react-router-dom";
   






import hookahIMG from '../../../asset/imgs/LandingPage/BtnImgs//Hookah.png';
import foodIMg from '../../../asset/imgs/LandingPage/BtnImgs//food.png';
import smokeIMG from '../../../asset/imgs/LandingPage/BtnImgs/Smoke.png';
import {useState,useEffect}  from 'react';

function MainService() {

    
     

    




    return (

     


        <div className=''>
          <Router>
               <Switch>
               <Route path='/OrderHookah'>
                    <OrderHookah/>
               </Route>
              </Switch>
          
          </Router>
           
           <div className=' d-flex justify-content-center align-items-center order_btn_container  '>

              <div className="service_btn_containers d-flex justify-content-center align-items-center rounded-3 ">



               <Link to="/OrderHookah" >

               <div  className='srevice_btn    mx-auto text-center' >
                   <img src={hookahIMG} alt="" className="btnIMG img_b_1   " />
                   <span className="titlle d-block text-center text-white ">
                       سفارش قلیون

                   </span>
               </div>
               </Link>

               
              </div>




              <div className="service_btn_containers d-flex justify-content-center align-items-center rounded-3 ">
              <div className='srevice_btn   mx-auto text-center' >
                   <img src={foodIMg} alt="" className="btnIMG img_b_1   " />
        

               </div>

               <span className="titlle d-block text-center text-white ">
                     سفارش غذا

                   </span>
              </div>



              <div className="service_btn_containers d-flex justify-content-center align-items-center  rounded-3">
              <div className='   mx-auto text-center srevice_btn' >
                   <img src={smokeIMG} alt="" className="btnIMG img_b_1   " />
               </div>

               <span className="titlle d-block text-center  text-light">
                    دخانیات 

                   </span>
              </div>



                
               




                

           </div>
        </div>
    )
}

export default MainService
