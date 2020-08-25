import React, { useRef, useEffect } from 'react';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Introduction from './components/Introduction/Introduction'
import Projects from './components/Projects/Project'
import gsap ,{ Power3} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


import './App.css';


function App() {
  let slide = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  let flag = true

  useEffect(() => {
    gsap.to(
      slide,
      2,
      { scrollTrigger: {
        trigger : slide,
        toggleActions : "play reverse restart reverse",
        
        
    },
        top : '45%',
        opacity : 1,
        ease : Power3.easeOut,
        delay : 1,
      }
      )
  },[flag])

  return (
    
    <main>
      <div className="header-class">
      <Header/>
      <div className="first"> 
        <Introduction />
        <p
        ref={el => {slide = el}} 
        className="slide-style">Slide Up</p>
      </div>
      </div>
      
      <div className="second">
        <p className="p-style">Second</p>
      </div>
      <div className="third">
        <p className="p-style">Third</p>
      </div>
      <div className="fourth ">
        <p className="p-style" style={{color:"white"}}>Fourth</p>
      </div>
    
      <div className="contact-form">
        <p className="p-style">Contact</p>
      </div>
      
      <Footer />

      
    </main>
  );
}

export default App;
