import './App.css';
//import Topbar from './components/Topbar';
import Searchbar from './components/Searchbar';
import Card from './components/Card';
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {     
    fetch(`https://api.github.com/users/${user}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.log(error));
}, []);

  function handleFormSubmit(event) {
    setUser(event.target.value);
  }

  return (


      <header className="App-header">
          <Searchbar onSubmit={handleFormSubmit}/>
          <Card user={user}/>
      </header>
  );
}

export default App
