import axios from "../api/axios"
import useAuth from "./useAuth"

const useRefreshToken = () => {
  const {auth, setAuth} = useAuth()
  const rt = localStorage.getItem('refreshToken')

  const refresh = async () => {
    console.log(rt)
    const response = await axios.post('/auth/refresh', {
      Authorization: rt,
      withCredentials: true
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