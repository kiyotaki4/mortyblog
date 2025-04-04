import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Используем HashRouter
import './App.css';
import Registration from './registration.jsx';
import Home from './Home.jsx';
import Login from './login.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>

        <div className="footer">
          <div className="left">
            <p>© 2025 Your Website Name. All rights reserved.</p>
            <p>
              Created with ❤️ by{' '}
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                @kiyotaki4
              </a>
            </p>
            <div className="social-links">
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>{' '}
              |{' '}
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>{' '}
              |{' '}
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
          <img
            src="https://i.pinimg.com/736x/b7/dd/3e/b7dd3ed090bcccb4d0424d4247563a47.jpg"
            alt=""
          />
        </div>
      </Router>
    </>
  );
}

export default App;
