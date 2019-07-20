import React from 'react'
import {Link} from 'react-router-dom'
import AddForm from './Form';
import axios from '../config/axios'

class AddContact extends React.Component{
  handleSubmit = (formData) => {
    axios.post('/contacts',formData,{
      headers:{
        'x-auth':localStorage.getItem('userAuthToken')
      }
    })
    .then(response => {
      this.props.history.push('/contacts')
    })
  }
  render(){
    return(
      <div className="col-5 offset-md-3">
        <h2 className="h21">Add New Contact</h2>
        <AddForm handleSubmit={this.handleSubmit}/>
        <Link className="Link2" to='/contacts'>Back</Link>
      </div>
    )
  }
}
export default AddContact
