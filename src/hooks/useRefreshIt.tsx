import axios from "../api/axios"
import useAuth from "./useAuth"

const useRefreshIt = () => {
  const refresh = async () => {

    const refreshToken = localStorage.getItem('refreshToken')
    console.log('rt izzzz', refreshToken)

    const response = axios.post('auth/tester', {
        // 'Authorization': `Bearer ${refreshToken}`,
        // 'Content-Type': 'application/json',


        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlNGE3ZTZlYi1jY2UxLTQxZTctOGVjOC0yY2YxOGQ5N2YwNGUiLCJlbWFpbCI6ImJybzJAbWFpbC5jb20iLCJpYXQiOjE3MDcyMDY2NjIsImV4cCI6MTcwNzgxMTQ2Mn0.d72YcLdJSF3iwbirPzrSs-GsTHP7fY5VmKyo2iw0qfA',
      }, {
        headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        // 'Content-Type': 'multipart/form-data',
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    return response
  }

  return refresh
}

export default useRefreshIt