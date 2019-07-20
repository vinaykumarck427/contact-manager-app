import React from 'react'
import axios from '../../config/axios'

import FormRegister from './formRegistration'
// import MyComponent from './formik';

class UserRegistration extends React.Component {
    handleRegister = (data) =>{
        if(data.name === "" && data.email === "" && data.password == ""){
            alert('please enter input')
        } else if (data.name === "") {
            if(data.email === ""){
                alert('please enter username & email')
            }else if(data.password == ""){
                alert('please enter username & password')
            }else{
                alert("please enter username");
            }
         } else if (data.email === "") {
             if (data.password === "") {
               alert("please enter email & password");
             } else {
               alert("please enter email");
             }
         } else if (data.password === "") {
           alert("please enter password");
         } else {
           axios.post("/users/register", data)
             .then(response => {
               console.log(response.data);
               if (response.data.errmsg) {
                 alert(response.data.errmsg);
               } else if(response.data.errors){
                   alert(response.data.message)
               }else{
                 console.log(this.props);
                 this.props.history.push("/users/login");
               }
             })
             .catch(err => {
                 if (err) {
                 alert(err.errmsg);
               }
             });
         }
    }
    render() {
        return (
            <div className="col-4 offset-md-3">
                    <FormRegister handleRegister={this.handleRegister} />
                    {/* <MyComponent handleRegister={this.handleRegister} /> */}
            </div>
        )
    }
}

export default UserRegistration