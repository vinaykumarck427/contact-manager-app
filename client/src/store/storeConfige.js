import { createStore, combineReducers } from 'redux'
import userReducer from '../reducers/userReducer'
import contactsReducer from '../reducers/contactsReducer'
import contactReducer from '../reducers/contactReducer'


const configureStore = () => {
	const store = createStore(combineReducers({
		user: userReducer,
		contacts: contactsReducer,
		contact:contactReducer
	}))
  return store
}

export default configureStore