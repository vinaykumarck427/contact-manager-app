import React from 'react'
import '../../Index.css'

class FormRegister extends React.Component {
  constructor() {
    super()
    this.state = {
        name: '',
        email: '',
        password: '',
        }
    }
  handleChange = (e) => {
    const value = e.target.type === 'text' ? e.target.value : e.target.value
    const name = e.target.name
    this.setState(() => ({
        [name]: value
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
    }
    this.props.handleRegister(formData)
  }
    
  render(){
     return (
			<div>
				<h2 className="h2 text-center text-justify text-uppercase text-center text-primary">User Registration</h2>
				<form className="form" onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label className="formLabel">Username</label><br />
						<input type='text' className="input form-control col-sm-9" name='name' value={this.state.name} onChange={this.handleChange} />
					</div>

					<div className="form-group">
							<label className="formLabel">Email</label>
							<br />
							<input type='text' className="input form-control col-sm-9" name='email' value={this.state.email} onChange={this.handleChange} />{/*{this.state.emailErr && <small>{this.state.emailErr}</small>}*/}
					</div>
								
					<div className="form-group">
						<label className="formLabel">Password</label><br /> 
						<input type='password' className="input form-control col-sm-9" name='password' value={this.state.password} onChange={this.handleChange} />
					</div>

					<div className="form-group">
						<input type='submit' value='Submit ' className="pure-button button text-uppercase"/>
					</div>
				</form>
			</div>
    )
  }
}
export default FormRegister
