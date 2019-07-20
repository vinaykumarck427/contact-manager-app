import React from 'react'

import {BrowserRouter,Route,Link, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import _ from 'lodash'

import UserList from './list'
import UserShow from './contactShow'
import LoginUser from './user/login'
import AccountUser from './user/account'
import LogoutUser from './user/logout'
import RegisterUser from './user/registration'
import AddContact from './addContact'
import EditContact from './editContact'
const App = (props) => {
  console.log(props)
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="divnav row">
          <nav className="navbar navbar-expand-sm">
            <div className="col-3 offset-md-3">
              <div className="collapse navbar-collapse" id="navbarToggleExternalContent">
                <ul className="nav navbar-nav">
                  {!_.isEmpty(localStorage.getItem("userAuthToken")) ? (
                    <div>
                      <li className="li nav-item">
                        <Link to="/users/account" className="nav-link">
                          Account
                        </Link>
                      </li>
                      <li className="li nav-item">
                        <Link className="nav-link" to="/users/logout">
                          Logout
                        </Link>
                      </li>
                    </div>
                  ) : (
                    <div>
                      <li className="li nav-item">
                        <Link to="/users/register" className="nav-link">
                          Register
                        </Link>
                      </li>
                      <li className="li nav-item">
                        <Link className="nav-link" to="/users/login">
                          Login
                        </Link>
                      </li>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <br />
        <br />
        <div className="row align-items-end">
          <Switch>
            <Route path="/users/account" component={AccountUser} exact={true} />
            <Route exact path="/users/logout" component={LogoutUser} />
            <Route path="/users/register" component={RegisterUser} exact={true} />
            <Route exact path="/users/login" component={LoginUser} />
            <Route path="/contacts" component={UserList} exact={true} />

            <Route exact path="/contacts/new" component={AddContact} />
            <Route exact path="/contacts/edit/:id" component={EditContact} />
            <Route exact path="/contacts/:id" component={UserShow} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
  return {
    user:state.user
  }
}
export default connect(mapStateToProps)(App)