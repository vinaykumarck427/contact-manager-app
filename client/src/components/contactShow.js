import React from 'react'
import axios from '../config/axios'
import {Link} from 'react-router-dom'
import _ from 'lodash'

import {connect} from 'react-redux'
import {setContact} from '../actions/contact'

class UserShow extends React.Component{
    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`/contacts/${id}`,{
            headers:{
                'x-auth': localStorage.getItem('userAuthToken')
            }
        })
            .then(response => {
                this.props.dispatch(setContact(response.data))
                // this.setState({contact:response.data})
            })
    }
    render(){
        return (
          <div className="col-4 offset-md-2">
            <br />
            {!_.isEmpty(this.props.contact) && (
              <div>
                <h1 className="h11 text-uppercase">
                  {this.props.contact.userName}
                </h1>
                <div className="span">
                  <hr />
                  <span className="span">
                    <p className="p">
                      <b>Email - </b>
                      {this.props.contact.email}
                    </p>
                  </span>
                  <span>
                    <p className="p">
                      <b>Phone Number - </b>
                      {this.props.contact.phoneNumber}
                    </p>
                  </span>
                  <hr />
                </div>

                <Link className="Link1" to="/contacts">
                  Back
                </Link>
                <Link
                  className="Link1"
                  to={`/contacts/edit/${this.props.contact._id}`}
                >
                  Edit
                </Link>
              </div>
            )}
          </div>
        );
    }
}
const mapStateToProps = function(state){
    return {
        contact:state.contact
    }
}
export default connect(mapStateToProps)(UserShow)