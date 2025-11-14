"use client";

import { ChevronRight, X } from "lucide-react";
import { Navbar } from "@/components/navbar/navbar";
import { useState, useEffect } from "react";

export const Header = () => {
    const [closePopup, setClosePopup] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const savedState = localStorage.getItem('pimjo-assesment') === 'true';
        setClosePopup(savedState);
    }, []);

    const handlePopup = () => {
        localStorage.setItem('pimjo-assesment', 'true');
        setClosePopup(true);
    };
    return (
        <header>
            {isMounted && !closePopup && (
                <div className="flex justify-center relative gap-2 rounded-md bg-gray-200 py-2.5 my-3.5">
                    <div><span className="text-gray-400">We just raised our biggest updates</span> - Brand V3.0🎉</div>
                    <div className="flex items-center pl-2 rounded-xl text-[15px] bg-[#FFFFFF]">
                        Check it out <ChevronRight className="w-4.5"/>
                    </div>
                    <X onClick={() => handlePopup()} className="absolute right-2 text-gray-400 w-5"/>
                </div>
            )}
            <Navbar/>
        </header>
    )
};