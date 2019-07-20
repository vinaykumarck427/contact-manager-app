import React from 'react'
import {Link} from 'react-router-dom'



class AddForm extends React.Component{
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      phone: ''
    }
  }
  handleInput = (e) => {
    const value = e.target.type === 'text' ? e.target.value : e.target.value
    const name = e.target.name
    this.setState({ [name]: value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      userName: this.state.name,
      email: this.state.email,
      phoneNumber: this.state.phone
    }
    this.props.handleSubmit(formData)
  }
  
  componentWillReceiveProps(nextProps) {
    if(nextProps.contact){
      this.setState({
        name: nextProps.contact.userName,
        email: nextProps.contact.email,
        phone: nextProps.contact.phoneNumber
      })
    }
  }
  render(){
    return(
      <div>
        <form className="form1" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="label" htmlFor='label1'>Name</label><br />
            <input className="input1 form-control-md col-sm-10" to='label1' name='name' type='text' value={this.state.name} onChange={this.handleInput} />
          </div>
          
          <div className="form-group">
            <label className="label" htmlFor='label2'>Email:</label>
            <input className="input1 form-control-md col-sm-10" to='label2' name='email' type='text' value={this.state.email} onChange={this.handleInput} />
            <br />
          </div>
          <div className="form-group">
            <label className="label" htmlFor='label3'>Phone Number:</label><br />
            <input className="input1 form-control-md col-sm-10" to='label3' type='number' name='phone' value={this.state.phone} onChange={this.handleInput} />
           </div>
          <div className="form-group">
            <input className="button2 pure-button" type='submit' value='Submit' />
          </div>
        </form>
        {this.props.contact && <Link className="Link" to={`/contacts/${this.props.contact._id}`} >Back</Link>}
      </div>
    )
  }
}
export default AddForm