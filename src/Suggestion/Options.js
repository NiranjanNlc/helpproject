import React, { Component } from 'react'
<<<<<<< HEAD
import { Link, withRouter ,Redirect} from 'react-router-dom'
import Loading from "../HomePage/Loading" 
import httpRessource from '../Authenciation/httpResource' 
=======
import { Link, withRouter, Redirect } from 'react-router-dom'

import httpRessource from '../Authenciation/httpResource'
>>>>>>> c5fcedff0d8f583ccad026d4da21932ddf34bfc6
import queryString from 'querystring'
import '../DashBoard/styleMedia.css'
import '../DashBoard/styleCommon.css'
class Options extends Component {

<<<<<<< HEAD
    constructor(props) {
        super(props)
        this.state = {
            id:'',
            connected:false,
            verifed: '',
            items:[]
=======
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      connected: true,
      verifed: '',
      items: []
>>>>>>> c5fcedff0d8f583ccad026d4da21932ddf34bfc6

    }
    this.handleClick = this.handleClick.bind(this)
    this.redirect = this.redirect.bind(this)
  }
  handleClick(event) {
    console.log(event.target.name);
    console.log(event.target.value);
    event.preventDefault();
    const choice =
    {
      id: this.state.id,
      choice: event.target.name
    }
    var url = "https://maps.google.com/?q=" + event.target.value
    httpRessource.post("help/submit", choice)
      .then((response) => {
        if (response.data === "success") {
          console.log("sucess response")
          this.redirect(url);
        }
      })

  }
  redirect(url) {
    console.log("this url");
    window.location.replace(url)
  }
  async componentDidMount() {
    console.log('Component did mount!')
    console.log(this.props)
    const query = this.props.location.search
    console.log(this.props.location.search)
    const values = queryString.parse(query.substr(1))
    console.log(values)
    console.log(values.id)
    this.setState({ id: values.id })
    await httpRessource.post("/help/get", values.id)
      .then((response) => {
        // console.log(response)
        // if(response.data==="expired")
        // {
        //     this.props.history.push("/expiry")
        // }
        // else
        // {
        this.setState({
          items:
          {
            "Sibgaul kennel": "5600+Nebraska+Furniture+Mart+Dr,+The+Colony,+TX+75056,+USA",
            "Nijgadh Kennel": "Komp.+Sentra+Niaga+Kav.+33-35,+Jalan+Boulevard+Hijau+Raya+No.56,+Medan+Satria,+Pejuang,+Medan+Satria,+RT.003/RW.007,+Medan+Satria,+Kecamatan+Medan+Satria,+Kota+Bks,+Jawa+Barat+17131,+Indonesia"
          }
        })
<<<<<<< HEAD
        this.setState({connected:true})
    }
    render()
    {
      if(this.state.connected===false)
      {
        return(<Loading></Loading>)
      }
      return(
        <div>
=======
        // }
      })
      .catch(() => {
        console.log("error in geting suggestion")
      })
  }
  render() {
    return (
      <div>
>>>>>>> c5fcedff0d8f583ccad026d4da21932ddf34bfc6
        <section id="topHeader">
          <Link to="/home">
            <img src={window.location.origin + '/images/logo.png'} className="img-fluid" alt="logo" />
          </Link>
          <div className="container">
            <div className="row">
              <div className="col-sm-12" align="center">
                <h1>Suggestions</h1>
              </div>
            </div>
          </div>
        </section>
        <section id="forgetForm" className="secGap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-8">
                <form>
                  <div className="form-group">
                    <div className="form-divider">
                      <div className="feild_title optionTitle">
                        <h4 align="center">Chose Your Best Option</h4>
                      </div>
                      <div>
                        <div class="optionBlock">
                          {
                            Object.entries(this.state.items)
                              .map(([key, value]) => {
                                console.log(value)
                                var glink = "https://maps.google.com/?q=" + value
                                console.log(glink)
                                return (

                                  <button className="btn sub_help" name={key}
                                    value={value}
                                    onClick={this.handleClick}
                                    key={key}>
                                    {key}
                                  </button>
                                )
                              }
                              )
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
   
      )
    }
=======
    )
  }
>>>>>>> c5fcedff0d8f583ccad026d4da21932ddf34bfc6
}

export default withRouter(Options)