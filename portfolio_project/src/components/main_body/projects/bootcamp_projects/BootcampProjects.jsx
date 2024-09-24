import { useState } from "react";
import "./BootcampProjects.scss";
import DevProject from "./dev_project/DevProject";
import nintendoImg from "../../../../assets/bootcamp_imgs/nintendo/nintendo.png";
import nintendoMenu from "../../../../assets/bootcamp_imgs/nintendo/menus.png";
import eaImg from "../../../../assets/bootcamp_imgs/ea/ea.png";
import eaTask from "../../../../assets/bootcamp_imgs/ea/task.png";
import hopOnImg from "../../../../assets/bootcamp_imgs/hopon/hopon_img.png"
import hopOnTask from "../../../../assets/bootcamp_imgs/hopon/task.png"
function BootcampProjects() {
  const [isShowingBootcamp, setIsShowingBootcamp] = useState(false);

  function onBootcampClick() {
    setIsShowingBootcamp(!isShowingBootcamp);
  }

  const bootcampProjects = [
    {
      title: "Nintendo web replica",
      description:
        "Primer proyecto en grupo del curso. Réplica sin funcionalidad de la página web de Nintendo.com realizada en un grupo de 7 personas. Realizada empleando HTML y CSS. Organización con Trello, control de versiones con GitHub y mediante metodología Agile. Tarea individual: Replicar los menús desplegables del navbar y posteriormente adaptarlos a diferentes dispositivos mediante el uso de media queries.",
      img1: nintendoImg,
      img2: nintendoMenu,
      gitHub: "https://github.com/milite96/projectNintendo",
    },
    {
      title: "Electronic Arts web replica",
      description:
        "Segundo proyecto en grupo del curso. Réplica con funcionalidad mínima de la página web de Electronic Arts realizada en un grupo de 3 personas. Realizada empleando HTML, CSS y JavaScript. Organización con Trello, control de versiones con GitHub y mediante metodología Agile. Tarea individual: estructura página y estilos compartido con compañeros, funcionalidad carrusel juegos EA Play y otras funcionalidades menores, posteriormente adaptar mis secciones a diferentes dispositivos mediante el uso de media queries.",
      img1: eaImg,
      img2: eaTask,
      gitHub: "https://github.com/EmeBona/EA",
    },
    { title: "HopOn!",
        description: "Tercer proyecto en grupo del curso. Programa con funcionalidad total, comparador de precios de transporte con conductor privado. Te permite obtener un presupuesto para realizar un trayecto, ver el trayecto en pantalla, y el precio hipotético en base a un cálculo según empresa, demanda del servicio, clima y distancia. Permite guardar los trayectos en el perfil del usuario de forma temporal y en un futuro nos gustaría que se pudiera reservar el trayecto directamente desde el programa. Compatible con medidas de diferentes dispositivos. Organización con Trello, control de versiones con GitHub y mediante metodología Agile. Tarea individual: Team leader del proyecto. Implementación de APIs de Google Maps y API propia con el cálculo de precio, funcionalidad almacenamiento de destinos y otras funcionalidades menores.",
        img1: hopOnImg,
        img2: hopOnTask,
        gitHub: "https://github.com/OnaBenedi/thirdProject"

    },
  ];
  return (
    <div className="bootcamp-projects">
      <h3 onClick={onBootcampClick}>Bootcamp</h3>
      {isShowingBootcamp && (
        <div>
            {bootcampProjects.map((project, index)=>{
                return <div key={index}>
                    <DevProject title={project.title} description={project.description} projectImg={project.img1} mainTask={project.img2} gitHub={project.gitHub}/>
                    <hr />
                </div>
            })}
        </div>
      )}
    </div>
  );
}

export default BootcampProjects;
