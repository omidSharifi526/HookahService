import React from 'react';
import './FoodContainer_styles.css';
import Cart from '../Hookah_container/Cart/Cart'





import './swiper_style.css'


import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';
  // import Swiper styles

  import SwiperCore, { Navigation, Pagination } from 'swiper/core';

  // configure Swiper to use modules
  SwiperCore.use([Navigation, Pagination]);

  


  













class Foods_Container extends React.Component {



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
                 <div className='col-10 col-md-9 mx-auto'>
                 <div className='Foods_Container  text-center mx-auto'>
                        <div className="Header_Foods_Container shadow rounded-3 ">
                            <h3 className='text-white'>غذا</h3>
                            <h5 className='text-white text-primary'>بیشتر</h5>
    
                        </div>
                        <div className='carts_Hookah_Container rounded-3  '>
                          <div className="row swiper ">



                          <div class="swiper-container mySwiper">
                              <div class="swiper-wrapper">
                               <div class="swiper-slide p-md-5 p-1"><Cart/></div>
                               <div class="swiper-slide p-md-5"><Cart/></div>
                               <div class="swiper-slide p-md-5"><Cart/></div>
                               </div>
                                <div class="swiper-button-next" ></div>
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

export default Foods_Container
