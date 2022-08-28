import './App.css';
//import Topbar from './components/Topbar';
import Searchbar from './components/Searchbar';
import Card from './components/Card';
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {     
    fetch(`https://api.github.com/users/matt-o-west`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setUser(data)
      })
      .catch(error => console.log(error));
}, []);

  function handleFormSubmit(event) {
   return setUser(event.target.value);
  }

  return (


      <header className="App-header">
          <Searchbar onSubmit={handleFormSubmit}/>
          <Card username={user}/>
      </header>
  );
}

export default App
