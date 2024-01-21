import './searchbar.scss'
import {useState} from 'react'

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("")

    const examples = [
        { name: "One Mic", artist: "Nas"},
        { name: "Street Dreams", artist: "Nas"},
        { name: "2024", artist: "Playboi Carti"},
        { name: "Magnolia", artist: "Playboi Carti"},
        { name: "Rockstar Made", artist: "Playboi Carti"},

    ]
    const handleChange = (e: any) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
      
      if (searchInput.length > 0) {
          examples.filter((example) => {
          return example.name.match(searchInput);
      });
    }

    return(
        <input
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput} />
    )
}

export default SearchBar