
import Navbar from './ui/Navbar';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Companies from './pages/Companies';
import JobSeekers from './pages/JobSeekers';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import GetStarted from './pages/GetStarted';
import Footer from './components/Footer';
import SignUp from './pages/Signup';

function App() {
  return (
    
    <>
    <Navbar />
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/jobseekers" element={<JobSeekers />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/get-started" element={<GetStarted />} />
    </Routes>
    </>
    <Footer/>
    </>
      

  );
}

export default App;
