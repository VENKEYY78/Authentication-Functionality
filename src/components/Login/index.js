import {Component} from 'react'

import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {
    username: 'rahul',
    password: 'rahul@2021',
  }

  onLoginSuccessFul = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onClickLoginBtn = async () => {
    const {username, password} = this.state
    const UserDetails = {username, password}
    const Apiurl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(UserDetails),
    }

    const response = await fetch(Apiurl, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onLoginSuccessFul(data.jwt_token)
    }
  }

  render() {
    return (
      <div className="login-bg-container">
        <h1 className="heading">Please Login</h1>
        <button
          type="button"
          className="login-btn"
          onClick={this.onClickLoginBtn}
        >
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
