import React from 'react';
import { Link } from 'react-router-dom';

const ParnerBg = () => {
  return (
    <div className='partner'>
        <div>
            <h1>Have an Event?</h1>
            <h2>Be a partner. Let’s host a Deelaa Exclusive Event</h2>
            <p>Earn big! Join over 100,000 registered event promoters globally on Deelaa.</p>
            <Link to='/partner'><button>Get Started</button></Link>
        </div>
        

    </div>
  )
}

export default ParnerBg