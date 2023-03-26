import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './navbar/Nav';
import './App.css';
import Submission from './components/Submission';
import CardDetails from './components/CardDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exect path="/submission" element={<Submission />} />
          <Route exect path="/card-details/:id" element={<CardDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
