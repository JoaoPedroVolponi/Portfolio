import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppContainer } from '../styles';
import Presentation from '../components/presentation/presentation';
import About from '../components/about/about';
import Technologies from '../components/technologies/technologies';
import Projects from '../components/projects/projects';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';

interface Props {
  toggleTheme(): void;
}

const MainLayout: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <AppContainer>
      <Presentation toggleTheme={toggleTheme} />
      <About toggleTheme={toggleTheme} />
      <Technologies toggleTheme={toggleTheme} />
      <Projects toggleTheme={toggleTheme} />
      <Contact toggleTheme={toggleTheme} />
      <Footer toggleTheme={toggleTheme} />
    </AppContainer>
  );
};

export default MainLayout;