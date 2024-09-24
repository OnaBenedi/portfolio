import { useState } from "react";
import "./MyProject.scss";

function MyProject({ title, description, projectImg, gitHub, link }) {
  const [isProjectShowing, setIsProjectShowing] = useState(false);

  function openProject() {
    setIsProjectShowing(!isProjectShowing);
  }
  return (
    <div className="personal-projects">
      <h4 onClick={openProject}>{title}</h4>
      {isProjectShowing ? (
        <>
          <p>{description}</p>
          {projectImg ? (
            <>
              <h5>Preview del proyecto</h5>
              <img src={projectImg} alt="project-image" />
            </>
          ) : null}
          <a href={gitHub}>GitHub</a>
          {link ? <a href={link}>Link to the project</a> : null}{" "}
        </>
      ) : null}
    </div>
  );
}

export default MyProject;
