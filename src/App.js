import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
// import Search from "./pages/Search"
import Branches from "./pages/Branches"
import Upload from "./components/Upload"
import Font from "./components/Font"
import NavBar from "./components/NavBar";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Font />} />
          {/* <Route path="/search" element={<Search />} /> */}
          <Route path="/upload" element={<Upload />} />
          <Route path="/branches" element={<Branches />} />
        </Routes>
        <Chatbot />
      </BrowserRouter>
    </div>
  );
}

export default App;
