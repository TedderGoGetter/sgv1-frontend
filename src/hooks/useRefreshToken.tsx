import axios from "../api/axios"
import useAuth from "./useAuth"

const useRefreshToken = () => {
  const {auth, setAuth} = useAuth()
  const refreshToken = localStorage.getItem('refreshToken')
  console.log(refreshToken)

  const refresh = async () => {
    const response = await axios.post('auth/tester', {

      
      withCredentials: true
    }, {
      headers: {
      // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlNGE3ZTZlYi1jY2UxLTQxZTctOGVjOC0yY2YxOGQ5N2YwNGUiLCJlbWFpbCI6ImJybzJAbWFpbC5jb20iLCJpYXQiOjE3MDcyNDkwOTIsImV4cCI6MTcwNzg1Mzg5Mn0.xfhhO_9GPW7bpN2jRdcFuWSP34aZaBlzUpBYuuFWeZU',
      'Authorization': `Bearer ${refreshToken}`,
      'Content-Type': 'application/json',
      }
    })

    
    setAuth((prev: any) => {
      console.log(JSON.stringify(prev))
      console.log(response.data.accessToken)
      return {...prev, accessToken: response.data.accessToken}
    })
    return response.data.accessToken
  }

  return refresh
}

export default useRefreshToken