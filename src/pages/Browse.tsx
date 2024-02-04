import { useState, useEffect } from "react"
import axios from "../api/axios"
import useRefreshToken from "../hooks/useRefreshToken"


const Browse = () => {
    const [songs, setSongs] = useState<any[]>([])
    const refresh = useRefreshToken()

    useEffect(() => {
        let isMounted = true // what is this for? 
        const controller = new AbortController()  //cancels pending requests if the component unmounts. 

        const getSongs = async () => {
            try {
                const res = await axios.get('song', {
                    signal: controller.signal
                })
                console.log(res.data)
                isMounted && setSongs(res.data)

            } catch(err) {
                console.error(err)
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
        <button onClick={() => {refresh()}}>Refresh</button>
    </article>
  ) // Maps out songs in db, adjust for data type. 
}

export default Browse