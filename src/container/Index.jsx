import React, { Component } from 'react'
import {BrowserRouter} from 'react-router-dom'
import ViewRouter from '../router/Index'
import {Provider} from 'react-redux'
import Store from '../store/store'

class Index extends Component {
  render() {
    return (
        <Provider store={Store}>
            <BrowserRouter>
                <ViewRouter />
            </BrowserRouter>
        </Provider>
    )
  }
}

export default  Index
