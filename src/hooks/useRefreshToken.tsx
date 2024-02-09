import axios from "../api/axios"
import useAuth from "./useAuth"

const useRefreshToken = () => {
  const {auth, setAuth} = useAuth()

  const refresh = async () => {
    const rtString: string = JSON.parse(String(localStorage.getItem('refreshToken')))

    const response = await axios.post('auth/refresh', {
      withCredentials: true
    }, {
      headers: {
      'Authorization': `Bearer ${rtString}`,
      'Content-Type': 'application/json',
      }
    })
    localStorage.setItem('refreshToken', JSON.stringify(response?.data?.refresh_token))
    
    
    setAuth((prev: any) => {
      console.log(JSON.stringify(prev))
      console.log(response.data.access_token)
      return {...prev, accessToken: response.data.access_token}
    })
    return response.data.access_token
  }

  return refresh

}

export default useRefreshToken