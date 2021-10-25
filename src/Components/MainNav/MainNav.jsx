import React from 'react';
import '../MainNav/mainNavStyle.css';
import LOGO from '../../asset/imgs/LandingPage/BtnImgs/food.png'

function MainNav() {
    return (
        <div >

<nav className="navbar navbar-expand-lg navbar-dark text-white "  >



  <a className="navbar-brand ">
  <img src={LOGO} className='logo' style={{width:'75px'}} />
  </a>


  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse  " id="navbarSupportedContent" style={{direction:'rtl'}}>
    <ul className="navbar-nav  text-right">
      <li className="nav-item active">
        <a className="nav-link" href="#">خانه <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">الو قلیون</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">الو غذا</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"> دخانیات </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">  درباره ی ما</a>
      </li>
      
      


    </ul>


    


   
  </div>
  
 
   
</nav>






            
        </div>
    )
}

export default MainNav
