import { SIGNIN, SIGNOUT } from '../actions/constants';

let initialState = {
  user: '',
  role: '',
  logoutStatus: false
}

const userValidate = (users) => {
  if (users.payload.length !== 0) {
    localStorage.setItem('user', users.payload.username)
    localStorage.setItem('logoutStatus', false)
    return {
      user: users.payload.username,
      role: 'admin',
      logoutStatus: false
    }
  }else {
    return {
      user: '',
      role: '',
      logoutStatus: false
    }
  }
}

const signout = () => {
  localStorage.clear()
  localStorage.setItem('logoutStatus', true)
  return {
    user: '',
    role: '',
    logoutStatus: true
  }
}

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN:
      return userValidate(action)
    case SIGNOUT:
      return signout()
    default:
      return state
  }
}

export default usersReducers
