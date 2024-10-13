import React from "react";
import { ContainerFooter, Text } from "./styles";

interface Props {
  toggleTheme(): void;
}

const Footer: React.FC<Props> = () => {
  return (
    <ContainerFooter>
      <Text>João Pedro Volponi</Text>
    </ContainerFooter>
  );
};

export default Footer;
