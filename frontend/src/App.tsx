import LoginPage from "./components/pages/loginPage";
import { Routes, Route } from 'react-router-dom';
import Dashboard from "./components/pages/dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>

  )
};

export default App;