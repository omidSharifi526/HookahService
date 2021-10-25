import React from 'react';
import '../HappyCostumer/Happy_costumer_style.css'


function HappyCostumer() {
    return (
        <div>
            <div className='happyContainer shadow  d-none d-md-flex '>
                <span className='text-white  text-info'> <i class="fas fa-smile-beam text-warning"></i> مشتری خوشحال  </span>
                <div className="happy_persons w-50 h-50  d-flex justify-content-evenly align-items-center">
                <i class="fab fa-amazon-pay text-white "></i>
                <i class="fab fa-apple text-white "></i>
                <i class="fas fa-ad text-white"></i>
                <i class="fab fa-airbnb text-white"></i>



                </div>


            </div>
        </div>
    )
}

export default HappyCostumer
