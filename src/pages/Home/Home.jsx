import React from 'react';
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Landing from '../../components/Landing/Landing';

function Home() {
  return (
    <div className='home-page'>
      <Navbar />
      <div className='home-page'>
        <Landing />
      </div>
    </div>
  );
}
export default Home;