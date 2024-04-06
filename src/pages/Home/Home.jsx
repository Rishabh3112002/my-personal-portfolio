import React from 'react';
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Landing from '../../components/Landing/Landing';
import Projects from '../../components/Projects/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const slides = [
    {
      title: 'DwarfURL',
      content: 'DwarfURL streamlines link-sharing by automatically condensing lengthy URLs into concise, user-friendly links. With customization options and seamless integration across various platforms, it enhances user experience, saves time, and provides basic analytics for tracking link performance.',
      imageUrl: 'src/assets/dwarfUrl.png',
      gitUrl: 'https://github.com/Rishabh3112002/DwarfURL'
    },
    {
      title: 'Face Mask Detection',
      content: 'The face mask detection project employs computer vision techniques and deep learning algorithms to automatically identify individuals wearing masks in images or video streams. It aids in enforcing public health measures by ensuring compliance with face mask regulations in various settings, including public spaces, transportation systems, workplaces, and healthcare facilities.',
      imageUrl: 'src/assets/faceMask.png',
      gitUrl: 'https://github.com/Rishabh3112002/face_mask_detection'
    },
    {
      title: 'Suicidal Text Classification',
      content: 'Suicidal text classification involves using natural language processing and machine learning to identify text or social media posts that indicate suicidal thoughts or behaviors, aiding in early intervention and mental health support.',
      imageUrl: 'src/assets/suicidatDetection.jpeg',
      gitUrl: 'https://github.com/Rishabh3112002/suicidal-text-detection-api'
    },
  ];
  return (
    <div className='home-page'>
      <Navbar />
      <div className='home-page'>
        <Landing />
        <Projects slides={slides}/>
      </div>
    </div>
  );
}
export default Home;