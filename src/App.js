import './App.css';
//import Topbar from './components/Topbar';
import Searchbar from './components/Searchbar';
import Card from './components/Card';
import { useState, useEffect } from 'react';

function App() {
  //use states for searchbar and card
  const [user, setUser] = useState("matt-o-west");
  const [data, setData] = useState([]);


  //fetch data from github api
  useEffect(() => {     
    fetch(`https://api.github.com/users/${user}`)
      .then(response => response.json())
      .then(data => {
        //console.log(data)
        setData(data)
      })
      .catch(error => console.log(error));
}, [user]);

if (user === "") {
  setUser("matt-o-west");
}

  //handle searchbar input
  function handleFormChange(event) {
      event.preventDefault();
      console.log(user)
      setUser(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    setUser("");
}



  return (


      <header className="App-header">
          <Searchbar onFormChange={handleFormChange} onFormSubmit={handleFormSubmit}/>
          <Card username={data}/>
      </header>
  );
}

export default App