import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { formatString } from "../helper/helper";
import logo from "../../assets/images/acumen_velocity_logo.jpg"

const AppLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname.split('/')[1] || "Home";
    const companyName = "Microsoft Access Migrate";
    return (
        <div className="flex w-full">

            <div
                className={`transition-all duration-300 flex-1 overflow-y-auto bg-background`}
            >
                <header className="fixed w-full top-0 bg-gradient-to-r from-gradientColorFrom to-gradientColorTo border-b border-white-600 text-primaryText shadow-md p-4 z-40">
                    <div className="mx-auto flex items-center gap-4">
                        <img
                            src={logo}
                            alt="Company Logo"
                            className="object-cover rounded"
                            // width={40}
                            style={{ height: '40px', width: '40px' }}
                        />
                        <h1 className="text-xl font-bold">{companyName}</h1>
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