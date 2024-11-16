import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "./utils/usePersistedState";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import GlobalStyle from "./styles/global";
import Presentation from "./components/presentation/presentation";
import About from "./components/about/about";
import Technologies from "./components/technologies/technologies";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import AllProjects from "./components/all-projects/all-projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppContainer } from "./styles";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", dark);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <AppContainer>
          <Routes>
            <Route
              path="/"
              element={<Presentation toggleTheme={toggleTheme} />}
            />
            <Route
              path="/about"
              element={<About toggleTheme={toggleTheme} />}
            />
            <Route
              path="/technologies"
              element={<Technologies toggleTheme={toggleTheme} />}
            />
            <Route
              path="/projects"
              element={<Projects toggleTheme={toggleTheme} />}
            />
            <Route
              path="/contact"
              element={<Contact toggleTheme={toggleTheme} />}
            />
            <Route
              path="/footer"
              element={<Footer toggleTheme={toggleTheme} />}
            />
            <Route
              path="/all-projects"
              element={<AllProjects toggleTheme={toggleTheme} />}
            />
          </Routes>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;