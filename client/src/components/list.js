import React from 'react'
import axios from '../config/axios'
import { Link } from 'react-router-dom'

import {connect} from 'react-redux'
import {setContacts, removeContact} from '../actions/contacts'
class UserList extends React.Component {
    componentDidMount() {
        axios.get('/contacts', {
            headers: {
                'x-auth': localStorage.getItem('userAuthToken')
            }
        })
            .then(response => {
                this.props.dispatch(setContacts(response.data))
            })
    }
    handleDelete = (id) => {
        const confirm = window.confirm('are you sure?')
        if(confirm){
            axios.delete(`/contacts/${id}`, {
                headers: {
                    'x-auth': localStorage.getItem('userAuthToken')
                }
            })
                .then(response => {
                    this.props.dispatch(removeContact(id))
                    // this.setState(prevState => ({ contacts: prevState.contacts.filter(user => user._id !== id) }))
                    this.props.history.push('/contacts')
                })
        }
    }
    render() {
        return (
            <div className="col-5 offset-md-2"><br />
                <h1 className="h3">contact list - <span>{this.props.contacts.length}</span></h1><br />
                <div>
                    <ul className="list-group">
                        {this.props.contacts.map(user => <li id="li" className="list-group-item" type='1' key={user._id}><Link to={`/contacts/${user._id}`}><h5 className="h6">{user.userName}</h5></Link><button className="button1" onClick={() => { this.handleDelete(user._id) }}>Delete</button></li>)}
                        <br /><Link className="Link" to='/contacts/new'>Add Contact</Link>
                    </ul>
                </div>  
            </div>
        )
    }
}
const mapStateToProps = function(state){
    return {
        contacts:state.contacts
    }
}
export default connect(mapStateToProps)(UserList)