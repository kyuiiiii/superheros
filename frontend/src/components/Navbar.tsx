import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Logout from "./Logout";

const Navbar: React.FC = () => {
    const {authUser}=useAuth()
    

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 0) {
            setSticky(true);
        } else {
            setSticky(false);
        }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  return (
    <div className={`max-w-screen-2x1 container mx-auto md:px-20 px-4" fixed top-0 left-0 right-0 z-50 ${
        sticky
            ? "sticky-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out"
            : ""
        }`}
        >
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <a>Add Hero</a>
                </li>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
            </ul>
            </div>
            <a className="text-2xl font-bold">SuperHeroes</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/dashboard">
                    Dashboard
                </Link>
            </li>
            <li>
                <Link to="/addhero">
                    Add Hero
                </Link>
            </li>
            <li>
                <Link to="/about">
                    About
                </Link>
            </li>
            
            </ul>
        </div>
        
        <div className="navbar-end">
            {authUser ? (
                <Logout/>
        
            ):(
            <Link to="/login" className="btn">
                Login
            </Link>
            )}
        </div>
        
        </div>
    </div>
  );
};

export default Navbar;
