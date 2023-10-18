
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Input from './components/Input/Input';
// import RegistrationPage from './pages/RegistrationPage';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
          <Route path='/' index element={<Home />} />
          {/* <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} /> */}
      </Routes>
    
    </>
  );
}

export default App;
