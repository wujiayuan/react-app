import {createStore,combineReducers} from 'redux'
import dataReducer from './reducer/dataReducer'

const reducers=combineReducers({
    dataReducer
})

const Store =createStore(reducers)

export default Store