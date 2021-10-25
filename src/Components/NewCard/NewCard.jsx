import React from 'react';
import './new_card_style.css';



const NewCard = (props) => {

  

    return (
        <div className=''>
            <div className='carts p-1 d-flex flex-column justify-content-end  rounded-3  '>
                
              <p style={{fontSize:'15px'}} className='text-white  '>
                 {props.name}
                
              </p>
              
              <p className='text-muted '>{props.qual}</p>
              <p className='text-white '>{props.price}</p>
              
              <div className="order_Carts_sections ">
                  <button className='btn btn-transparent'>
                  <i class="fas fa-cart-plus text-white"></i>
                  </button>
                  <button className='btn btn-transparent'>
                  <i class="fas fa-shipping-fast text-warning"></i>
                  </button>
              </div>

              <img className=' card_img' src={props.img}/>
                  
                   
                

            </div>
        </div>
    )
}

export default NewCard
