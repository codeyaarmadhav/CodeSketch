import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import Title from "../Components/Title";
import SubTitle from "../Components/SubTitle";
import { handleDownload } from "../utils/helper";

function UserProjects() {
  const [projects, setProjects] = useState([]);
  const URL = "http://localhost:8080";
  const navigate = useNavigate();

  async function getUserProjects() {
    try {
      const response = await axios.get(`${URL}/api/v2/project/user`, {
        withCredentials: true,
      });
      console.log(response);

      if (response.data.success) {
        return setProjects(response.data.projects);
      } else if (response.data.message === "Please login for access") {
        toast.error("Please login to access your projects");
        navigate("/login");
        return;
      }
      toast.error("Error! Try again later");
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getUserProjects();
  }, []);

  const handleDelete = async (id) => { 
    //console.log(id);
    try {
      const response = await axios.delete(`${URL}/api/v2/project/${id}`, {
        withCredentials: true,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        setProjects((prevProjects) =>
          prevProjects.filter((project) => project._id !== id)
        );
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("Failed to delete project. Try again later.");
    }
  }

  return (
    <div>
      <Title text1={"Saved"} text2={"Projects"} />

      <div className="">
        {projects.map((project, index) => (
          <div
            key={index}
            className=" rounded-xl overflow-hidden shadow-lg bg- border border-gray-100 hover:shadow-xl transition-shadow mb-6 sm:mb-10 sm:mx-2 text-sm w-full flex flex-col sm:flex-row sm:items-center justify-between"
          >
            <div className="p-4 sm:p-3 pb-0 sm:pl-10 sm:w-1/2 gap-2 flex flex-col items-start justify-around">
              <div className="gap-2 sm:gap-4 flex flex-col justify-between items-start">
                <h2 className="text-lg font-semibold mb-2 text-gray-800 leading-4">
                  {project.type ? project.type : "Project"}
                </h2>

                <div className="flex flex-row gap-2">
                  <button onClick={() => handleDelete(project._id)} className="bg-[#a0a7ac] text-white text-xs md:text-sm rounded py-1 px-2 cursor-pointer">
                    Delete Project
                  </button>
                  <button onClick={() => handleDownload(`https://www.plantuml.com/plantuml/png/${project.data}`)} className="cursor-pointer bg-[#a0a7ac] text-white text-xs md:text-sm rounded py-1 px-2">
                    Download Project
                  </button>
                </div>
              </div>

              <h4 className="text-gray-400">
                Created at {project.createdAt.slice(0, 10)}
              </h4>
            </div>

            <div className="sm:w-2/5 flex justify-center items-center py-2">
              <img
                className="h-30 sm:h-40 object-cover"
                src={`https://www.plantuml.com/plantuml/png/${project.data}`}
                alt={"umldiagram"}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserProjects;
