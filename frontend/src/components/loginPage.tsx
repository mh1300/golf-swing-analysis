import { useState } from "react";
import LoginForm from "./loginForm";
import SignupForm from "./signupForm";
import CreateOverlay from "./createOverlay";
import LoginOverlay from "./loginOverlay";

export default function LoginPage() {
    const [isAnimated, setIsAnimated] = useState(false);

    return (
        <div className="h-1/2 w-4/5 relative overflow-hidden rounded-lg">
            <div
                id="login"
                className={`p-10 bg-glass border-4 border-r-0 absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out z-20 ${isAnimated ? "translate-x-full opacity-0" : ""}`}
            >
                <LoginForm />
            </div>
            <div
                id="signup"
                className={`p-10 bg-glass border-4 border-l-0 absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out ${isAnimated
                        ? "translate-x-full opacity-100 z-50"
                        : "opacity-0 z-10"
                    }`}
            >
                <SignupForm />
            </div>
            <div
                id="overlay-container"
                className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-700 ease-in-out z-100 ${isAnimated ? "-translate-x-full" : ""
                    }`}
            >
                <div
                    id="overlay"
                    className={`bg-overlay relative -left-full h-full w-[200%] transform transition-transform duration-700 ease-in-out ${isAnimated ? "translate-x-1/2" : "translate-x-0"
                        }`}
                >
                    <div
                        id="overlay-left"
                        className={`w-1/2 h-full absolute flex justify-center items-center top-0 transform -translate-x-[20%] transition-transform duration-700 ease-in-out ${isAnimated ? "translate-x-0" : "-translate-x-[20%]"
                            }`}
                    >
                        <LoginOverlay
                            isAnimated={isAnimated}
                            setIsAnimated={setIsAnimated}
                        />
                    </div>
                    <div
                        id="overlay-right"
                        className={`w-1/2 h-full absolute flex justify-center items-center top-0 right-0 transform transition-transform duration-700 ease-in-out ${isAnimated ? "translate-x-[20%]" : "translate-x-0"
                            }`}
                    >
                        <CreateOverlay
                            isAnimated={isAnimated}
                            setIsAnimated={setIsAnimated}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}