import React, { useContext, useRef, useState } from "react";
import { ThemeContext } from "styled-components";
import ProjectsDataMain from "../../data/projects-data-main";
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
  ToolsPlatformContainer,
  Tools,
  ButtonContainer,
  ButtonSeeAll,
  Platform,
} from "./styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

interface Props {
  toggleTheme(): void;
}

const Projects: React.FC<Props> = () => {
  const themeContext = useContext(ThemeContext);
  const colors = themeContext ? themeContext.colors : { text: "#000" };
  const [toggleProjects, setToggleProjects] = useState(false);
  const [closing, setClosing] = useState(false);
  const projectRef = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const numberOfProjects = toggleProjects
    ? Math.min(ProjectsDataMain.length, 8)
    : 3;
  const navigate = useNavigate();

  AOS.init();

  function seeMore() {
    if (toggleProjects) {
      setClosing(true);
      setTimeout(() => {
        setToggleProjects(false);
        setClosing(false);
        if (projectRef.current[3]) {
          projectRef.current[3].scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    } else {
      setToggleProjects(true);
    }
  }

  function seeAll() {
    // navigate("/all-projects");
    window.location.href = "https://www.joaopedrovolponi.com/all-projects";
  }

  return (
    <ContainerProjects id="projetos">
      <SubContainerProjects>
        <SubTitle>Projetos pessoais</SubTitle>
      </SubContainerProjects>

      <ContainerAllProjects className={closing ? "fade-out" : ""}>
        {ProjectsDataMain.slice(0, numberOfProjects).map((item, index) => {
          const { id, img, title, description, tool, link, github, platform } = item;
          return (
            <Project
              key={id}
              data-aos="zoom-in"
              ref={(el) => (projectRef.current[id] = el)}
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
              <ToolsPlatformContainer>
                <Tools>{tool}</Tools>
                <Platform>{platform}</Platform>
              </ToolsPlatformContainer>
            </Project>
          );
        })}
      </ContainerAllProjects>

      <ButtonContainer>
        <ButtonSeeMore onClick={seeMore}>
          <TextSeeMore>{toggleProjects ? "Ver menos" : "Ver mais"}</TextSeeMore>
        </ButtonSeeMore>

        <ButtonSeeAll onClick={seeAll}>
          <TextSeeMore>Ver todos</TextSeeMore>
        </ButtonSeeAll>
      </ButtonContainer>
    </ContainerProjects>
  );
};

export default Projects;