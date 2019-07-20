const initialDefaultState = {}

const contactReducer = (state = initialDefaultState, action) => {
	switch(action.type){
		case 'SET_CONTACT': 
			return {...action.payload}
		case 'EDIT_CONTACT':
			return Object.assign(state, action.payload)
		default :
			return {...state}
	}
}
export default contactReducer