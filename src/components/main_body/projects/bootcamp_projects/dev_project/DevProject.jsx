import "./DevProject.scss"

function DevProject({title, description, projectImg, mainTask, gitHub}) {
  return (
    <div className="group-projects">
        <h4>{title}</h4>
        <p>{description}</p>
        <h5>Preview del proyecto</h5>
        <img src={projectImg} alt="project-image" />
        <h5>Tarea individual</h5>
        <img src={mainTask} alt="main-task" />
        <a href={gitHub}>GitHub</a>
    </div>
  )
}

export default DevProject