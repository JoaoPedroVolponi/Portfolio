import styled, { keyframes } from "styled-components";
import "@fontsource/space-grotesk";

export const SwitchContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  transition: background-color 0.5s ease; /* Adiciona transição suave */
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const BackButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 16px;

  span {
    margin-left: 8px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const ContainerProjects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 150px 0px;
`;

export const SubContainerProjects = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 630px) {
    flex-direction: column;
    align-items: baseline;
  }
`;

export const SubTitle = styled.span`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  font-size: 40px;

  @media screen and (max-width: 468px) {
    font-size: 35px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ButtonSeeMore = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.text};
  height: 30px;
  width: 110px;
  border-radius: 5px;

  &:hover,
  :focus {
    border: 1px solid #37a2d8;
  }
`;

export const ButtonSeeAll = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.text};
  height: 30px;
  width: 110px;
  border-radius: 5px;

  &:hover,
  :focus {
    border: 1px solid #37a2d8;
  }
`;

export const TextSeeMore = styled.span`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  font-size: 15px;
`;

export const ContainerAllProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;

  &.fade-out {
    animation: ${fadeOut} 0.5s forwards;
  }
`;

export const Project = styled.div`
  display: flex;
  background: ${(props) => props.theme.colors.background};
  box-shadow: ${(props) => props.theme.colors.shadow};
  flex-direction: column;
  border-radius: 20px;
`;

export const BoxImage = styled.div`
  display: flex;
  background: #ffffff;
  height: 200px;
  justify-content: center;
  align-items: center;
  border-radius: 20px 20px 0px 0px;
  overflow: hidden;
`;

export const Image = styled.img`
  display: flex;
  height: 98%;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`;

export const SubContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const TitleProject = styled.span`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
  font-size: 25px;
`;

export const Description = styled.span`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
  margin: 0 30px;
  text-align: justify;
  height: 175px;
  hyphens: auto;
  -webkit-hyphens: auto;
  word-spacing: -0.05em;
`;

export const Tools = styled.span`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  color: ${(props) => props.theme.colors.secundary};
  margin: 20px 30px 30px 30px;
`;

export const FilterButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const FilterButton = styled.a`
  display: flex;
  border: 1px solid #37a2d8;
  padding: 15px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  width: fit-content;
  transition: all 0.3s ease-in-out;
`;
