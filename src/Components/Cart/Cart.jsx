import React from 'react';
import {useCart} from 'react-use-cart'

const Cart = () => {
    const {items,isEmpty,totalUniqueItems,totalItems,cartTotal,updateItemQuantity,removeItem,emptyCart}=useCart();
    if (isEmpty) {
        return  (<div><h1 className='text-light text-center rounded-3 fs-6 bg-danger p-3 col-10 mx-auto'>سبد سفارش شما خالی است</h1></div>)
    }
    return (
        <section className='container'>
            <div className='row justify-content-center' >
        <div className='col-11 mx-auto' >
            <h5 className='text-light text-center mx-auto'>
               سبد خرید شما
            </h5>
            <table className='table table-dark text-light table-hover m-0 rounded-3 col-10 mx-auto '>
               <tbody>
               {
                    items.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td><img className='rounded-3' src={item.img} alt="" style={{height:'6rem',width:'6rem'}} /></td>
                                <td>{item.name}</td>
                                <td>قیمت: {item.price}</td>
                                <td>تعداد:{item.quantity}</td>
                                <td><button className='btn btn-info m-1' onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>-</button>
                                <button className='btn btn-info m-1' onClick={()=>updateItemQuantity(item.id,item.quantity+1)} >+</button>
                                <button className='btn btn-danger m-1' onClick={()=>removeItem(item.id)}>حذف سفارش</button>
                                </td>
                            </tr>
                        )
                    })
                }
               </tbody>

            </table>
            {/* <div className='col-auto ms-auto'>
            <h1>
                {cartTotal}
            </h1>

        </div> */}
        <div className='mx-auto col-6'>
            <button className='btn btn-danger mx-auto mt-2 ' onClick={()=>emptyCart()}>خالی کردن سبد سفارشات</button>

        </div>
        </div>
       
        </div>
        </section>
    )
}

export default Cart
