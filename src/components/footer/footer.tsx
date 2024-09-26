import React from "react";
import { ContainerFooter, Text } from "./styles";

interface Props {
  toggleTheme(): void;
}

const Footer: React.FC<Props> = () => {
  return (
    <ContainerFooter>
      <Text>© 2024 | João Pedro Volponi</Text>
    </ContainerFooter>
  );
};

export default Footer;
