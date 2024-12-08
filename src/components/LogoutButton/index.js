import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const LogoutButton = props => {
  const onClickLogutBtn = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="logout-button-container">
      <button type="button" className="logout-btn" onClick={onClickLogutBtn}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
