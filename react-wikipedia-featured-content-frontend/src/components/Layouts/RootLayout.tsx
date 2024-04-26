import React from "react";
import Navbar from "../Navbar/Navbar";

interface IRootLayoutProps {
    children: React.ReactNode;
}

export const RootLayout = ({ children }: IRootLayoutProps) => {
    return (
        <>
            <Navbar />

            <div style={{ minHeight: "calc(100vh - 4rem)" }} className="h-full flex-1 md:pt-4 pt-4 px-6 bg-base-200">
                {children}
            </div>
        </>
    );
};

export default RootLayout;
