import Header from "./components/header/Header";
import './App.css';
// import Home from "./components/home/Home";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchDoctor from "./components/search-doctor/SearchDoctor";


function App() {
  return (
    <div className="app">
      {/* <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* <Route path="/patient" element={<PatientPage />} />
      <Route path="/blog" element={<BlogPage />} />
      Add more routes as needed
    </Routes>
  </Router> */}
  <Header />
  {/* <SearchDoctor/> */}
    </div>
  );
}

export default App;
