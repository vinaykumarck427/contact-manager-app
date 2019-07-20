import React from 'react'
import ReactDOM from 'react-dom'
import axios from './config/axios'
import '../src/Index.css'

import App from './components/App'

import {Provider} from 'react-redux'

import {setUser} from './actions/user'

import configureStore from './store/storeConfige'
// import MyComponent from './components/user/formik';

const store = configureStore()

store.subscribe(() => {
    console.log('redux store state', store.getState())
})

if(localStorage.getItem('userAuthToken')){
	axios.get('/users/account',{
		headers:{
			'x-auth':localStorage.getItem('userAuthToken')
		}
	})
	.then(response => {
		store.dispatch(setUser(response.data))
		// Promise.all([axios.get('/contacts'),axios.get(contact/)])
	})
}
const provider = (
	<Provider store={store}>
		<App />
	</Provider>
)

ReactDOM.render(provider,document.getElementById('root'))