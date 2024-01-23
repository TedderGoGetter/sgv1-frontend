import SearchBar from './SearchBar'
import Signin from './Signin'
import Browse from './browse'
import './frontpage.scss'


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
      <Browse/>
    </div>
  )
}
