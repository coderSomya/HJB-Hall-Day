import { Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import Home from './Home'
import Base from './Base'
import { useEffect, useRef } from 'react'
import audioFile from './media/bg.mp3'; // Import your audio file
import Layout from './Layout'


function App() {

  const audioRef = useRef(null);

  useEffect(() => {
    const audio: any = audioRef.current;
    if (!audio) return;

    audio.play()
    .catch((e: any)=> {
      console.error('Autoplay failed:', e);
    });
    // Event listener to pause audio when the user switches tabs or minimizes the window
    const handleVisibilityChange = () => {
      if (document.hidden) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);


  return (
    <>

<audio ref={audioRef} autoPlay loop>
      <source src={audioFile} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
    <Routes>
  
      <Route path='/' element={<Base/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/room" element={<Layout/>}/>
    </Routes>
    </>
  )
}

export default App
