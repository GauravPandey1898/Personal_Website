import React, { useRef , useEffect , useState } from 'react'
import gsap ,{ Power3 } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import VizSensor from 'react-visibility-sensor';

import './Skills.scss'

function Skills () {
    let language = useRef(null)
    let database = useRef(null)
    let tools = useRef(null)
    let universal_skills = useRef(null)
    let title = useRef(null)
    
    let [visible, setVisible] = useState(0)

    const anim = () => {
        gsap.registerPlugin(ScrollTrigger)
        let tl = gsap.timeline()
        
        
        tl.to(title,
            1,
            {   
                opacity : 1,
                ease : Power3.easeIn,
                delay: 0.3,
            })
        tl.to(language,
            1,
            {   
                opacity:1,
                ease : Power3.easeIn,
                delay : 0.3,
        })
        tl.to(database,
            1,
            {   
                opacity : 1,
                ease : Power3.easeIn,
                delay : 0.3, 
            })
        tl.to(tools,
            1,
            {   
                opacity : 1,
                ease : Power3.easeIn,
                delay : 0.3,
            })
        tl.to(universal_skills,
            1,
            {   
                opacity : 1,
                ease : Power3.easeIn,
                delay : 0.3,
            })
    }

    useEffect(() => {
        if(visible === 1){
            anim()
        }
    })


    return (
        <main>
          <VizSensor
          partialVisibility
          offset={{top:0}}
          scrollCheck = "true"
        onChange={(isVisible) => {
            setVisible(visible++)
        }}
      > 
        
        <div className="skill-content" >
            <div className="skill-title" ref={el => ( title = el)}>
                <h3>Skills</h3>
            </div>
            <div className="skill-inner">
                <div className="languages" ref={el => ( language = el)}>
                    <h4 className="skill-heading">Languages</h4>
                    <ul>
                        <li>PYTHON</li>
                        <li>JAVASCRIPT</li>
                        <li>C++</li>
                        <li>JAVA</li>
                        <li>HTML5/CSS3</li>
                    </ul>
                </div>
                <div className="database" ref={el => ( database = el)}>
                    <h4 className="skill-heading">Database</h4>
                    <ul>
                        <li>MySql</li>
                        <li>Postgresql</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className="tools" ref={el => ( tools = el)}>
                    <h4 className="skill-heading">Tools</h4>
                    <ul>
                        <li>Django</li>
                        <li>ReactJs</li>
                        <li>NodeJs</li>
                        <li>ExpressJs</li>
                        <li>Git</li>
                        <li>Keras</li>
                        <li>Heroku</li>
                        <li>Netlify</li>
                        <li>Tensorflow</li>
                        <li>OpenCV</li>
                    </ul>
                </div>
                <div className="universal-skills" ref={el => ( universal_skills = el)}>
                    <h4 className="skill-heading">Other Skills</h4>
                    <ul>
                        <li>Excellent Communicator</li>
                        <li>Quick Learner</li>
                        <li>Adaptable</li>
                    </ul>
                </div>
                
            </div>
            
        </div>
        </VizSensor> 
        </main>

    )
}

export default Skills