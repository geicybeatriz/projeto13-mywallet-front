import axios from "axios";

const URL = process.env.REACT_APP_BASE_API;

function signUp(newUser){
  const promise = axios.post(`${URL}/sign-up`, newUser);
  return promise;
}

function signIn(user){
  const promise = axios.post(`${URL}/`, user);
  return promise;
}

const authServices = {
  signUp, signIn
}

export default authServices;