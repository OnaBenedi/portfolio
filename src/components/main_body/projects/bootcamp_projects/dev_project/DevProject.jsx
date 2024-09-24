import "./DevProject.scss"
import { useState } from "react";

function DevProject({title, description, projectImg, mainTask, gitHub, link, }) {
  const [isProjectShowing, setIsProjectShowing] = useState(false)

  function openProject(){
    setIsProjectShowing(!isProjectShowing)
  }
  return (
    <div className="group-projects">
        <h4 onClick={openProject}>{title}</h4>
        {isProjectShowing ? <div>
          <p>{description}</p>
        <h5>Preview del proyecto</h5>
        <img src={projectImg} alt="project-image" />
        <h5>Tarea individual</h5>
        <p>{mainTask}</p>
        <a href={gitHub}>GitHub</a>
        <a href={link}>Link to the project</a>
        </div> : null}

    </div>
  )
}

export default DevProject