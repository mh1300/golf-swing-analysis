import { Button } from "./ui/button";
import React from "react";

interface CreateOverlayProps {
    isAnimated: boolean;
    setIsAnimated: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CreateOverlay(props: CreateOverlayProps) {
    return (
        <div className="text-center">
            <h1 className="overlay-header py-10">Don't have an account?</h1>
            <Button
                className="py-3 px-6 bg-transparent rounded-full text-center text-white text-xl font-bold uppercase ring-2 ring-white active:scale-110 transition-transform ease-in"
                onClick={() => {
                    props.setIsAnimated(!props.isAnimated);
                }}
            >
                Sign Up
            </Button>
        </div>
    )
}