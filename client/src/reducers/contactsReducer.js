const initialDefaultState = []

const contactsReducer = (state = initialDefaultState, action) => {
	switch(action.type){
		case 'SET_CONTACTS' :
			return [...action.payload]
		case 'REMOVE_CONTACT' :
			return state.filter(contact => contact._id !== action.payload)
		default: 
			return [...state]
	}
}

export default contactsReducer
