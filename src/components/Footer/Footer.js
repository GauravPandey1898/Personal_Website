import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        

        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">Copyright &copy; 2020 All Rights Reserved by
              <a href="https://www.gauravpandey.me"> Gaurav Pandey</a>.
            </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="https://www.facebook.com/devil1898"><i className="fa fa-facebook"></i></a></li>
                <li><a className="instagram" href="https://www.instagram.com/12_mp_life/"><i className="fa fa-instagram"></i></a></li>
                <li><a className="github" href="https://github.com/GauravPandey1898"><i className="fa fa-github"></i></a></li>
                <li><a className="linkedin" href="https://www.linkedin.com/in/gaurav-pandey-111b56150"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      
    )
}

export default Footer