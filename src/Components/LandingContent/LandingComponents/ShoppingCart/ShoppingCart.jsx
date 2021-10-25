import React,{useState,useEffect} from 'react';
import NewSwiper from '../../../NewSwiper/NewSwiper'
import  './ShoppingCart.css';


const ShoppingCart = ({mshow}) => {
const[show,setShow]=useState(true);

useEffect(() => {
    setShow(mshow)
   
}, [])



function handleClose() {
setShow(!show)

}
    return (
        <div className={show?'show':'notshow'}>
            <div className=' mx-auto m-auto cartshopContainer rounded shadow' >
           <button onClick={handleClose} className='btn btn-danger m-1'>&times;</button>
           <hr/>
           <h1 className='text-center mx-auto  fs-6 text-light'>همین حالا سفارش دهید</h1>
           <NewSwiper data-aos="flip-left" service='قلیون'/>
           </div>
        </div>
    )
}

export default ShoppingCart
