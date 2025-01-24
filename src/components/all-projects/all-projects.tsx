import React, { useContext, useEffect, useState } from "react";
import Switch from "react-switch";
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
  SwitchContainer,
  BackButtonContainer,
  BackButton,
  FilterButtonContainer,
  FilterButton,
} from "./styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiExternalLink, FiArrowLeft } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface Props {
  toggleTheme(): void;
}

const AllProjects: React.FC<Props> = ({ toggleTheme }) => {
  const themeContext = useContext(ThemeContext);
  const title = themeContext?.title || "default";
  const colors = themeContext ? themeContext.colors : { text: "#000" };
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string | null>(null);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [themeContext]);

  const handleBackClick = () => {
    navigate("/projects");
  };

  const filteredProjects = filter
    ? ProjectsData.filter((project) => project.platform === filter)
    : ProjectsData;

  return (
    <ContainerProjects id="todosprojetos">
      <SwitchContainer>
        <Switch
          onChange={toggleTheme}
          checked={title === "light"}
          checkedIcon={false}
          uncheckedIcon={false}
          handleDiameter={20}
          offHandleColor=""
          uncheckedHandleIcon={<FaMoon color="#2E2F31" size={20} />}
          onHandleColor="#DCE0E2"
          offColor="#DCE0E2"
          onColor="#2E2F31"
          activeBoxShadow="0 0 2px 3px #33bbff0"
        />
      </SwitchContainer>
      <BackButtonContainer>
        <BackButton onClick={handleBackClick}>
          <FiArrowLeft size={30} color={colors.text} />
        </BackButton>
      </BackButtonContainer>
      <SubContainerProjects>
        <SubTitle>Quais projetos você gostaria de ver?</SubTitle>
      </SubContainerProjects>

      <FilterButtonContainer>
        <FilterButton onClick={() => setFilter("mobile")}>Mobile</FilterButton>
        <FilterButton onClick={() => setFilter("web")}>Web</FilterButton>
        <FilterButton onClick={() => setFilter(null)}>Todos</FilterButton>
      </FilterButtonContainer>

      <ContainerAllProjects>
        {filteredProjects.map((item) => {
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