import {
  ContainerAbout,
  Image,
  SubContainerAbout,
  SubTitle,
  Description,
  ContainerButtons,
  DownloadCvButton,
  TextButton,
} from "./styles";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import aboutLight from "../../assets/images/about/about-light.png";
import abourtDark from "../../assets/images/about/about-dark.png";

interface Props {
  toggleTheme(): void;
}

const About: React.FC<Props> = () => {
  const theme = useContext(ThemeContext);

  const imageSrc =
    (theme?.title ?? "light") === "light" ? aboutLight : abourtDark;

  return (
    <ContainerAbout id="sobre">
      <Image src={imageSrc} alt="João Pedro Volponi" />

      <SubContainerAbout>
        <SubTitle>Sobre mim</SubTitle>

        <Description>
          Engenheiro de Software com vasta experiência em desenvolvimento de
          aplicações robustas e escaláveis.
        </Description>
        <Description>
          Atualmente, atuo como desenvolvedor iOS no Itaú Unibanco, onde
          contribuo para a criação de soluções inovadoras e de alta qualidade
          para o setor financeiro.
        </Description>
        <Description>
          Tenho um forte foco em aprender novas tecnologias e aprimorar minhas
          habilidades existentes. Acredito na importância do aprendizado
          contínuo e na evolução constante, buscando sempre agregar valor em
          tudo o que faço.
        </Description>

        <ContainerButtons>
          <DownloadCvButton href={"/cv.pdf"} download="cv.pdf">
            <TextButton>Download CV</TextButton>
          </DownloadCvButton>
        </ContainerButtons>
      </SubContainerAbout>
    </ContainerAbout>
  );
};

export default About;
