import './App.css';

import { useEffect, useState } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [searchField, setSearchField] =useState('') // [value, setValue]
  const [title, setTitle] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)
  const onSearchChange =(event) => {
      const searchFieldString = event.target.value.toLocaleLowerCase()
      setSearchField(searchFieldString)
  }
  const onTitleChange =(event) => {
      const searchFieldString = event.target.value.toLocaleLowerCase()
      setTitle(searchFieldString)
  }
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((Response) => Response.json())
    .then((users) => setMonsters(users))
  }, [])
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])
  
  return (
    <div className="App">
      <h1 className='app-title'>{title}</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters- search-box'  />
      <br />
      <SearchBox onChangeHandler={onTitleChange} placeholder='set title' className='title- search-box'  />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App;
