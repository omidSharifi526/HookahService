import React,{useState,useEffect,} from 'react';
import Item from '../Components/ItemCard/ItemCard';
import data from './data/data_jsn.json';
import Cart from '../Components/Cart/Cart';
import {CartProvider} from 'react-use-cart'
import Homee from './Homee';

const OrderHookah = () => {

    const [items,setItems]=useState(null);

    useEffect(() => {
        console.log('effect is run');
        setItems(data)
        return () => {
            
        }
    }, [])

    
    return (
        <div>
            <CartProvider>
           <Homee/>
             <Cart/>
         </CartProvider>
        </div>
    )
}

export default OrderHookah
