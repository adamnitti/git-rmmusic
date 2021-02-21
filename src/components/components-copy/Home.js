import React from 'react';
import HomeCarousel from './Carousel';
import '../App.css';

function Home() {
  return (
    <div className="container mx-auto my-4" >
      <div className="row">
        <div className="col">
          <HomeCarousel />
        </div>
      </div>    
    </div>
  );
}

export default Home;
