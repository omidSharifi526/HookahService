import React, { Component } from 'react';
import './main_style.css';
import Cart from '../NewCard/NewCard';
import DataJson from '../NewSwiper/data_jsn.json'





import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';
  // import Swiper styles

  import SwiperCore, { Navigation, Pagination } from 'swiper/core';

  // configure Swiper to use modules
  SwiperCore.use([Navigation, Pagination]);




class NewSwiper extends Component {
componentDidMount(){

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}

    render() {
        return (




            <div>
             {/* ساخت هدر برای اسکرول کارت ها*/}
              <div className="row mt-5">
              <div className="header_swiper  col-10 col-md-9 mx-auto d-flex  justify-content-between  "
               style={{height:'50px',direction:'rtl'}}>

               <span className='text-white p-2 mt-2 fs-6'>{this.props.service}</span>
              

               <div className="headr_Carts_container d-flex justify-content-center flex-column align-items-center">
               <i class="far fa-hand-point-right  p-1 finger_mothions d-block fs-3" style={{direction:'rtl'}}></i>
               <span className='text-muted p-1 d-block'
                style={{fontSize:'0.65rem'}}>
                  ورق بزنید
               </span>
               

               </div>
               <span className=' mt-3 text-info'>بیشتر</span>
               

              </div>
              </div>



             
                
                
        <div className='mt-2'>
             <div class="swiper-container mySwiper">
      <div class="swiper-wrapper">
        {
          DataJson.map((dt,index)=>{
            
           return(
            <div key={index} className="swiper-slide">
              <Cart key={index} id={dt.id} name={dt.name} img={dt.img} price={dt.price} qual={dt.quality} />
              </div>

           )

          })
        }
       
        
      </div>
     
    </div>
        </div>
    
                
            </div>
        );
    }
}

export default NewSwiper;