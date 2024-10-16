import styled from "styled-components";
import "@fontsource/space-grotesk";

export const ContainerAbout = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    gap: 100px;
    padding: 150px 0px;

    @media screen and (max-width: 1320px){    
        flex-direction: column;
    }

    @media screen and (max-width: 645px){    
        gap: 20px;
    }
`;

export const Image = styled.img`
    height: 20vw;

    @media screen and (max-width: 645px){    
        width: 77vw;
    }

    @media screen and (max-width: 980px){  
        display: none;
    }
`;

export const SubContainerAbout = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
`;

export const SubTitle = styled.span`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    color: ${props => props.theme.colors.text};
    font-size: 40px;

    @media screen and (max-width: 468px){    
        font-size: 35px;
    }
`;

export const Description = styled.span`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    color: ${props => props.theme.colors.secundary};
    font-size: 15px;
    text-align: justify;
    hyphens: auto;
    -webkit-hyphens: auto;
    word-spacing: -0.05em;
`;

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const ContactButton = styled.a`
    display: flex;
    // background: #37D892;
    border: 1px solid #37A2D8;
    padding: 15px 20px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    width: fit-content;
    transition: all 0.3s ease-in-out;

    &:hover, :focus{
        // background-color: #37D89220;
        // border: 1px solid #37D892;
    }

    &:hover span, :focus span{
        // color: #37A2D8;
    }
`;

export const TextButton = styled.span`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    // color: #fff;
    color: ${props => props.theme.colors.secundary};
    text-align: center;
    border-radius: 5px;
    font-size: 12px;
`;