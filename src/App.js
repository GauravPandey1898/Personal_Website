import React, { useRef, useEffect } from 'react';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Introduction from './components/Introduction/Introduction'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import gsap, { Power3 } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


import './App.css';


function App() {
  let slide = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  let third_page = useRef(null)
  let second_page = useRef(null)
  let flag = true

  useEffect(() => {
    gsap.to(
      slide,
      2,
      {
        scrollTrigger: {
          trigger: slide,
          toggleActions: "play reverse restart reverse",


        },
        top: '45%',
        opacity: 1,
        ease: Power3.easeOut,
        delay: 1,
      }
    )

    gsap.from(
      second_page,
      1,
      {
        scrollTrigger : {
          trigger : second_page,
          toggleActions : "play none none reverse",
          start: "top 30%", 
            
        },
        opacity : 0,
        ease : Power3.easeIn,

      }
    )

    gsap.from(third_page, 2, {
      scrollTrigger: {
        trigger: third_page,


        toggleActions: "play none none reverse",
        scrub: true,

      },
      top: '100%',
      ease: Power3.easeOut,
      autoAlpha: 0,
    })
  }, [flag])

  return (

    <main>
      <div className="header-class">
        <Header />
        <div className="first">
          <Introduction />
          <p
            ref={el => { slide = el }}
            className="slide-style">Slide Up</p>
        </div>
      </div>

      <div className="second" ref={ el => (second_page = el)}>
        <Skills />
      </div>
      <div className="third" ref={el => { third_page = el }}>
        <h3 className="title-2">Projects</h3>
        <Projects />

      </div>
      {/* <div className="fourth ">
        <p className="p-style" style={{ color: "white" }}>Fourth</p>
      </div> */}

      <div className="contact-form">
        <Contact />
      </div>

      <Footer />


    </main>
  );
}

export default App;
