import { useState } from "react";
import "./BootcampProjects.scss";
import DevProject from "./dev_project/DevProject";
import nintendoImg from "../../../../assets/bootcamp_imgs/nintendo/nintendo.png";
import eaImg from "../../../../assets/bootcamp_imgs/ea/ea.png";
import hopOnImg from "../../../../assets/bootcamp_imgs/hopon/hopon_img.png"

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
      task: "Desarrollo del navbar y los menús desplegables sin funcionalidad.",
      gitHub: "https://github.com/milite96/projectNintendo",
      link: "https://ona-nintendo-project.netlify.app/",

    },
    {
      title: "Electronic Arts web replica",
      description:
        "Segundo proyecto en grupo del curso. Réplica con funcionalidad mínima de la página web de Electronic Arts realizada en un grupo de 3 personas. Realizada empleando HTML, CSS y JavaScript. Organización con Trello, control de versiones con GitHub y mediante metodología Agile. Tarea individual: estructura página y estilos compartido con compañeros, funcionalidad carrusel juegos EA Play y otras funcionalidades menores, posteriormente adaptar mis secciones a diferentes dispositivos mediante el uso de media queries.",
      img1: eaImg,
      task: "Desarrollo del banner EA Play en el home y footer. Estructura base de la página EA Play, funcionalidad del carrusel de: últimas recompensas para miembros; y estilo de determinadas secciones. En la página de herramientas parentales estructura, funcionalidad y estilo de las secciones: Comprender los controles en el juego y Sistemas de clasificación de videojuegos",
      gitHub: "https://github.com/EmeBona/EA",
      link: "https://ea-ona.netlify.app/"
    },
    { title: "HopOn!",
        description: "Tercer proyecto en grupo del curso. Programa con funcionalidad total, comparador de precios de transporte con conductor privado. Te permite obtener un presupuesto para realizar un trayecto, ver el trayecto en pantalla, y el precio hipotético en base a un cálculo según empresa, demanda del servicio, clima y distancia. Permite guardar los trayectos en el perfil del usuario de forma temporal y en un futuro nos gustaría que se pudiera reservar el trayecto directamente desde el programa. Compatible con medidas de diferentes dispositivos. Organización con Trello, control de versiones con GitHub y mediante metodología Agile. Tarea individual: Team leader del proyecto. Implementación de APIs de Google Maps y API propia con el cálculo de precio, funcionalidad almacenamiento de destinos y otras funcionalidades menores.",
        img1: hopOnImg,
        task: "Desarrollo de la API propia y la lógica detrás del cálculo de precios. Implementación de la API que renderiza las indicaciones del trayecto y el propio mapa. Estructura y funcionalidad. Desarrollo de la lógica que implementa los viajes guardados en la cuenta del usuario. AVISO: Por motivos de falta de financiación la API de Google Maps está desactivada. Si se quiere ver una demostración del proyecto me pueden contactar y lo organizamos para activarla momentáneamente.",
        gitHub: "https://github.com/OnaBenedi/thirdProject",
        link: "https://hopon-ona.netlify.app"

    },
  ];
  return (
    <div className="bootcamp-projects">
      <h3 onClick={onBootcampClick}>Bootcamp</h3>
      {isShowingBootcamp && (
        <div>
            {bootcampProjects.map((project, index)=>{
                return <div key={index}>
                    <DevProject title={project.title} description={project.description} projectImg={project.img1} mainTask={project.task} gitHub={project.gitHub} link={project.link} />

                </div>
            })}
        </div>
      )}
    </div>
  );
}

export default BootcampProjects;
