/**
 * @author Mugdha Agharkar
 */

import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import Dashboard from './pages/Dashboard/Dashboard';
import Comparison from './pages/Comparison/Comparison';
import Analysis from './pages/Analysis/Analysis';
import Tickers from './pages/Tickers/Tickers';
import SectorDetails from './pages/SectorDetails/SectorDetails';
import TickerDetails from './pages/TickerDetails/TickerDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/home' element={<Dashboard />} />
      <Route path='/comparison' element={<Comparison />} />
      <Route path='/analysis' element={<Analysis />} />
      <Route path='/tickers' element={<Tickers />} />
      <Route path='/sector-details/:state' element={<SectorDetails />} />
      <Route path='/ticker-details/:state' element={<TickerDetails />} />
    </Routes>
  );
}

export default App;
