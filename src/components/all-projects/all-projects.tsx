import React, { useContext } from "react";
import Switch from 'react-switch';
import { ThemeContext } from "styled-components";
import ProjectsData from "../../data/projects-data";
import {
  ContainerProjects,
  SubContainerProjects,
  SubTitle,
  ContainerAllProjects,
  Project,
  BoxImage,
  Image,
  ContainerTitle,
  SubContainerTitle,
  TitleProject,
  Description,
  Tools,
  SwitchContainer
} from "./styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

interface Props {
  toggleTheme(): void;
}

const AllProjects: React.FC<Props> = ({ toggleTheme }) => {
  const themeContext = useContext(ThemeContext);
  const title = themeContext?.title || 'default';
  const colors = themeContext ? themeContext.colors : { text: "#000" };

  AOS.init();

  return (
    <ContainerProjects id="todosprojetos">
      <SwitchContainer>
        <Switch
          onChange={toggleTheme}
          checked={title === 'light'}
          checkedIcon={false}
          uncheckedIcon={false}
          handleDiameter={20}
          offHandleColor=""
          uncheckedHandleIcon={<FaMoon color='#2E2F31' size={20} />}
          onHandleColor="#DCE0E2"
          offColor="#DCE0E2"
          onColor="#2E2F31"
          activeBoxShadow="0 0 2px 3px #33bbff0"
        />
      </SwitchContainer>
      <SubContainerProjects>
        <SubTitle>Todos os Projetos</SubTitle>
      </SubContainerProjects>

      <ContainerAllProjects>
        {ProjectsData.map((item) => {
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

export default AllProjects;