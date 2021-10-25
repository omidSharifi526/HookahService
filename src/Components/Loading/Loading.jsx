import React,{useState,useEffect} from 'react';
import moduleName from './Loading_style.css';

const Loading = () => {

    const[flag,setflag]=useState(true);
    useEffect(() => {
       setTimeout(() => {
           setflag(false)
       }, 3000);
    }, [])





    return (
        <div className={flag?'Loader_container':'notshow'} >
           <div class="spinner-grow" style={{height:'3rem',width:'3rem'}} role="status">
      
          </div>
          <p className='mt-2'>لطفا صبر کنید</p>
        </div>
    )
}

export default Loading
