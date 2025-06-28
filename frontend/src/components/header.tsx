import { NavBar } from "@/components/navBar";
import { Atom } from "lucide-react";
import { Link } from "react-router-dom";
import UserDropdown from "./userDropdown";

export default function Header() {
  return (
      <div className="grid grid-cols-3 px-3 py-2 w-full">
        <Link to={"/dashboard"} className="flex items-center space-x-1">
          <Atom className="text-[var(--gradient-start)]" />
          <text className="logo-title">
            Quantum Golf
          </text>
        </Link>

        <div className="flex justify-center items-center">
            <NavBar />
        </div>
        
        <div className="flex justify-end">
            <UserDropdown />
        </div>
      </div>
  )
}