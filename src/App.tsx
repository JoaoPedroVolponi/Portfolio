import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistedState';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyle from './styles/global';

import Presentation from './components/presentation/presentation';
import About from './components/about/about';
import Technologies from './components/technologies/technologies';
// import Projects from './components/projects/projects';
// import Contact from './components/contact/contact';
// import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <Presentation toggleTheme={toggleTheme} />
      <div className='App'>
        <GlobalStyle />
        <About toggleTheme={toggleTheme} />
        <Technologies toggleTheme={toggleTheme} />
        {/* <Projects toggleTheme={toggleTheme} /> */}
         {/* <Contact toggleTheme={toggleTheme} /> */}
      </div>
      {/* <Footer toggleTheme={toggleTheme} /> */}
    </ThemeProvider>
  );
}

export default App;
