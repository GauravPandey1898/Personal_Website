import React from 'react'
import './Header.css'
import file from '../assets/Gaurav_Pandey_Resume.pdf'

const Header = () => {
    return(
        <header className="header-style">

            <a 
                href="https://blog.gauravpandey.me" 
                target="_blank"
                rel="nooopener noreferrer"
                >
                <button type="button" className="btn button-left">Blog</button>
            </a>
            <p className="text" style={{opacity:1 , }}>Gaurav Pandey</p>
            
            <a 
                href={file}
                download = "Gaurav_Pandey_Resume.pdf"
                target="_blank"
                rel="nooopener noreferrer"
                >
                <button type="button" className="btn button-right">Resume</button>
            </a>
            
        </header>
    )
}

export default Header;