import {
  ContainerAbout,
  Image,
  SubContainerAbout,
  SubTitle,
  Description,
  ContainerButtons,
  ContactButton,
  TextButton,
} from "./styles";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import aboutLight from "../../assets/images/about/about-light.png";
import abourtDark from "../../assets/images/about/about-dark.png";
import { BoxCV, BoxTexts, Icon, LinkTextCV } from "../contact/styles";

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
        <BoxCV href={""} download="DownloadCV">
          <Icon
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.29782 2.136C8.05101 1.6845 9.00225 2.2305 9.00225 3.099C9.00225 3.495 8.7952 3.8625 8.45461 4.065C4.73968 6.294 2.25056 10.3605 2.25056 15.003C2.25056 22.0395 7.96399 27.75 15.0007 27.75C22.0375 27.75 27.7494 22.0395 27.7494 15.003C27.7494 10.3635 25.2648 6.2985 21.5514 4.0695C21.2138 3.8655 21.0053 3.4995 21.0053 3.1035C21.0053 2.2305 21.958 1.689 22.7112 2.1405C27.0773 4.7625 30 9.5445 30 15.003C30 23.2815 23.2798 30 15.0007 30C6.72168 30 0 23.2815 0 15.003C0 9.5415 2.92723 4.758 7.29782 2.136V2.136ZM8.54464 15.009C8.54464 15.009 11.5829 18.0405 14.2146 20.67C14.4351 20.8905 14.7232 21 15.0098 21C15.2978 21 15.5859 20.8905 15.8065 20.67C18.4366 18.042 21.4764 15.0075 21.4764 15.0075C21.6939 14.79 21.8019 14.5035 21.8019 14.2185C21.8019 13.9305 21.6909 13.6425 21.4704 13.422C21.0323 12.9825 20.3211 12.981 19.886 13.416L16.135 17.1645V1.125C16.135 0.504 15.6309 0 15.0098 0C14.3886 0 13.8845 0.504 13.8845 1.125V17.1645L10.1365 13.4175C9.70292 12.984 8.99325 12.9885 8.55514 13.4265C8.33458 13.647 8.22356 13.935 8.22206 14.223C8.22206 14.508 8.32858 14.793 8.54464 15.009V15.009Z"
              fill="#1B3551"
            />
          </Icon>

          <BoxTexts>
            <LinkTextCV>Download CV</LinkTextCV>
          </BoxTexts>
          
        </BoxCV>
        </ContainerButtons>
      </SubContainerAbout>
    </ContainerAbout>
  );
};

export default About;
