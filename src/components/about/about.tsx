import { ContainerAbout, Image, SubContainerAbout, SubTitle, Description, ContainerButtons, ContactButton, TextButton } from './styles';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import aboutLight from '../../assets/images/about/about-light.png';
import abourtDark from '../../assets/images/about/about-dark.png';

interface Props {
    toggleTheme(): void;
}

const About: React.FC<Props> = () => {
    
    const theme = useContext(ThemeContext);
    
    const imageSrc = (theme?.title ?? 'light') === 'light' ? aboutLight : abourtDark;

    return (
        <ContainerAbout id="sobre">
            <Image src={imageSrc} alt="João Pedro Volponi" />

            <SubContainerAbout>
                <SubTitle>
                    Sobre mim
                </SubTitle>

                <Description>
                    Comecei minha jornada na programação em 2019, quando ingressei na faculdade de Engenharia de Software.
                </Description>
                <Description>
                    Atualmente estou estudando atuando como desenvolvedor iOS para o Itaú Unibanco.
                </Description>
                <Description>
                    Meu foco é aprender novas coisas e aprimorar ainda mais as habilidades que possuo, gosto sempre de estar em constante aprendizado e evoluindo dia após dia, e agregando muito valor.</Description>
                <ContainerButtons>
                    <ContactButton href="#contato">
                        <TextButton>
                            Contato
                        </TextButton>
                    </ContactButton>
                </ContainerButtons>
            </SubContainerAbout>
        </ContainerAbout>
    );
}

export default About;