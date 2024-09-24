import { useState } from "react";
import "./Projects.scss";
import BootcampProjects from "./bootcamp_projects/BootcampProjects";

function Projects() {
  const [isShowingPersonal, setIsShowingPersonal] = useState(false);

  return (
    <div className="projects">
      <h2>Projects</h2>
      <BootcampProjects/>
      <div className="personal-projects">
        <h3>Personal:</h3>
        <div>
          <h4>Piedra, papel, tijera</h4>
        </div>
        <div>
          <h4>Monstyland</h4>
        </div>
        <div>
          <h4>Portfolio</h4>
        </div>
      </div>
    </div>
  );
}

export default Projects;
