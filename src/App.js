import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Navbar2 from './components/Navbar/Navbar2';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/others/ScrollToTop';
import Forget from './components/auth/Forget';
import { ToastContainer } from 'react-toastify';
import Sidebar from './supplier/sidebar/Sidebar';
import NavbarDash from './supplier/components/navdash/NavbarDash';


function App() {
  
  return (
    <>
    {/* <Navbar/>
    <Navbar2/>
    <ScrollToTop/>
      <Routes>
          <Route path='/' index element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/forget" element={<Forget />} />
         
      </Routes>
      <Footer/> */}
      <Sidebar/>
      <NavbarDash/>
      <ToastContainer autoClose='3000' />
    
    </>
  );
}

export default App;
