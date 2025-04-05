import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Community from "./components/Community";
import AddPost from "./components/AddPost";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>  
        <Route exact path="/" element={<SignUp />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/posts" element={<Community />} />
          <Route path="/addPost" element={<AddPost />} />
        </Route>
      </Routes>
      <div className="social-media">
        <p>Follow us on:</p>
        <a href="https://www.linkedin.com/in/vinay-kumar-gundam-7b9506236" target="_blank" rel="noopener noreferrer">Linkdin</a>
        <a href="https://github.com/VinayGundam123" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.instagram.com/_vinay_gundam_/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </Router>
  );
}

export default App;
