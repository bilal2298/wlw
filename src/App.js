
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Navbar2 from './components/Navbar/Navbar2';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/others/ScrollToTop';

function App() {
  
  return (
    <>
    <Navbar/>
    <Navbar2/>
    <ScrollToTop/>
      <Routes>
          <Route path='/' index element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
      <Footer/>
    
    </>
  );
}

export default App;
