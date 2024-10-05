import React, { useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ContainerContact,
  SubContainerTexts,
  TextTitle,
  SubTextTitle,
  SubContainerContact,
  Icon,
  BoxTexts,
  BoxCV,
  LinkTextCV,
  ContainerSocialMedias,
  SocialMedia,
  Imagem,
} from "./styles";
import { ThemeContext } from "styled-components";
import contactLight from "../../assets/images/contact/contact-light.png";
import contactDark from "../../assets/images/contact/contact-dark.png";

interface Props {
  toggleTheme(): void;
}

const Contact: React.FC<Props> = () => {
  const themeContext = useContext(ThemeContext);
  const colors = themeContext ? themeContext.colors : { text: "#000" };

  const theme = useContext(ThemeContext);
  const imageSrc = (theme?.title ?? 'light') === 'light' ? contactLight : contactDark;

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
            <Icon
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 0C6.71625 0 0 6.71625 0 15C0 23.2837 6.71625 30 15 30C23.2837 30 30 23.2837 30 15C30 6.71625 23.2837 0 15 0ZM12.5 20H10V12.5H12.5V20ZM11.25 11.3863C10.4913 11.3863 9.875 10.7662 9.875 10C9.875 9.235 10.49 8.61375 11.25 8.61375C12.01 8.61375 12.625 9.235 12.625 10C12.625 10.7662 12.0087 11.3863 11.25 11.3863ZM21.25 20H18.7525V16.4237C18.7525 14.0725 16.25 14.2712 16.25 16.4237V20H13.75V12.5H16.25V13.8663C17.34 11.8463 21.25 11.6962 21.25 15.8012V20Z"
                fill={colors.text}
              />
            </Icon>
          </SocialMedia>

          <SocialMedia
            target="blank"
            href="https://github.com/JoaoPedroVolponi"
          >
            <Icon
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 0C6.7175 0 0 6.88604 0 15.3792C0 22.1743 4.2975 27.9389 10.2587 29.9728C11.0075 30.115 11.25 29.6383 11.25 29.2333V26.3702C7.0775 27.3007 6.20875 24.5555 6.20875 24.5555C5.52625 22.7779 4.5425 22.305 4.5425 22.305C3.18125 21.3502 4.64625 21.3707 4.64625 21.3707C6.1525 21.4783 6.945 22.956 6.945 22.956C8.2825 25.3065 10.4538 24.6272 11.31 24.2338C11.4438 23.2405 11.8325 22.5613 12.2625 22.1781C8.93125 21.7872 5.42875 20.4684 5.42875 14.5769C5.42875 12.8967 6.015 11.5254 6.97375 10.4489C6.81875 10.0606 6.305 8.49573 7.12 6.37853C7.12 6.37853 8.38 5.96585 11.2462 7.95489C12.4425 7.61399 13.725 7.44354 15 7.43713C16.275 7.44354 17.5587 7.61399 18.7575 7.95489C21.6212 5.96585 22.8787 6.37853 22.8787 6.37853C23.695 8.49701 23.1812 10.0618 23.0262 10.4489C23.9887 11.5254 24.57 12.898 24.57 14.5769C24.57 20.4838 21.0612 21.7846 17.7213 22.1653C18.2588 22.642 18.75 23.5776 18.75 25.013V29.2333C18.75 29.6421 18.99 30.1227 19.7512 29.9715C25.7075 27.935 30 22.1717 30 15.3792C30 6.88604 23.2837 0 15 0Z"
                fill={colors.text}
              />
            </Icon>
          </SocialMedia>

          <SocialMedia target="blank" href="mailto:jpvrosada@hotmail.com">
            <Icon
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 0C6.71625 0 0 6.71625 0 15C0 23.2837 6.71625 30 15 30C23.2837 30 30 23.2837 30 15C30 6.71625 23.2837 0 15 0V0ZM23.7375 8.725L15 15.8075L6.26125 8.725H23.7375ZM23.75 21.225H6.25V10.5937L15 17.685L23.75 10.595V21.225Z"
                fill={colors.text}
              />
            </Icon>
          </SocialMedia>
        </ContainerSocialMedias>

        <BoxCV href={""} download="DonwloadCV">
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
      </SubContainerContact>

      <Imagem src={imageSrc} />
    </ContainerContact>
  );
};

export default Contact;
