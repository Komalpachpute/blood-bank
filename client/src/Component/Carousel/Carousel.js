import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
 import blood from '../../Imges/red.jpg';
 import img from '../../Imges/donation.jpg';
// import './Carousel.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='do'>
    <Carousel  activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className='imm' src={blood}/>
       
      </Carousel.Item>       
      <Carousel.Item>
        <img className='imm' src={img} />
      </Carousel.Item>
      
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;