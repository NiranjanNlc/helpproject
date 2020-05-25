import React, { Component } from 'react'

import {getAuthenticatedUser, login, logout } from "../Authenciation/Redux/Actions/Actions"
import  httpResource from '../Authenciation/httpResource'
import './Home.css'
import { Link, withRouter } from 'react-router-dom'
class Home extends Component {
    render() {
        return (
            <div id="home">
                <section id="topRibbon">
                    <div className="container">
                        <div className="row ">
                            <div className="col-sm-12" align="center">
                                <Link to="#">Need urgent support? Get help from a crisis service →</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="mainFace" className="secGap">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 logo">
                                <Link to="#">
                                    <img src= {window.location.origin + '/images/help.png'}className="imgfluid" alt="logo" />
                                </Link>
                                <Link to="/login">Log in </Link>
                            </div>
                        </div>
                        <div className="row secGap">
                            <div className="col-sm-7">
                                <h1>
                                    Welcome to the help app !
                                </h1>
                                <p>Free, safe and anonymous support</p>
                                <Link to="#" className="btn vMore watch"><i class="fas fa-play"></i> Watch our Video</Link>
                                <Link to="#" className="btn vMore">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="offer" className="secGap">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 secTitle">
                                <h2>Just some of the things you'll find on APP Name</h2>
                            </div>
                            <div className="col-sm-3">
                                <i class="far fa-newspaper"></i>
                                <h3>Magazine</h3>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer .</p>
                            </div>
                            <div className="col-sm-3">
                                <i class="fas fa-users"></i>
                                <h3>Discussion Boards</h3>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer .</p>
                            </div>
                            <div className="col-sm-3">
                                <i class="fas fa-comment-alt"></i>
                                <h3>Chat with the team</h3>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer .</p>
                            </div>
                            <div className="col-sm-3">
                                <i class="fas fa-book-open"></i>
                                <h3>Daily Journal</h3>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer .</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="testimonial" className="secGap">
                    <div className="container">
                        <div className="row ">
                            <div className="col-sm-6">

                            </div>
                            <div className="col-sm-6">
                                <h4>What Does our Community Saying</h4>
                                <blockquote>"I really like how we can find help anonymously and have help from others. It makes me feel accepted and that people will not judge me"</blockquote>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="needTalk" className="secGap">
                    <div className="container">
                        <div className="row ">
                            <div className="col-sm-6">
                                <h3>Our community is here to support you through anything. Big or small.</h3>
                                <Link to="#" className="vMore">Join Us</Link>                            </div>
                            <div className="col-sm-6">
                                <img src="" className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <section id="footNav">
                        <div className="container">
                            <div className="row ">
                                <div className="col-sm-12">
                                    <ul>
                                        <li><Link to="#">Meet the team</Link></li>
                                        <li><Link to="#">Privacy and Safety</Link></li>
                                        <li><Link to="#">Terms of Use</Link></li>
                                        <li><Link to="#">Confidentiality</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="footBTM">
                        <div className="container">
                            <div className="row ">
                                <div className="col-sm-12">
                                    <p>© Help App 2020</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </footer>
            </div>
        )
    }
}

export default Home