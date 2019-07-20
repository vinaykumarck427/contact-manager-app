import React, {Fragment} from "react";
import { Formik, Field } from "formik";
import * as yup from "yup";

const intialState = {
  name: "",
  email: "",
  password: ""
};
const userSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .required()
    .max(13)
    .min(8)
});
  class MyComponent extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        name: "",
        email: "",
        password: "",
        user: intialState
      }
    }
    handleSubmit = (e,values) => {
      e.preventDefault()
      console.log(values)
      // const formData = {
      //   name: this.state.name,
      //   email: this.state.email,
      //   password: this.state.password
      // }
      this.props.handleRegister(values)
    }
    render(){
      return(
        <Fragment>
          {/* <span >{JSON.stringify(this.state.user, null, 2)}</span> */}
          <Formik
            initialValues={this.state.user}
            validationSchema={userSchema}
          >
            
            {props =>
              !props.isSubmitting ? (
                <form>{/*onSubmit={this.handleSubmit}*/}
                  <label>User name</label><br />
                  <Field
                    name="name"
                    onChange={props.handleChange}
                    value={props.values.name}
                    type="text"
                    placeholder="Name"
                  />
                  {props.errors.name && props.touched.name ? (
                    <span >{props.errors.name}</span>
                  ) : (
                      ""
                    )}<br />

                  <label>Email</label><br />

                  <Field
                    type="email"
                    placeholder="Enter email"
                    onChange={props.handleChange}
                    name="email"
                    value={props.values.email}
                  />

                  {props.errors.email && props.touched.email ? (
                    <span>{props.errors.email}</span>
                  ) : (
                      ""
                    )}<br />
                  <label>Password</label><br />
                  <Field
                    type="password"
                    onChange={props.handleChange}
                    name="password"
                    value={props.values.password}
                    placeholder="Password"
                  />

                  {props.errors.password && props.touched.password ? (
                    <span >{props.errors.password}</span>
                  ) : (
                      ""
                    )}<br />
                  
                  <button
                    type="submit"
                    onClick={() => {
                      this.handleSubmit(props.values)
                    }}
                    disabled={!props.dirty && !props.isSubmitting}
                  >
                    Submit
              </button><br />
                  <button
                    disabled={!props.dirty}
                    onClick={props.handleReset}
                    type="button"
                  >
                    Reset
              </button>
                </form>
              ) : (
                  <div />
                )
            }
          </Formik>
        </Fragment>
      )
    }
  }
  export default MyComponent

  