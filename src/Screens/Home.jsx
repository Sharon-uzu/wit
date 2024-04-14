import React from 'react'
// import Slider from '../Components/Slider';
import Categories from '../Components/Categories';
import MultiCarousel from '../Components/MultiCarousel';
import MovieCarousel from '../Components/MovieCarousel';
import ParnerBg from '../Components/ParnerBg';
import StoreCard from '../Components/StoreCard';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Header from '../Components/Header';


const Home = () => {

    
  return (
    
        <div>
          <Header/>
          {/* <Slider/> */}
          <Hero/>
          <Categories/>
          <MultiCarousel/>
          {/* <MovieCarousel/> */}
          {/* <ParnerBg/> */}
          <StoreCard/>
          <Footer/>

        </div>
    
  )
}

export default Home