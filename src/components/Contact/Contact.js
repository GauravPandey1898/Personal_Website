import React from "react";

import './Contact.scss'

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": form.getAttribute("name"),
                ...this.state
            })
        })
        
        .then(() => alert("Thank You for Messaging me, will get back to you soon."))
        .catch(error => alert(error));
    };

    render() {
        return (
            <div className="container contact-form">
                <div className="contact-image">
                    <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
                </div>
                <form
                    name="contact"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
                    action="/"
                    
                >
                    <h3>Have any doubt or wanna work together? Just drop a message.</h3>
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="row">
                        <p hidden>
                            <label>
                                Don’t fill this out:{" "}
                                <input name="bot-field" onChange={this.handleChange} />
                            </label>
                        </p>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" placeholder="Your Name *" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" className="form-control" placeholder="Your Email *" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="text" name="subject" className="form-control" placeholder="Subject *" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <textarea name="message" className="form-control" placeholder="Your Message *" onChange={this.handleChange} style={{ width: "100%", height: "150px" }} />
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="submit" name="btnSubmit" className="btnContact sub_button" value="Send Message" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

