import {useState} from 'react';

const useToken = () => {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem('token', JSON.stringify(userToken.token));
    localStorage.setItem('userName', JSON.stringify(userToken.data.userName));
    localStorage.setItem('isSole', JSON.stringify(userToken.data.isSoleCustomer));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token,
  };
};
export default useToken;
