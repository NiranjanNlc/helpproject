import React from 'react'
import "./loading.css"
import { BrowserRouter as Router, Route, history, Redirect, Link } from 'react-router-dom'
class Loading  extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount()
     {

    }




    render()
    {
        return(
            <div id="loading-bar-spinner" class="spinner">
    <div class="spinner-icon"></div>
</div>
        )
    }
}

export default Loading;