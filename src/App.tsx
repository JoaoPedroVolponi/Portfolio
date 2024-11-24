import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "./utils/usePersistedState";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import GlobalStyle from "./styles/global";
import AllProjects from "./components/all-projects/all-projects";
import About from "./components/about/about";
import Technologies from "./components/technologies/technologies";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import MainLayout from "./navigation/main-layout";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", dark);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<MainLayout toggleTheme={toggleTheme} />}>
            <Route path="about" element={<About toggleTheme={toggleTheme} />} />
            <Route path="technologies" element={<Technologies toggleTheme={toggleTheme} />} />
            <Route path="projects" element={<Projects toggleTheme={toggleTheme} />} />
            <Route path="contact" element={<Contact toggleTheme={toggleTheme} />} />
            <Route path="footer" element={<Footer toggleTheme={toggleTheme} />} />
          </Route>
          <Route path="/all-projects" element={<AllProjects toggleTheme={toggleTheme} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;