import React from 'react';
import './Comment_style.css';

const Comment = (props) => {
    return (
        <div className='commentConntainer rounded-3'>
           <img src={props.prodata.img} className='img_comm pb-1' />

            <h1 className='nameComment'>
                {props.prodata.name}
                
            </h1>
            <p className='text-white comm'>
                {props.prodata.comments}
            </p>
            <i class="fas fa-heart text-danger" 
             style={{marginTop:'-5px'}}></i>
        </div>
    )
}

export default Comment
