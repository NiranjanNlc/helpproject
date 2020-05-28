import React from 'react'
import { BrowserRouter as Router, Route, history, Redirect, Link } from 'react-router-dom'
import MenuComponent from '../NavBAr/MenuComponent';
import './styleMedia.css'
import './styleCommon.css'
import DashService from './DashService'
import { connect } from 'react-redux'
import NavbarPage from '../HomePage/NavbarPage';
import { refresh } from '../Authenciation/Redux/Actions/Actions'

class DashBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
      helped: '',
      loading: true,
      helpedBy: '',
      helpedTo: ''
    }
  }
  componentDidMount() {
    // this.props.dispatch(refresh())
    console.log('Component did mount!')
    DashService.retrieveValue()
      .then(
        response => {
          console.log(response);
          this.setState({ helped: response.data })

        }
      )
    DashService.getData(this.props.data.currentUser)
      .then(
        response => {
          console.log(response);
          //console.log(response.data.firstName)
          console.log(response.data.email)
          console.log(response.data.phone)
          this.setState(
            { name: response.data.name })
          this.setState(
            { email: response.data.email })
          this.setState({ phone: response.data.phone }
          )
          this.setState(
            { helpedBy: "Helped received from:" + response.data.helpedBy })
          this.setState(
            { helpedTo: "Helped given to :" + response.data.helpedTo })
        }
      )
    this.setState(
      { loading: false }
    )
    // this.props.dispatch(refresh())
  }




  render() {
    if (this.state.loading === true) {
      return (<div></div>)
    }
    // this.refreshHelpedOne()
    return (
      <div>
        <NavbarPage />
        <section id="detailWrap" className="secGap">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-sm-6">
                <div class="detailBlock">
                  <div class="profile_photo">
                    <img src="/images/user.png" class="rounded-circle" alt="profile_photo" />
                  </div>
                  <div class="no_people">
                    <span>Total number of people Helped :
                              <b> {this.state.helped}</b>   </span>
                  </div>
                  <ul class="info">
                    <li>{this.state.name}</li>
                    <li>{this.state.email}</li>
                    <li>{this.state.phone}</li>
                    <li>{this.state.helpedTo}</li>
                    <li>{this.state.helpedBy}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    data: state
  };
};

export default
  connect(mapStateToProps)(DashBoard);
