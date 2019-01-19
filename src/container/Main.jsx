import React, { Component } from 'react'
import {connect} from 'react-redux'

class Main extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
           this is page
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return state.dataReducer
}

export default connect(mapStateToProps)(Main) 
