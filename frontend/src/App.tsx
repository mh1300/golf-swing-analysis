import ParticlesBG from "./components/particle-bg";
import LoginPage from "./components/loginPage";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <ParticlesBG>
          <div className="flex h-screen p-1 justify-center items-center">
            <LoginPage />
          </div>
        </ParticlesBG>
      }/>
    </Routes>

  )
};

export default App;