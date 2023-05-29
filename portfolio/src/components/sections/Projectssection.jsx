import { FaDownload, FaGithub } from "react-icons/fa";
import { Project } from "../../data/Projets";
import { Sectionheadin } from "../styles/common/Sectionheadin.styled";
import {
  Projectdescr,
  ProjectimageC,
  Singleproj,
  Styledprojectsection,
  Tags,
} from "../styles/sections/Projectsection.styled";

export const Projectsection = () => {
  return (
    <>
      <hr />
      <Styledprojectsection id="projects">
        <Sectionheadin>
          <h1>MES PROJETS</h1>
        </Sectionheadin>
        <div>
          {Project &&
            Project.map((project, index) => (
              <Singleproj key={index} href={project.link} target="_blank">
                <ProjectimageC>
                  <img src={project.thumbnail} alt={project.title} />
                </ProjectimageC>
                <Projectdescr>
                  <h1>{project.title}</h1>
                  <Tags>
                    {project.tags &&
                      project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex}>{tag}</span>
                      ))}
                  </Tags>
                  <p>{project.paragraph}</p>
                  <div>
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <FaGithub />
                      <span>Jetter un coup d'oeil ?</span>
                    </a>
                    <a
                      href={project.href}
                      download={project.download}
                      rel="noopener noreferrer"
                    >
                      <FaDownload />
                      <span>Télecharger le projet</span>
                    </a>
                  </div>
                </Projectdescr>
              </Singleproj>
            ))}
        </div>
      </Styledprojectsection>
    </>
  );
};
