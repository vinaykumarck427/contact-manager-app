import React from 'react'
import axios from '../config/axios'

import AddFrom from './Form'

import {connect} from 'react-redux'
import { setContact, editContact} from '../actions/contact'
class EditContact extends React.Component{
  componentDidMount = () => {
    const id = this.props.match.params.id
    axios.get(`/contacts/${id}`,{
      headers:{
        'x-auth':localStorage.getItem('userAuthToken')
      }
    })
    .then(response => {
      console.log(response.data)
      this.props.dispatch(setContact(response.data))
      // this.setState({contact:response.data})
    })
  }
  handleSubmit = (formData) => {
    const id = this.props.match.params.id
      axios.put(`/contacts/${id}`, formData, {
        headers: {
          'x-auth': localStorage.getItem('userAuthToken')
        }
      })
        .then(response => {
          this.props.dispatch(editContact(response.data))
          this.props.history.push(`/contacts/${id}`)
        })
    }

  render(){
    return(
      <div className="col-5 offset-md-4">
        <h2 className="h21 center">Edit Contact</h2>
        <AddFrom contact={this.props.contact} handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}
const mapStateToProps = function(state){
  return {
    contact:state.contact
  }
}
export default connect(mapStateToProps)(EditContact)