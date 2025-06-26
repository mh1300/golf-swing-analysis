import ParticlesBG from "./components/particle-bg";
import LoginPage from "./components/loginPage";

function App() {
  return (
    <ParticlesBG>
      <div className="flex h-screen p-1 justify-center items-center">
        <LoginPage/>
      </div>
    </ParticlesBG>
  )
};

export default App;