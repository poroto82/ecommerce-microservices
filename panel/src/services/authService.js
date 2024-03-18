import axios from 'axios'

const apiUrl = '/api/v1'

// export function registerUser(user) {
//   return axios.post(`${apiUrl}/auth/register`, user)
// }

export function loginUser(user) {
  return axios.post(`${apiUrl}/auth/login`, user).catch(()=>alert('algo salio mal'))
}