import { useState } from "react";
import "./PersonalProjects.scss";
import MyProject from "./my_project/MyProject";
import piedraImg from "../../../../assets/personalpr_imgs/first/piedrapapeltijera.png"
import monstylandImg from "../../../../assets/personalpr_imgs/monstyland/monstyland.png"

function PersonalProjects() {
  const [isShowingPersonal, setIsShowingPersonal] = useState(false);

  function onPersonalClick() {
    setIsShowingPersonal(!isShowingPersonal);
  }

  const personalProjects = [
    {
        title: "Piedra, papel, tijera",
        description: "Pequeño juego de Piedra, papel o tijera desarrollado con un html muy básico y funcionalidad de JavaScript que funciona a través de alertas del navegador. Mi primer proyecto realizado en octubre de 2023.",
        img1: piedraImg,
        gitHub: "https://github.com/OnaBenedi/piedrapapeltijera",
        link: "https://ona-first-project.netlify.app"
    },
    {
        title: "Monstyland",
        description: "Proyecto Monkepon del curso gratuito de Platzi. En desarrollo, frenado por haber empezado un Bootcamp de Full Stack Developer. Desarrollado usando HTML, CSS y JavaScript. Pequeño juego de combates entre criaturas de diferentes tipos. Idealmente me gustaría añadirle mis propios diseños.",
        img1: monstylandImg,
        gitHub: "https://github.com/OnaBenedi/monstyland",
        link: "https://monstyland-ona.netlify.app/"
    },
    {
        title: "Portfolio",
        description: "Este portfolio ha sido desarrollado mediante ReactJS y estilizado con SASS.",
        gitHub: "",
    }
  ]
  return (
    <div className="personal-projects">
      <h3 onClick={onPersonalClick}>Personal</h3>
      {isShowingPersonal && (
        <div>
          {personalProjects.map((project, index) => {
            return (
              <div key={index}>
                <MyProject
                  title={project.title}
                  description={project.description}
                  projectImg={project.img1 ? project.img1 : null}

                  gitHub={project.gitHub}
                   link={project.link? project.link : null}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default PersonalProjects;
