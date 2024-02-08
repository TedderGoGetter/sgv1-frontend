import SearchBar from '../components/SearchBar'
import Signin from '../components/Signin'
import './frontpage.scss'
import Signup from '../components/Signup'

export const Frontpage = () => {

  return (
    <div> 
      <div className="search-container">
        <div className='search'>
          <h4>Search for your fav songs!</h4>
          <SearchBar/>
        </div>
      </div>
      <br/>
      <Signin/>
      <br/>
      <br/>
      <Signup/>
      <br/>
    </div>
  )
}
