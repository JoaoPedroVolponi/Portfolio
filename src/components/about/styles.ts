import styled from "styled-components";
import "@fontsource/space-grotesk";

export const ContainerAbout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 100px;
  padding: 150px 0px;

  @media screen and (max-width: 1320px) {
    flex-direction: column;
  }

  @media screen and (max-width: 645px) {
    gap: 20px;
  }
`;

export const Image = styled.img`
  height: 20vw;
  
  @media screen and (max-width: 980px) {
    position: static;
    height: auto;
    width: 80%;
    max-width: 300px;
    display: block;
    margin: 20px auto 0;
  }

  animation: float 10s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-25px);
    }
    40% {
      transform: translateX(-25px);
    }
    60% {
      transform: translateY(-25px);
    }
    80% {
      transform: translateX(-25px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const SubContainerAbout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
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

export const Description = styled.span`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  color: ${(props) => props.theme.colors.secundary};
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

export const DownloadCvButton = styled.a`
  display: flex;
  border: 1px solid #37a2d8;
  padding: 15px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  width: fit-content;
  transition: all 0.3s ease-in-out;
`;

export const TextButton = styled.span`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  color: ${(props) => props.theme.colors.secundary};
  text-align: center;
  border-radius: 5px;
  font-size: 12px;
`;
