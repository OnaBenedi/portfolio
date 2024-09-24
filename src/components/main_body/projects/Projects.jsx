import { useState } from "react";
import "./Projects.scss";
import BootcampProjects from "./bootcamp_projects/BootcampProjects";
import PersonalProjects from "./personal_projects/PersonalProjects";

function Projects() {


  return (
    <div className="projects">
      <h2>Projects</h2>
      <BootcampProjects/>
      <PersonalProjects/>
    </div>
  );
}

export default Projects;
