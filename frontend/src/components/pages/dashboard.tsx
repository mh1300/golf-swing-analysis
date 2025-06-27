import ParticlesBG from "../particle-bg";
import { NavBar } from "../navBar";

export default function Dashboard() {
  return (
    <ParticlesBG>
      <div className="flex py-2 justify-center items-center">
        <NavBar></NavBar>
      </div>
      
    </ParticlesBG>
  )
}