import React, { useContext, useRef, useState } from "react";
import { ThemeContext } from "styled-components";
import ProjectsData from "../../data/projects-data";
import {
  ContainerProjects,
  SubContainerProjects,
  SubTitle,
  ButtonSeeMore,
  TextSeeMore,
  ContainerAllProjects,
  Project,
  BoxImage,
  Image,
  ContainerTitle,
  SubContainerTitle,
  TitleProject,
  Description,
  Tools,
} from "./styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

interface Props {
  toggleTheme(): void;
}

const Projects: React.FC<Props> = () => {
  const themeContext = useContext(ThemeContext);
  const colors = themeContext ? themeContext.colors : { text: "#000" };
  const [toggleProjects, setToggleProjects] = useState(false);
  const [closing, setClosing] = useState(false);
  const lastProjectRef = useRef<HTMLDivElement | null>(null);
  const numberOfProjects = toggleProjects ? ProjectsData.length : 3;

  AOS.init();

  function seeMore() {
    if (toggleProjects) {
      setClosing(true);
      setTimeout(() => {
        setToggleProjects(false);
        setClosing(false);
        if (lastProjectRef.current) {
          lastProjectRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    } else {
      setToggleProjects(true);
    }
  }

  return (
    <ContainerProjects id="projetos">
      <SubContainerProjects>
        <SubTitle>Projetos pessoais</SubTitle>
      </SubContainerProjects>

      <ContainerAllProjects className={closing ? 'fade-out' : ''}>
        {ProjectsData.slice(0, numberOfProjects).map((item, index) => {
          const { id, img, title, description, tool, link, github } = item;
          const isLastProject = index === numberOfProjects - 1;
          return (
            <Project
              key={id}
              data-aos="zoom-in"
              ref={isLastProject ? lastProjectRef : null}
            >
              <BoxImage>
                <Image src={img} />
              </BoxImage>

              <ContainerTitle>
                <TitleProject>{title}</TitleProject>
                <SubContainerTitle>
                  {github && github.trim() && (
                    <a target="blank" href={github}>
                      <AiFillGithub color={colors.text} size={25} />
                    </a>
                  )}
                  {link && link.trim() && (
                    <a target="blank" href={link}>
                      <FiExternalLink color={colors.text} size={25} />
                    </a>
                  )}
                </SubContainerTitle>
              </ContainerTitle>

              <Description>{description}</Description>
              <Tools>{tool}</Tools>
            </Project>
          );
        })}
      </ContainerAllProjects>

      <ButtonSeeMore onClick={seeMore}>
        <TextSeeMore>{toggleProjects ? "Ver menos" : "Ver mais"}</TextSeeMore>
      </ButtonSeeMore>
    </ContainerProjects>
  );
};

export default Projects;