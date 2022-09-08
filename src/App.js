import './App.css';
import Topbar from './components/Topbar';
import Searchbar from './components/Searchbar';
import Card from './components/Card';
import { useState, useContext } from 'react';
import { ThemeContext, ThemeProvider } from "./helpers/ThemeContext.js";

function App() {
  //use states for searchbar and card
  const [user, setUser] = useState("octocat");
  const [data, setData] = useState([]);

  const context = useContext(ThemeContext);

  console.log(context);

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
        setData(data)
      })
      .catch(error => console.log(error));
}

  return (
    
      <div className="App-header" id={context.theme}>
          <Topbar onThemeToggle={() => context.toggleTheme()} />
          <Searchbar onFormChange={handleFormChange} onFormSubmit={handleFormSubmit} />
          <Card username={data} />
      </div>
  );
}

function AppWrapper() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default AppWrapper