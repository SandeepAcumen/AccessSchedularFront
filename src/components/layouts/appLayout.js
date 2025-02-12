import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { formatString } from "../helper/helper"

const AppLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname.split('/')[1] || "Home";
    return (
        <div className="flex w-full">

            <div
                className={`transition-all duration-300 flex-1 overflow-y-auto bg-background`}
            >
                <header className="fixed w-full top-0 bg-gradient-to-r from-gradientColorFrom to-gradientColorTo border-b border-white-600 text-primaryText shadow-md p-4 z-40">
                    <div className="mx-auto flex items-center justify-between">
                        <h1 className="text-xl font-bold">{formatString(currentPath)}</h1>
                    </div>
                </header>
                <div className="min-h-screen pt-16">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AppLayout;