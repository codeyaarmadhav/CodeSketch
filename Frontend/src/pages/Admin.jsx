import React, { useEffect, useState } from "react";
import Title from "../Components/Title.jsx";
import SubTitle from "../Components/SubTitle.jsx";
import axios from "axios";
import {toast} from 'react-toastify'

function Admin() {
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);

  const URL = import.meta.env.VITE_API_URL;

  const getAdminData = async () => {
    try {
      const projects = await axios.get(`${URL}/api/v2/admin/projects`, {
        withCredentials: true,
      });
      const users = await axios.get(`${URL}/api/v2/admin/users`, {
        withCredentials: true,
      });
      if (users.data.success) {
        //console.log(users.data.users);
        setUsers(users.data.users);
      } else {
        console.log("Error fetching users");
      }
      if (projects.data.success) {
        //console.log(projects.data.projects);
        setProjects(projects.data.projects);
      } else {
        console.log("Error fetching projects");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => getAdminData, []);
  //user activity

  const handleActive = async (userId, active) => {
    //console.log(userId, active);
    try {
      const response = await axios.post(`${URL}/api/v2/admin/deactiveuser`, {userId, active}, {withCredentials:true});
      if (response.data.success) {
        toast.success(response.data.message);
        getAdminData();
      } else {
        toast.error(response.data.message);
      }
    } catch(e){
      console.log(e);
    }
  }

  const handlePlan = async (userId, plan) => {
    try {
      const isStandard = plan === "standard" ? true : false;
      //console.log(userId, isStandard);
      const response = await axios.post(`${URL}/api/v2/admin/changeplan`, {userId, isStandard}, {withCredentials:true});
      if (response.data.success) {
        toast.success(response.data.message);
        getAdminData();
      } else {
        toast.error(response.data.message);
      }
    } catch(e){
      console.log(e);
    }
  }

  return (
    <div>
      <Title text1={"Admin"} text2={"Panel"} />

      <div className="flex w-full flex-col sm:flex-row gap-5 ">
        <div className="w-full rounded-lg border border-gray-400 p-5 pr-2">
          <SubTitle text1={"Recently added Projects"} />
          <div className="h-[50vh] sm:h-[70vh] overflow-y-scroll">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row justify-between items-center border border-gray-200 shadow-md p-4 my-2 rounded-md mr-5 h-[18vh]"
              >
                <div className="flex justify-between items-center w-full">
                  <div className="text-xs sm:text-sm">
                    <h1>User: {project.user.username}</h1>
                    <p>Project: {project.type}</p>
                    <p>Created At: {project.createdAt.slice(0, 10)}</p>
                  </div>
                  <div className="max-w-[50%]">
                    <img src={`https://www.plantuml.com/plantuml/png/${project.data}`} className="h-[12vh]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full rounded-lg border border-gray-400 p-5 pr-2">
          <SubTitle text1={"List of Users"} />
          <div className="h-[50vh] sm:h-[70vh] overflow-y-scroll">
            {users.map((user, index) => (
              <div
                key={index}
                className="flex flex-col justify-between items-center bg-[#f2f2f2] p-4 my-2 rounded-md mr-5 h-[18vh]"
              >
                <h1 className="text-lg font-semibold">User: {user.username}</h1>
                <p className="text-gray-500">Email: {user.email}</p>

                <div className="flex gap-5">
                  <button onClick={() => handleActive(user._id, user.active)} className="bg-[#a0a7ac] text-white text-xs md:text-sm rounded py-1 px-2 cursor-pointer">{user.active? "Deactive" : "Active"}</button>
                  <button onClick={() => handlePlan(user._id, user.plan)} className="bg-[#a0a7ac] text-white text-xs md:text-sm rounded py-1 px-2 cursor-pointer">{user.plan === "basic" ? "To Standard" : "To Basic"}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
