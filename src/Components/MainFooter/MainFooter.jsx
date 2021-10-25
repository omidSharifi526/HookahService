import React, { Component } from 'react';
//import './MainFoote.sass'
import  './MainFooter.css';
import logo from './imgs/logo.png'

class MainFooter extends Component {
    render() {
        return (
            <div className=' row ' style={{direction:'rtl'}} >
                <div className="col-md-4 col-10 mx-auto   bg-tarnsparent colOfFooter connectWithus">
                    <p className='mx-auto text-center text-warning fs-5 p-3 '>بامادر ارتباط باشید</p>
                    <span  className='text-light w-75 text-center d-block mx-auto'>
                    لورم ایپسوم یا طرح‌نما در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این  برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید
                    </span>
                    <div className="loginFooterMainDiv">
                        <form>
                        
                      
                       <div className='d-flex w-100 justify-content-center'>
                       <input type="text" placeholder='شماره ی تماس' className="form-control col-6 text-center" id="phoneNumber" />
                       <input className='form-control fs-6 col-3 btn btn-danger bt p-1' type="button" value="ثبت " />
                       </div>

                       <div id="emailHelp" className=" form-text text-center col-10 mx-auto text-light txtfooter">شماره تماس خود را وارد کرده و از سرویس های ویژه ی ما مطلع شوید</div>
                     

                     
                        </form>


                    </div>
                </div>
                <div className="col-md-4 col-10 mx-auto  bg-transparent colOfFooter">
                    <div>
                        <h1 className='text-center p-2 fs-5  p-3 text-warning'>همواره به فکر آرامشتان هستیم</h1>
                        <span className='w-75 d-block mx-auto text-center text-light'>
                        طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.

                        </span>
                        
                        <div className='d-flex flex-column align-items-center'>
                            <p className='text-warning mt-3'>شماره های تماس</p>
                            <div className='text-primary text-muted'>
                                <span className='d-block mx-auto text-center'>09126589854</span>
                                <span className='d-block mx-auto text-center'>09129632587</span>
                                <span className='d-block mx-auto text-center'>0936568974</span>
                                
                                


                            </div>


                        </div>

                    </div>
                </div>
                <div className="col-md-4 col-10 mx-auto  bg-transparent d-flex flex-column ">
                    <div className='d-flex  mt-md-3'>
                        <div className='col-6 text-right'>
                            <ul className='bg-tarnsparent col-foot-styel text-muted text-center '>
                                <li className=" ">خانه</li>
                                <li className="">الوقلیون</li>
                                <li className="">الوغذا</li>
                                <li className="">دخانیات</li>
                                <li className="">درباره ما</li>
                                <li className="">ارتباط با ما</li>
                            </ul>
                        </div>
                        <div className='col-6  '>
                            <div className='d-flex justify-content-center align-items-center'>
                                <img className='ml-5 flogo' src={logo} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="  soshialMedia w-50 mx-auto mt-md-3  text-center d-flex justify-content-evenly">
                       <i class="fab fa-instagram text-light"></i>
                       <i class="fab fa-telegram-plane text-light"></i>
                       <i class="fas fa-phone text-light"></i>
                       <i class="fas fa-headset text-light"></i>

                       </div>



                </div>
                <div>

                </div>
               
                
                
            </div>
        );
    }

    
}

export default MainFooter;