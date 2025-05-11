import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink, useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

function Navbar() {
  let [visible, setVisible] = useState(false);
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  //const URL = "http://localhost:8080";
  const URL = import.meta.env.VITE_API_URL;

  async function handleLogout(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${URL}/api/v2/auth/logout`,
        {},
        { withCredentials: true }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setIsLoggedIn(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function handleMe(){
    try {
      const response = await axios.get(
        `${URL}/api/v2/auth/me`,
        { withCredentials: true }
      );
      if(!response.data.success) {
        navigate("/login");
      } else {
        setIsLoggedIn(true);
      }

    } catch (err) {
      console.log(err);
      toast.error("Internal error occured");
    }
  }

  function handleSearch(){
    navigate("/create");
  }

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img className="w-24 sm:w-30 " src={assets.newlogo} alt="" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col group items-center gap-1 pt-2">
          <p>HOME</p>
          <hr className="w-2/4 group-hover:w-3/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/create" className="flex flex-col items-center gap-1 pt-2">
          <p>CREATE</p>
          <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink
          to="/projects"
          className="flex flex-col items-center gap-1 pt-2"
        >
          <p>PROJECTS</p>
          <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1 pt-2">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink
          to="/contact"
          className="flex flex-col items-center gap-1 pt-2"
        >
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6 ">
        <img onClick={handleSearch} className="w-5 cursor-pointer" src={assets.search_icon} alt="" />

        <div className="group relative" onClick={handleMe}>
          <img 
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt=""
          />

          <div className={`hidden ${ isLoggedIn? "group-hover:block" : "group-hover:hidden"} group-hover:block absolute dropdown-menu right-0 pt-4`}>
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <Link to="/projects"><p className="hover:text-black cursor-pointer">Projects</p></Link>
              <p
                className="hover:text-black cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </p>
            </div>
          </div>
        </div>

        <img
          onClick={() => setVisible(true)}
          className="sm:hidden w-5 cursor-pointer"
          src={assets.menu_icon}
          alt=""
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute right-0 bottom-0 top-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Menu</p>
          </div>

          <NavLink
            onClick={() => setVisible(flase)}
            className="pl-6 py-2 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(flase)}
            className="pl-6 py-2 border"
            to="/create"
          >
            CREATE
          </NavLink>
          <NavLink
            onClick={() => setVisible(flase)}
            className="pl-6 py-2 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(flase)}
            className="pl-6 py-2 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;