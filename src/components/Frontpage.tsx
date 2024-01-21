import { useState } from 'react'
import SearchBar from './SearchBar'
import './frontpage.scss'

export const Frontpage = () => {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    console.log({userName, password})
  }

  return (
    <div> 
      <div className="search-container">
        <div className='search'>
          <h4>Search for your fav songs!</h4>
          <SearchBar/>
        </div>
      </div>
      <div>
        <form>
          <label>Sign In</label>
          <input 
            type='text'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            
          />
          <input 
            type='password' 
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={() => handleSubmit()}
          >Submit</button>
        </form>
      </div>
    </div>
  )
}
