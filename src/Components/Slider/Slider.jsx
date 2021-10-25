import React from 'react';
import{Carousel} from 'react-bootstrap';
import  './slider.css';
import img1 from './imgs/1.jpg';
import img2 from './imgs/2.jpg';
import img3 from './imgs/3.jpg';

const Slider = () => {
    return (
        <div className=' pt-2 mb-3 col-md-10 mx-auto rounded'>


<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100 imgs rounded"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
    <p className='badge bg-danger d-block w-25 mx-auto'>ترکی</p>
    <span>تحول فوری</span>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 imgs rounded"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <p className='badge bg-danger d-block w-25 mx-auto'>عربی</p>
    <span>بهترین طعم ها</span>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 imgs rounded"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <p className='badge bg-danger d-block w-25 mx-auto'>ایرانی</p>
      <span>بهترین تنباکو</span>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


          





            
        </div>
    )
}

export default Slider
