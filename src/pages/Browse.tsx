import { useState, useEffect } from "react"
import useAxiosPrivate from "../hooks/useAxiosPrivate"
import { useNavigate, useLocation } from "react-router-dom"


const Browse = () => {
    const [songs, setSongs] = useState<any[]>([])
    const axiosPrivate = useAxiosPrivate()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        let isMounted = true // what is this for? 
        const controller = new AbortController()  //cancels pending requests if the component unmounts. 

        const getSongs = async () => {
            try {
                const res = await axiosPrivate.get('song', {
                    signal: controller.signal
                })
                console.log(res.data)
                isMounted && setSongs(res.data)

            } catch(err) {
                console.error(err)
                // navigate('/login', {state: { from: location }, replace: true}) //sends user to login and back when needed, does not list login in the browser history.
            }
            
        }

        getSongs()

        return () => {
            isMounted = false
            controller.abort()
        }

    },[])

  return (
    <article>
        <h2>
            Songs
        </h2>
        {songs?.length
        ? (
            <ul>
                {songs.map((songs, i) => <li key={i}>{songs?.name}</li>)}
            </ul>
        ) : <p>nothing here</p>
        }
    </article>
  ) // Maps out songs in db, adjust for data type. 
}

export default Browse