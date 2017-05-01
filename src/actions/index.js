import axios from 'axios'
import { SIGNIN, SIGNOUT, ADD_SITE, DATA_SITE, EDIT_SITE, REMOVE_SITE } from './constants'

export const addSiteSuccess = (site) => (
  {
    type: ADD_SITE,
    payload: site
  }
)

export const signinSuccess = (user) => (
  {
    type: SIGNIN,
    payload: user
  }
)

export const signout = (e) => {
  return (
    {
      type: SIGNOUT,
      payload: e
    }
  )
}

export const dataSiteSuccess = (site) => (
  {
    type: DATA_SITE,
    payload: site
  }
)

export const editSiteSuccess = (site) => (
  {
    type: EDIT_SITE,
    payload: site
  }
)

export const removeSiteSuccess = (site) => (
  {
    type: REMOVE_SITE,
    payload: site
  }
)

export const signinUser = ({ username, password }) => {
  return (dispatch) => {
    axios.post('http://localhost:3000/users/signin', {
      username,
      password
    })
    .then((response) => {
      dispatch(signinSuccess(response.data))
    })
    .catch((error) => {
      console.log(error);
    });
  };
};

export const dataSite = () => {
  return (dispatch) => {
    axios.get('http://localhost:3000/sites')
    .then((response) => {
      dispatch(dataSiteSuccess(response.data))
    })
    .catch((error) => {
      console.log(error);
    });
  };
};
export const addSite = ({ url, username, password }) => {
  return (dispatch) => {
    axios.post('http://localhost:3000/sites/', {
      url,
      username,
      password
    })
    .then((response) => {
      dispatch(addSiteSuccess(response.data))
    })
    .catch((error) => {
      console.log(error);
    });
  };
};
export const editSite = (data) => {
  return (dispatch) => {
    axios.put('http://localhost:3000/sites/'+data.id, {
      url: data.url,
      username: data.username,
      password: data.password
    })
    .then((response) => {
      dispatch(editSiteSuccess(response.data))
    })
    .catch((error) => {
      console.log(error);
    });
  };
};
export const removeSite = (id) => {
  return (dispatch) => {
    axios.delete('http://localhost:3000/sites/'+id)
    .then((response) => {
      dispatch(removeSiteSuccess(response.data))
    })
    .catch((error) => {
      console.log(error);
    });
  };
};
