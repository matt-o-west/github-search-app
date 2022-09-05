import './App.css';
import Topbar from './components/Topbar';
import Searchbar from './components/Searchbar';
import Card from './components/Card';
import { useState, createContext } from 'react';

export const ThemeContext = createContext(null)

function App() {
  //use states for searchbar and card
  const [user, setUser] = useState("octocat");
  const [data, setData] = useState([]);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => { 
    setTheme((curr) => curr === "light" ? "dark" : "light");
  }

if (user === "") {
  setUser("octocat");
}


  //handle searchbar input - this is redundant but keeping here for learning purposes
  function handleFormChange(event) {
      event.preventDefault();
      console.log(user)
      setUser(event.target.value);
  }

  //handle searchbar submit 
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
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App-header" id={theme}>
          <Topbar onThemeToggle={toggleTheme} id={theme}/>
          <Searchbar onFormChange={handleFormChange} onFormSubmit={handleFormSubmit} id={theme}/>
          <Card username={data} id={theme}/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App