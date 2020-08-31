import React, { useState, useRef, useEffect } from "react";
import { TweenLite, Power3 } from "gsap";

import leftArrow from "../assets/arrow-left.svg";
import rightArrow from "../assets/arrow-right.svg";

import "./normalize.css";
import "./Project.scss";

const testimonials = [
    {
        title: "Breaking Saul Fan App",
        image: `${require("../assets/breakingsaul.png")}`,
        link: "https://breakingsaul.gauravpandey.me",
        technology: "ReactJs Axios Css3/HTML5",
        info:
            "Fan Made Web App for two series 1. Breaking Bad 2. Better Call Saul. This app let's you see the character info, famous quotes and much more."
    },
    {
        title: "Chat Room",
        image: `${require("../assets/chatapp.png")}`,
        link: "https://chatapp.gauravpandey.me",
        technology: "ReactJs Express NodeJs Socket.io",
        info: "Chat Room Application which let's user create or join a chat-room and interact with random people on that chat-room. It also support Emoji."
    },
    {
        title: "Firebase Auth Application Demo",
        image: `${require("../assets/reactfirebase.png")}`,
        link: "https://github.com/GauravPandey1898/react-firebase-auth",
        technology: "ReactJs Firebase Firestore Material-ui",
        info: "Demo Web app to show the integration of Firebase-Auth for React projects."
    },
    {
        title: "Image Classification Web App",
        image: `${require("../assets/classification.png")}`,
        link: "https://if-this-run.herokuapp.com",
        technology: "Django OpenCV Postgresql Bootstrap",
        info: "Web App to store user uploaded image into seperate folders based on the persons face."
    },
]

function Project() {
    let imageList = useRef(null);
    let testimonialList = useRef(null);
    // const imageWidth = window.screen.availWidth > 1100 ? 500: 240;
    // console.log(imageWidth)

    let [imageWidth, setImageWidth] = useState(0)

    const [state, setState] = useState({
        isActive1: true,
        isActive2: false,
        isActive3: false,
        isActive4: false,
    });

    const [leftDisable, setLeftDisable] = useState(false)
    const [rightDisable, setRightDisable] = useState(false)

    //disabling arrow key for 1 sec 

    const leftArrowDisable = () => {
        setLeftDisable(!leftDisable);
        setTimeout(() => {
            setLeftDisable(false)
        }, 1200)
    }

    const rightArrowDisable = () => {
        setRightDisable(!rightDisable);
        setTimeout(() => {
            setRightDisable(false)
        }, 1200)

    }


    useEffect(() => {
        TweenLite.to(testimonialList.children[0], 0, {
            opacity: 1
        });
        if (window.screen.availWidth > 1100) {
            setImageWidth(340)
        }
        else {
            setImageWidth(240)
        }
    }, []);

    //Image transition
    const slideLeft = (index, duration, multiplied = 1) => {
        TweenLite.to(imageList.children[index], duration, {
            x: -imageWidth * multiplied,
            ease: Power3.easeOut
        });
    };

    const slideRight = (index, duration, multiplied = 1) => {
        TweenLite.to(imageList.children[index], duration, {
            x: imageWidth * multiplied,
            ease: Power3.easeOut
        });
    };

    const scale = (index, duration) => {
        TweenLite.from(imageList.children[index], duration, {
            scale: 1.4,
            ease: Power3.easeOut
        });
    };

    //Content transition

    const fadeOut = (index, duration) => {
        TweenLite.to(testimonialList.children[index], duration, {
            opacity: 0
        });
    };

    const fadeIn = (index, duration) => {
        TweenLite.to(testimonialList.children[index], duration, {
            opacity: 1,
            delay: 1
        });
    };

    const nextSlide = () => {
        if (imageList.children[0].classList.contains("active")) {
            rightArrowDisable();
            setState({ isActive1: false, isActive2: true });
            //Image transition
            slideLeft(0, 1);
            scale(1, 1);
            slideLeft(1, 1);
            slideLeft(2, 0);
            slideLeft(3, 0);
            //content transition
            fadeOut(0, 1);
            fadeIn(1, 1);
        } else if (imageList.children[1].classList.contains("active")) {
            rightArrowDisable();
            setState({ isActive2: false, isActive3: true });
            //Image transition
            slideLeft(1, 1, 2);
            slideLeft(2, 1, 2);
            scale(2, 1);
            slideLeft(3, 0, 2);
            slideRight(0, 0, 3);
            //content transition
            fadeOut(1, 1);
            fadeIn(2, 1);
        } else if (imageList.children[2].classList.contains("active")) {
            rightArrowDisable();
            setState({ isActive3: false, isActive4: true });
            //Image transition
            slideLeft(3, 1, 3);
            scale(3, 1);
            slideLeft(2, 1, 3)
            slideRight(1, 0, 1);
            slideRight(0, 0, 1);
            //content transition
            fadeOut(2, 1);
            fadeIn(3, 1);
        }
        else if (imageList.children[3].classList.contains("active")) {
            rightArrowDisable();
            setState({ isActive1: true, isActive4: false });
            //Image transition
            slideLeft(0, 1, 0)
            slideRight(1, 0, 0)
            scale(0, 1);
            slideLeft(2, 0, 0)
            slideLeft(3, 1, 4)
            //content transition
            fadeOut(3, 1);
            fadeIn(0, 1);
        }
    };

    const prevSlide = () => {
        if (imageList.children[0].classList.contains("active")) {
            leftArrowDisable();
            setState({ isActive1: false, isActive4: true });
            //Image transition
            slideLeft(3, 0, 4)
            slideLeft(3, 1, 3)
            scale(3, 1)
            slideRight(0, 1, 1)
            slideRight(1, 0, 1)
            slideLeft(2, 0, 3)
            //content transtion
            fadeOut(0, 1);
            fadeIn(3, 1);
        } else if (imageList.children[1].classList.contains("active")) {
            leftArrowDisable();
            setState({ isActive2: false, isActive1: true });
            //Image transition
            slideRight(0, 1, 0)
            scale(0, 1)
            slideRight(1, 1, 0)
            slideRight(2, 0, 0)
            slideRight(3, 0, 0)
            //content transtion
            fadeOut(1, 1);
            fadeIn(0, 1);
        } else if (imageList.children[2].classList.contains("active")) {
            leftArrowDisable();
            setState({ isActive3: false, isActive2: true });
            //Image transition
            slideLeft(1, 1, 1);
            slideLeft(0, 0, 1);
            scale(1, 1)
            slideLeft(2, 1, 1);
            //content transtion
            fadeOut(2, 1);
            fadeIn(1, 1);
        } else if (imageList.children[3].classList.contains("active")) {
            leftArrowDisable();
            setState({ isActive3: true, isActive4: false });
            slideLeft(3, 1, 2)
            scale(2, 1);
            slideLeft(2, 1, 2)
            slideLeft(1, 0, 2)
            slideRight(0, 0, 2)
            //content transtion
            fadeOut(3, 1);
            fadeIn(2, 1);
        }
    };

    return (
        <div className="testimonial-section">
            <div className="testimonial-container">

                <button onClick={prevSlide} disabled={leftDisable} className="arrows left" >
                    <span>
                        <img src={leftArrow} alt="left arrow" />
                    </span>
                </button>

                <div className="inner">
                    <div className="t-image">
                        <ul ref={el => (imageList = el)}>
                            <li className={state.isActive1 ? "active" : ""} >
                                <a href={testimonials[0].link}>
                                    <img src={testimonials[0].image} alt={testimonials[0].name} />
                                </a>
                            </li>
                            <li className={state.isActive2 ? "active" : ""}>
                                <a href={testimonials[1].link}>
                                    <img src={testimonials[1].image} alt={testimonials[1].name} />
                                </a>
                            </li>
                            <li className={state.isActive3 ? "active" : ""}>
                                <a href={testimonials[2].link}>
                                    <img src={testimonials[2].image} alt={testimonials[2].name} />
                                </a>
                            </li>
                            <li className={state.isActive4 ? "active" : ""}>
                                <a href={testimonials[3].link}>
                                    <img src={testimonials[3].image} alt={testimonials[3].name} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="t-content">
                        <ul ref={el => (testimonialList = el)}>
                            <li className={state.isActive1 ? "active" : ""}>
                                <div className="content-inner">
                                    <h3 className="title-1">{testimonials[0].title}</h3>
                                    <p className="info">{testimonials[0].info}</p>
                                    <h4 className="technology">{testimonials[0].technology}</h4>
                                </div>
                            </li>
                            <li className={state.isActive2 ? "active" : ""}>
                                <div className="content-inner">
                                    <h3 className="title-1">{testimonials[1].title}</h3>
                                    <p className="info">{testimonials[1].info}</p>
                                    <h4 className="technology">{testimonials[1].technology}</h4>
                                </div>
                            </li>
                            <li className={state.isActive3 ? "active" : ""}>
                                <div className="content-inner">
                                    <h3 className="title-1">{testimonials[2].title}</h3>
                                    <p className="info">{testimonials[2].info}</p>
                                    <h4 className="technology">{testimonials[2].technology}</h4>
                                </div>
                            </li>
                            <li className={state.isActive4 ? "active" : ""}>
                                <div className="content-inner">
                                    <h3 className="title-1">{testimonials[3].title}</h3>
                                    <p className="info">{testimonials[3].info}</p>
                                    <h4 className="technology">{testimonials[3].technology}</h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <button className="arrows right" disabled={rightDisable} onClick={nextSlide}>
                    <img src={rightArrow} alt="right arrow" />
                </button>

            </div>
        </div>
    );
}

export default Project;