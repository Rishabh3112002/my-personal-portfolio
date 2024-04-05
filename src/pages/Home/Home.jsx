import React from 'react';
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Landing from '../../components/Landing/Landing';

function Home() {
  return (
    <>
      <Navbar />
      <div className='home-page'>
        <Landing />
      </div>
    </>
  );
}
export default Home;