import React from 'react';
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './YourComments.css';
import Json_Data from './User_info.json' ;
import Comment from './Comment/Comment'

const YourComments = () => {
  //  console.log(Json_Data);

  useEffect(()=>{
    Aos.init({duration:2000})
   },[])

    return (
        <div className="row" >
            <div  className='mt-5  col-10 mx-auto col-md-6 yourCommentsContainer'  >
             <div className="YourCommentConty" data-aos="flip-right">
                 <div className="YCheader">
                 <i className="far fa-comments text-white fs-5"></i>
                 <p className='text-white pt-3'>نظرات شما</p>

                 </div>
                 <div className='MainComments d-flex flex-column justify-content-start' style={{direction:'rtl'}}>
                   {
                       Json_Data.map((data,index)=>{
                        return (
                            <Comment prodata={data} key={index} />
                        )
                       })
                   }


                 </div>

                 <div className="footerComments">
                     
                 </div>

             </div>
          
            
            </div>
        </div>
    )
}

export default YourComments
