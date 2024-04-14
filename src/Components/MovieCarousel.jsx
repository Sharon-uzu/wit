import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MovieCards } from '../utils/Data';
import { Link } from 'react-router-dom';



const MovieCarousel = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


  return (
    
    <div className='multi movies'>

      <h1>Current Movies</h1>
      
      <Carousel responsive={responsive}>
        {
          MovieCards && MovieCards.map(item =>(
            <div key={item.id} className='item'>
              <img src={item.img} alt="" />
              <h2>{item.text}</h2>
              <p className='para'>{item.para}</p>
              <div className='ticket'></div>

              <div className='get'>
                <p>{item.price}</p>
                <Link to='/ticket'><button>Get Ticket</button></Link>

              </div>
              
            </div>
            ))
        }
        
      </Carousel>

    </div>
  )
}

export default MovieCarousel