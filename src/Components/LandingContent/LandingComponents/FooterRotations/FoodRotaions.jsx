import React from 'react';
import RotationIMG from '../../../../asset/imgs/LandingPage/Furittss.png';
import '../FooterRotations/Footer_rotations_style.css'

function FoodRotaions() {
const imgStyle={
    with:'100px'
}

    return (
        <div>
            <div className='col-10 mx-auto  text-center' style={{height:'100px'}}>
                <img className='footer_rotations_img' src={RotationIMG} alt=""  />

            </div>
            
        </div>
    )
}

export default FoodRotaions
