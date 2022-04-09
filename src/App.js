import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {Home, About} from './pages';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
