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

    console.log(response.data.refreshToken)
    
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