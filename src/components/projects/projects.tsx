import React, { useContext, useState } from "react";
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

  AOS.init();
  const [controller, setController] = useState(false);

  function seeMore() {
    setController(!controller);
  }
  let teste;

  if (controller == true) {
    teste = Infinity;
  } else {
    teste = 3;
  }

  return (
    <ContainerProjects id="projetos">
      <SubContainerProjects>
        <SubTitle>Projetos pessoais</SubTitle>

        <ButtonSeeMore onClick={seeMore}>
          <TextSeeMore>{controller ? "Ver menos" : "Ver mais"}</TextSeeMore>
        </ButtonSeeMore>
      </SubContainerProjects>

      <ContainerAllProjects>
        {ProjectsData.slice(0, teste).map((item) => {
          const { id, img, title, description, tool, link, github } = item;
          return (
            <Project key={id} data-aos="zoom-in">
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
    </ContainerProjects>
  );
};

export default Projects;
