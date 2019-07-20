import React from 'react'

class FormLogin extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
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
            email: this.state.email,
            password: this.state.password
        }
        console.log(formData)
        this.props.handleLogin(formData)
    }
    render() {
        return (
            <div>
                <h2 className="h2 text-center text-justify text-uppercase text-center text-success">Login of user</h2>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="formLabel2">Email</label><br />
                        <input className="input2 form-control col-md-9" type='text' name='email' value={this.state.email} onChange={this.handleChange} />  
                    </div>

                    <div className="form-group">
                        <label className="formLabel2">Password</label><br />
                        <input className="input2 form-control col-md-9"type='password' name='password' value={this.state.password} onChange={this.handleChange} />
                    </div>
                    
                    <div className="form-group">
                        <input className="pure-button b1" type='submit' value='Submit' />
                    </div>
                </form>
            </div>
        )
    }
}
export default FormLogin