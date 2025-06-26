import { useState } from "react";
import LoginForm from "./loginForm";
import SignupForm from "./signupForm";
import CreateOverlay from "./createOverlay";
import LoginOverlay from "./loginOverlay";
import { set } from "zod/v4-mini";

export default function LoginPage() {
    const [isAnimated, setIsAnimated] = useState(false);

    return (
        <div
            id="loginPage"
            className="h-1/2 w-4/5 relative  rounded-lg"
        >
            <div
                id="loginForm"
                className={`p-10 bg-glass absolute w-1/2 left-0 top-0 h-full border-6 border-r-0 flex justify-center items-center transition-all duration-700 ease-in-out ${isAnimated ? "translate-x-full opacity-0" : ""}`}
            >
                <LoginForm />
            </div>
            <div
                id="signupForm"
                className={`p-10 bg-glass absolute w-1/2 left-0 top-0 h-full border-6 border-l-0 flex justify-center items-center transition-all duration-700 ease-in-out ${isAnimated ? "translate-x-full" : "opacity-0"}`}
            >
                <SignupForm />
            </div>
            <div
                id="overlay-container"
                className={`absolute w-1/2 h-full top-0 right-0 overflow-hidden transition-transform duration-700 ease-in-out ${isAnimated ? "-translate-x-full" : ""}`}
            >
                <div
                    id="overlay"
                    className={`bg-overlay relative w-[200%] h-full top-0 right-full transition-transform duration-700 ease-in-out ${isAnimated ? "translate-x-1/2" : ""}`}
                >
                    <div
                        id="createOverlay"
                        className={`w-1/2 h-full absolute flex justify-center items-center top-0 right-0 transition-transform duration-700 ease-in-out ${isAnimated ? "translate-x-[20%]" : ""}`}
                    >
                        <CreateOverlay
                            isAnimated={isAnimated}
                            setIsAnimated={setIsAnimated}
                        />
                    </div>
                    <div
                        id="loginOverlay"
                        className={`w-1/2 h-full absolute flex justify-center items-center top-0 left-0 transition-transform duration-700 ease-in-out ${isAnimated ? "" : "-translate-x-[20%]"}`}
                    >
                        <LoginOverlay
                            isAnimated={isAnimated}
                            setIsAnimated={setIsAnimated}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}