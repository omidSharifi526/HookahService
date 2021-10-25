import React from 'react';
import {useCart} from 'react-use-cart'

const ItemCard = (props) => {
  console.log(useCart());
  const {addItem}=useCart();
    return (
        <div className='col-9 mx-auto col-md-3 mt-1 mb-2'>

<div className="card p-0 w-100 bg-dark text-light text-center   shadow mt-1 mb-2 border" style={{height:'350px'}} >
  <img src={props.img} class="card-img-top h-50 " alt="..."/>
  <div className="card-body d-flex flex-column justify-content-justify-content-around">
    <h5 className="card-title p-1 m-1">{props.name}</h5>
    <p className="card-tex p-1 m-1t">{props.quality}</p>
    <p className="card-text p-1 m-1">{props.price}</p>
   <button onClick={()=>addItem(props.item)} className='btn btn-success'>سفارش</button>
    
  </div>
</div>
            
        </div>
    )
}

export default ItemCard
