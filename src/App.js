import './App.css';
//import Topbar from './components/Topbar';
import Searchbar from './components/Searchbar';
import Card from './components/Card';
import { useState } from 'react';

function App() {
  //use states for searchbar and card
  const [user, setUser] = useState("octocat");
  const [data, setData] = useState([]);

if (user === "") {
  setUser("octocat");
}

  //handle searchbar input - this works
  function handleFormChange(event) {
      event.preventDefault();
      console.log(user)
      setUser(event.target.value);
  }

  //handle searchbar submit - this doesn't work
  function handleFormSubmit(event) {
    event.preventDefault();
    fetch(`https://api.github.com/users/${user}`)
      .then(response => response.json())
      .then(data => {
        //console.log(data)
        setData(data)
      })
      .catch(error => console.log(error));
}

  return (
      <div className="App-header">
          <Searchbar onFormChange={handleFormChange} onFormSubmit={handleFormSubmit}/>
          <Card username={data}/>
      </div>
  );
}

export default App