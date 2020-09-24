import React,{ useRef, useEffect } from 'react'
import ReactJsTyping from 'reactjs-typing-effect'
import gsap ,{ Power3 } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Introduction.css'

const Introduction = () => {

    let terminal = useRef(null)

    const list = ['Hi! My Name is Gaurav Pandey.', 'I\'m a Front-end Developer.', 'I\'m a Back-end Developer.', 'So Basically I\'m a Full-Stack Developer.']
    useEffect(() =>{
        
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(
            terminal,
            0.6,
            {   scrollTrigger: {
                    trigger : terminal,
                    toggleActions: "play none none none",
                    
                },
                opacity: 1,
                top : '30%',
                ease : Power3.easeIn,
            }
             )
        
    },[])
    

    return (
        
        <div
         ref={el => {terminal = el}}
         className="terminal">
            <div className="terminal-title">
                <div className="red buttonkey"></div>
                <div className="yellow buttonkey"> </div>
                <div className="green buttonkey"></div>
                <div className="title">
                    Introduction
                </div>
            </div>

            <p className="p_style" style={{ color: "white", fontSize: '20px' }}>
                <ReactJsTyping StringList={list} speed={500} />
            </p>
        </div>

    )
}

export default Introduction