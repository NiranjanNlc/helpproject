import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import ContactNav from './ContactNav'
import httpResource from '../Authenciation/httpResource'
class Contact extends Component 
{
    constructor(props) {
        super(props)
        this.state = {
            name:'',
            email:'',
            message:''
        }
    this.handleChange = this.handleChange.bind(this)
    this.submitData = this.submitData.bind(this)
    }

    handleChange(event) {
     //   console.log(e.target.value)
        const { name, value } = event.target
        this.setState({
          [name]: value
        })
    }
    submitData(event) { 
        const { name, value } = event.target
        this.setState({
          [name]: value
        })
      event.preventDefault();
        if(this.state.name==='' || this.state.email==='' || this.state.message==='')
        {
            alert('Fill up the info compltely')
            return;
        }
        const signIn = {
          name: this.state.name,
          email: this.state.email,
          message:this.state.message
        };
        httpResource.post("/help/contact", signIn)
                .then((response) => {
                    if (response.data === "success") { 
                        this.props.history.push("/contacts/")
                        window.location.reload(false);
                    }
                    this.props.history.push("/contacts/")
                }).catch(() =>
                {
                     
                })
    }
    render() {
        return (
            <div>
                <ContactNav />
                <section id="contact_Wrap" className="secGap">
                    <div className="container">
                        <div className="row contact">
                            <div className="col-sm-7 other" style={{
                                backgroundImage: "url(" + "/images/modal1.png" + ")",
                                backgroundPosition: 'right -1.125rem bottom 0px',
                                backgroundSize: '24.688rem 29.563rem',
                                paddingBottom: '1.25rem',
                                backgroundRepeat: 'no-repeat'
                            }}>
                                <div className="info">
                                    <h2>Quick Contact</h2>
                                    <div className="svg-wrap">
                                        <a href="#">
                                            <i class="far fa-envelope"></i>info@klygo.app</a>
                                    </div>
                                    <div className="svg-wrap">
                                        <a href="#">
                                            <i class="fas fa-phone"></i>92384095</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-5 form">
                                <form>
                                    <div className="flex-rev">
                                        <input type="text" onChange={this.handleChange} name="name" placeholder="" />
                                        <label >Full Name</label>
                                    </div>
                                    <div className="flex-rev">
                                        <input type="email" onChange={this.handleChange} name="email" placeholder="" />
                                        <label >Your Email</label>
                                    </div>

                                    <div className="flex-rev">
                                        <textarea name = "message" onChange={this.handleChange} placeholder="I want to know ....." name="message" ></textarea>
                                        <label>Message</label>
                                    </div>
                                    <button type="submit" onClick={this.submitData} class="btn btn-lg submit"> Submit </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact