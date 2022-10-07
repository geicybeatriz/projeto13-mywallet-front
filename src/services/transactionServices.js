import axios from "axios";

const URL = process.env.REACT_APP_BASE_API;

function getTransactions(config){
  const promise = axios.get(`${URL}/myaccount/home`,config);
  return promise;
}

function addTransaction(data, config){
  const promise = axios.post(`${URL}/myaccount/home`, data, config);
  return promise;
}

function updateTransaction(id, data, config){
  const promise = axios.put(`${URL}/myaccount/home/${id}`, data, config);
  return promise;
}

function deleteTransaction(id, config){
  const promise = axios.delete(`${URL}/myaccount/home/${id}`, config);
  return promise;
}

function logOut(config){
  const promise = axios.put(`${URL}/myaccount/exit`, {}, config);
  return promise;
}


const transactionServices = {
  getTransactions,
  addTransaction,
  updateTransaction,
  deleteTransaction,
  logOut
}
export default transactionServices;
