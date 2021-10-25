import React from 'react';
import './CartStyle.css';
import img from './imgs/headHookah.png'


const Cart = (props) => {
    return (
        <div className='col-10 col-md-8 mx-auto  mt-3 ' style={{direction:'rtl'}}>
            <div className="hookCardContainer rounded-3 shadow p-1 ">
                <div className="cardHeader">
         
              
                <button className='nemuBtn btn'>
                    <i class="fas fa-bars text-white"></i>
                    </button>

                    <button className='nemuBtn btn'>
                    <i class="fas fa-leaf text-warning fs-3"></i>

                    </button>
                    <button className='nemuBtn btn'>
                    <i class="fas fa-shopping-cart text-white"></i>

                    </button>

                </div>


                <div className="cardBody">
                    <p className='fw-bolder text-white'>لبنانی </p>
                    <span className=' p-1 text-muted'>با چند کلیک قلیون آماده خود را تحویل</span>
                    

                </div>
                <div className="footerCard">
                    <button className='btn btn-outline-dark '>
                     
                    </button>
                    <button className='btn btn-outline-dark '>
                     <i className='mybutton text-success'> دیگر طعم ها  </i>
                    </button>

                </div>

            </div>
         
            
        </div>
    )
}

export default Cart
