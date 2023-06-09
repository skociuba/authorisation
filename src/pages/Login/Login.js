import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';

import {fetchLoginData} from './actions';
import {loginDataSelector, loginLoadingSelector, errorSelector} from './selectors';
import {loginWrapper} from './Login.style.js';

const Login = ({setToken}) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  const loginData = useSelector((state) => loginDataSelector(state));
  const errorCode = useSelector((state) => errorSelector(state));
  const loginLoadingExample = useSelector((state) => loginLoadingSelector(state));

  const handleSubmit = (e) => {
    dispatch(
      fetchLoginData({
        username,
        password,
      }),
    );
  };

  useEffect(() => {
    if (loginData) {
      setToken(loginData);
    }
  }, [loginData, setToken]);

  return (
    <div className={loginWrapper}>
      <h1>Please Log In</h1>
      <button onClick={handleSubmit}>Log in</button>
      <label>
        <p>Username</p>
        <input type="text" onChange={(e) => setUserName(e.target.value)} />
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <div />

      <div>{errorCode ? errorCode : null}</div>
      <div>{loginLoadingExample ? '...Loading' : null}</div>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
