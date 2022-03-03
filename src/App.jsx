// https://reactrouter.com/docs/en/v6/getting-started/tutorial
// https://www.npmjs.com/package/react-router-dom
// npm install react-router-dom@6 history@5

import { Link } from 'react-router-dom';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Menu from './routes/Menu';
import Booking from './routes/Booking';
import data from './data';

function App() {
  return (
    <div className="App">
      <header>
        <img id='logo' src='/img/nypizzalogo.svg' alt="ny pizza logo" />
        <nav>
          <Link to="/" className="fancy-btn">Home</Link>
          <Link to="/menu" className="fancy-btn">Menu</Link>
          <Link to="/booking" className="fancy-btn">Booking</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="menu" element={<Menu />}></Route>
          <Route path="booking" element={<Booking />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
