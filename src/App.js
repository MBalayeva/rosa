import './App.css';
import React, { useState } from 'react';
import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [menuToggle, setMenuToggle] = useState(true);
  const showMenu = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <div className="App">
      <header>
        <Navbar showMenu={showMenu} menuToggle={menuToggle} />
      </header>
      
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
