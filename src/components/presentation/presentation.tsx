import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { FaMoon } from "react-icons/fa";
import Typewriter from 'typewriter-effect';
import { ContainerPresentation, ContainerMe, TextName, SubText, Navigations, TextNavs, Imagem, SwitchContainer } from './styles';
import presentationLight from '../../assets/images/presentation/presentation-light.png';
import presentationDark from '../../assets/images/presentation/presentation-dark.png';

interface Props {
    toggleTheme(): void;
}

const Presentation: React.FC<Props> = ({ toggleTheme }) => {
    const themeContext = useContext(ThemeContext);
    const title = themeContext?.title || 'default';

    const theme = useContext(ThemeContext);
    const imageSrc = (theme?.title ?? 'light') === 'light' ? presentationLight : presentationDark;

    return (
        <ContainerPresentation>
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
            <ContainerMe>
                <TextName>
                    João Pedro Volponi
                </TextName>
                <SubText>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 30,
                            strings: [
                                "Engenheiro de Software",
                                "Desenvolvedor Mobile"
                            ]
                        }}
                    />
                </SubText>
            </ContainerMe>
            <Navigations>
                <TextNavs href="#sobre">Sobre</TextNavs>
                <TextNavs href="#projetos">Projetos</TextNavs>
                <TextNavs href="#contato">Contato</TextNavs>
            </Navigations>
            <Imagem src={imageSrc}/>
        </ContainerPresentation>
    );
}

export default Presentation;