import React from 'react'

import './Contact.scss'

function Contact() {
    return (
        <div className="container contact-form">
            <div className="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <form name="contact" netlify>
                <h3>Have any doubt or wanna work together? Just drop a message.</h3>
               <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name="txtName" className="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="subject" className="form-control" placeholder="Subject*" value="" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <textarea name="txtMsg" className="form-control" placeholder="Your Message *" style={{width: "100%" , height: "150px"}}></textarea>
                        </div>
                    </div>
                        <div className="form-group">
                            <input type="submit" name="btnSubmit" className="btnContact sub_button" value="Send Message" />
                        </div>
                </div>
            </form>
</div>
    )
}

export default Contact