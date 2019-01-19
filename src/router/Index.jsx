import React, { Component } from 'react'
import {Switch,Route,Redirect,NavLink} from 'react-router-dom'
import Main from '../container/Main'

class ViewRouter extends Component {
  render() {
    return (
        <div className="wrapper">
             <Switch>
                <Route path="/" component={()=><Redirect to="/main" />} exact />
                <Route path="/main" component={Main} />
            </Switch>
            <NavLink to="/main">main</NavLink>
        </div>
    )
  }
}

export default ViewRouter
