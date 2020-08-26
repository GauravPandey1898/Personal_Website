import React, { useState, useRef, useEffect } from "react";
import { TweenLite, Power3 } from "gsap";

import leftArrow from '../assets/left.svg'
import rightArrow from '../assets/right.svg'

// import './normalize.css'
// import './Project.scss'

const testimonial = [
    {
        title: "Breaking Saul Fan App",
        image: `${require("../assets/breakingsaul.png")}`,
        technology: "ReactJs Axios Css3/HTML5",
        info:
            "Fan Made Web App for two series 1. Breaking Bad 2. Better Call Saul. This app let's you see the character info, famous quotes and much more."
    },
    {
        title: "Chat Room",
        image: `${require("../assets/chatapp.png")}`,
        technology: "ReactJs Express NodeJs Socket.io",
        info: "Chat Room Application which let's user create or join a chat-room and interact with random people on that chat-room. It also support Emoji."
    },
    {
        title: "Firebase Auth Application Demo",
        image: `${require("../assets/reactfirebase.png")}`,
        technology: "ReactJs Firebase Firestore Material-ui",
        info: "Demo Web app to show the integration of Firebase-Auth for React projects."
    },
    {
        title: "Image Classification Web App",
        image: `${require("../assets/classification.png")}`,
        technology: "Django OpenCV Postgresql",
        info: "Web App to store user uploaded image into seperate folders based on the persons face."
    },
]

function Project() {
    return (
        <div className="testimonial-section">
            <div className="testimonial-container">
                <div className="arrows left">
                    <span>
                        <img src={leftArrow} alt="left arrow" />
                    </span>
                </div>

                <div className="inner">
                    <div className="t-image">
                        <ul>
                            <li>
                                <img src={testimonial[0].image} alt={testimonial[0].title} />
                            </li>
                            <li>
                                <img src={testimonial[1].image} alt={testimonial[1].title} />
                            </li>
                            <li>
                                <img src={testimonial[2].image} alt={testimonial[2].title} />
                            </li>
                            <li>
                                <img src={testimonial[3].image} alt={testimonial[3].title} />
                            </li>
                        </ul>
                    </div>
                    <div className="t-content">
                        <ul>
                            <li>
                                <div className="content-inner">
                                    <p className="info">{testimonial[0].info}</p>
                                    <h3 className="title-1">{testimonial[0].title}</h3>
                                    <h4 className="technology">{testimonial[0].technology}</h4>
                                </div>
                            </li>
                            <li>
                                <div className="content-inner">
                                    <p className="info">{testimonial[1].info}</p>
                                    <h3 className="title-1">{testimonial[1].title}</h3>
                                    <h4 className="technology">{testimonial[1].technology}</h4>
                                </div>
                            </li>
                            <li>
                                <div className="content-inner">
                                    <p className="info">{testimonial[2].info}</p>
                                    <h3 className="title-1">{testimonial[2].title}</h3>
                                    <h4 className="technology">{testimonial[2].technology}</h4>
                                </div>
                            </li>
                            <li>
                                <div className="content-inner">
                                    <p className="info">{testimonial[3].info}</p>
                                    <h3 className="title-1">{testimonial[3].title}</h3>
                                    <h4 className="technology">{testimonial[3].technology}</h4>
                                </div>
                            </li>
                        </ul>

                    </div>

                </div>

                <div className="arrows right">
                    <span>
                        <img src={rightArrow} alt="right arrow" />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Project