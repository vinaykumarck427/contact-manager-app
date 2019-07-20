import React from 'react'
import axios from '../../config/axios'

import { resetUser } from '../../actions/user'
import { connect } from 'react-redux'
class LogoutUser extends React.Component {
	componentDidMount() {
		axios.delete('/users/logout', {
			headers: {
				'x-auth': localStorage.getItem('userAuthToken')
			}
		})
		.then(response => {
			console.log(response.data)
			localStorage.removeItem('userAuthToken')
			console.log(this.props)
			this.props.dispatch(resetUser())
			this.props.history.push('/users/login')
		})
		.catch(err => {
			console.log(err)
		})
	}
	render() {
		return (
			<div>
				<h3>Log out....</h3>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}
export default connect(mapStateToProps)(LogoutUser)