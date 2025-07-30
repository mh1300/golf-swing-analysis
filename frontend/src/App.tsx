import { Routes, Route } from 'react-router-dom';
import Dashboard from "./components/pages/dashboard";
import LoginPage from "./components/pages/loginPage";
import SwingBreakdown from './components/swingBreakdown';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/swing/breakdown" element={<SwingBreakdown />} />
    </Routes>

  )
};

export default App;