import React from "react";

import './Contact.scss'
var axios = require("axios");
var qs = require("qs");

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
        var data = qs.stringify({
            'entry.1846200855': this.state.name,
              'entry.1706179443': this.state.email,
              'entry.419569346': this.state.subject,
              'entry.310860954': this.state.message
          });
          var config = {
            method: "post",
            url:
              "https://docs.google.com/forms/u/0/d/e/1FAIpQLScL0wfLnE83LZaBBILXGFWXgKs6-6Uqxuxf_xCVmGleyqkeQw/formResponse",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            data: data,
          };
        axios(config).then(res => console.log(res)).catch(err => {
            this.setState({
                name: "",
                email: "",
                subject: "",
                message: "",
            },()=>{
                alert("Will get back to you soon!!")
            })
        })
    };

    render() {
        return (
            <div className="container contact-form">
                <div className="contact-image">
                    <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
                </div>
                <form
                    name="contact"
                    onSubmit={this.handleSubmit}     
                >
                    <h3>Have any doubt or wanna work together? Just drop a message.</h3>
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" name="name" value={this.state.name} className="form-control" placeholder="Your Name *" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" value={this.state.email} className="form-control" placeholder="Your Email *" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="text" name="subject" value={this.state.subject} className="form-control" placeholder="Subject *" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <textarea name="message" className="form-control" value={this.state.message} placeholder="Your Message *" onChange={this.handleChange} style={{ width: "100%", height: "150px" }} />
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

