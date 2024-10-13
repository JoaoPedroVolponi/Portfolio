import React from 'react';
import { ContainerAbout, SubtitleContainer, SubTitle, ContainerTech, BoxTech, TextTech } from './styles';
import TechlogiesData from '../../data/techlogies-data';
import { ImRadioChecked } from "react-icons/im";

interface Props {
    toggleTheme(): void;
}

const Technologies: React.FC<Props> = () => {

    return (
        <ContainerAbout>
            <SubtitleContainer>
                <SubTitle>
                    Linguagens e tecnologias
                </SubTitle>
            </SubtitleContainer>
            <ContainerTech>
                {TechlogiesData.map((item)=>{
                    const { id, name } = item;
                    return(
                        <BoxTech key={id}>
                            <ImRadioChecked color="#1B3551" size={30}/>
                            <TextTech>{name}</TextTech>
                        </BoxTech>
                    );
                })}        
            </ContainerTech>
        </ContainerAbout>
    );
}

export default Technologies;