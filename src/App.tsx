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

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", dark);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

return (
  <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle />
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Presentation toggleTheme={toggleTheme} />
                <About toggleTheme={toggleTheme} />
                <Technologies toggleTheme={toggleTheme} />
                <Projects toggleTheme={toggleTheme} />
                <Contact toggleTheme={toggleTheme} />
                <Footer toggleTheme={toggleTheme} />
              </>
            }
          />
          <Route
            path="/all-projects"
            element={<AllProjects toggleTheme={toggleTheme} />}
          />
        </Routes>
      </div>
    </Router>
  </ThemeProvider>
);
}

export default App;
