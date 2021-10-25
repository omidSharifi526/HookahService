import React from 'react';
import Cart from '../Hookah_container/Cart/Cart';
import IMG1 from './Cart/imgs/1.jpg';
import IMG2 from './Cart/imgs/2.jpg';
import IMG3 from './Cart/imgs/3.jpg';



import './Hookah_Container_Style.css';
import './swiper_style.css'


import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';
  // import Swiper styles

  import SwiperCore, { Navigation, Pagination } from 'swiper/core';

  // configure Swiper to use modules
  SwiperCore.use([Navigation, Pagination]);

  


  













class Hookah_Container extends React.Component {

  
  
  



    componentDidMount(){
        var swiper = new Swiper(".mySwiper", {
            effect:'cube',
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
    }



    render(){
        return (
            <div>
                <div className="row  " style={{direction:'rtl'}} >
                 <div className='col-12 col-md-9 mx-auto'>
                 <div className='Hookah_Container  text-center mx-auto'>
                        <div className="Header_Hookah_Container shadow rounded-3 ">
                            <h3 className='text-white'>قلیون</h3>
                            <h5 className='text-white'>بیشتر</h5>
    
                        </div>
                        <div className='carts_Hookah_Container rounded-3 border '>
                          <div className="row swiper ">



                          <div class="swiper-container mySwiper">
                              <div class="swiper-wrapper"> 
                              <div class="swiper-slide p-md-5 p-1"><Cart img={IMG1}/></div>
                               <div class="swiper-slide p-md-5"><Cart img={IMG2}/></div>
                               <div class="swiper-slide p-md-5"><Cart img={IMG3} /></div>
                                

                             
                               </div>
                                <div class="swiper-button-next"></div>
                               <div class="swiper-button-prev"></div>
                        </div>

                          



                              
                          
    
                          </div>
                            
                        </div>
                    </div>
                 </div>
    
    
                </div>
            </div>
        )




    }









    
}

export default Hookah_Container
