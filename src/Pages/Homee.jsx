import React from 'react';
import Item from '../Components/ItemCard/ItemCard';
import data from './data/data_jsn.json'


const Homee = () => {
    return (
        <div>

<div className='row container mx-auto '>
            
            {
                data.map((item,index)=>{
                    //console.log(item);
                    return (<Item key={index}
                          item={item} 
                          img={item.img} 
                          name={item.name}
                          price={item.price}
                          quality={item.quality}
                          />)
                })
               
            }
 
             
         </div>
            
            
        </div>
    )
}

export default Homee
