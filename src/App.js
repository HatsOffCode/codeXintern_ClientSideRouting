import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <Outlet />
      <Footer/>
    </div>

  );
}

export default App;
