import React from 'react'
import axios from "../../config/axios";

import FormLogin from './formLogin'

class UserLogin extends React.Component {
    handleLogin = (data) => {
        if(data.email === "" && data.password === ""){
            alert('please enter input')
        }else if(data.email === ""){
            if(data.password === ""){
                alert('please enter email & password')
            }else{
                alert('please enter email')
            }
        }else if(data.password === ""){
                alert("please enter password");
        }else{
        axios.post('/users/login', data)
            .then(response => {
                console.log(response.data)
                 if (response.data.errors) {
                   alert(response.data.errors.message);
                 } else {
                   console.log(this.props);
                   const token = response.data.token;
                   localStorage.setItem(
                     "userAuthToken",
                     token
                   );
                   this.props.history.push("/users/account");
                 }
            })
            .catch(err => {
                 if (err) {
                   alert(err.message);
                 }
            })
        }
    }
    render() {
        return (
            <div className="col-3 offset-md-3">
                <FormLogin handleLogin={this.handleLogin}/>
            </div>
        )
    }
}
export default UserLogin