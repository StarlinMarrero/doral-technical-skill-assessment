import React, { useEffect, useState } from "react";
import localStorageHelper from "../../helpers/localStorage.helper";

const Navbar = () => {
    const themeSelected = localStorageHelper.getItem("theme") || "light";
    const [currentTheme, setCurrentTheme] = useState<"light" | "dark">(themeSelected);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", currentTheme);
        localStorageHelper.setItem("theme", currentTheme);
    }, [currentTheme]);

    const toggleTheme = () => {
        const newTheme = currentTheme === "light" ? "dark" : "light";
        setCurrentTheme(newTheme);
    };

    return (
        <div className="navbar sticky top-0 bg-base-100 z-10 shadow-md">
            <a className="btn btn-ghost text-xl">Wikipedia Feeds</a>
            <div className="flex-1"></div>
            <button className="btn btn-ghost" onClick={toggleTheme}>
                <span>{currentTheme === "light" ? "🌙" : "☀️"}</span>
            </button>
        </div>
    );
};

export default Navbar;
