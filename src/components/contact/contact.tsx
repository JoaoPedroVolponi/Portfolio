import React, { useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ContainerContact,
  SubContainerTexts,
  TextTitle,
  SubTextTitle,
  SubContainerContact,
  ContainerSocialMedias,
  SocialMedia,
  Imagem,
} from "./styles";
import { ThemeContext } from "styled-components";
import contactLight from "../../assets/images/contact/contact-light.png";
import contactDark from "../../assets/images/contact/contact-dark.png";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";
import emailIcon from "../../assets/icons/email.svg";
import whatsappIcon from "../../assets/icons/whatsapp.svg";

interface Props {
  toggleTheme(): void;
}

const Contact: React.FC<Props> = () => {
  const themeContext = useContext(ThemeContext);
  const colors = themeContext ? themeContext.colors : { text: "#000" };

  const theme = useContext(ThemeContext);
  const imageSrc =
    (theme?.title ?? "light") === "light" ? contactLight : contactDark;

  AOS.init();
  return (
    <ContainerContact id="contato">
      <SubContainerTexts>
        <TextTitle>Entrar em contato</TextTitle>
        <SubTextTitle>Sinta-se à vontade para entrar em contato!</SubTextTitle>
      </SubContainerTexts>

      <SubContainerContact>
        <ContainerSocialMedias>
          <SocialMedia
            target="blank"
            href="https://www.linkedin.com/in/joaopedrovolponi/"
          >
            <img src={linkedinIcon} alt="LinkedIn" width="30" height="30" />
          </SocialMedia>

          <SocialMedia
            target="blank"
            href="https://github.com/JoaoPedroVolponi"
          >
            <img src={githubIcon} alt="GitHub" width="30" height="30" />
          </SocialMedia>

          <SocialMedia target="blank" href="mailto:jpvrosada@hotmail.com">
            <img src={emailIcon} alt="Email" width="30" height="30" />
          </SocialMedia>

          <SocialMedia target="blank" href="https://wa.me/5544988237429">
            <img src={whatsappIcon} alt="WhatsApp" width="30" height="30" />
          </SocialMedia>
        </ContainerSocialMedias>
      </SubContainerContact>

      <Imagem src={imageSrc} />
    </ContainerContact>
  );
};

export default Contact;
