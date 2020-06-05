import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import ContactNav from './ContactNav'
class Contact extends Component {

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
                                        <input type="text" placeholder="" />
                                        <label >Full Name</label>
                                    </div>
                                    <div className="flex-rev">
                                        <input type="email" placeholder="" />
                                        <label >Your Email</label>
                                    </div>

                                    <div className="flex-rev">
                                        <textarea placeholder="I want to know ....." name="message" ></textarea>
                                        <label>Message</label>
                                    </div>
                                    <button type="submit" class="btn btn-lg submit"> Submit </button>
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