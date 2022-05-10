import {Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/leyout/Footer';
import Navbar from './components/leyout/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { GithubProvider } from './context/github/GithubContext'
import { AlertProvider } from './context/alert/AlertContext'
import User from './pages/User';


function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Navbar title="Github Finder" />

          <main className='container main'>
            
            <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path='/about' element={ <About /> } />
              <Route path='/user/:login' element={ <User /> } />
              <Route path='/notfound' element={ <NotFound /> } />
              <Route path='/*' element={ <NotFound /> } />
            </Routes>

          </main>

        <Footer />
    
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
