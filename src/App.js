import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./login"

function App() {
  return (
            <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
               
            </Routes>
        </Router>
  );
}

export default App;
