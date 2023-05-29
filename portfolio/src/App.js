import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Globals.styled";
import { Navbar } from "./components/layout/Navbar";
import { HeroSection } from "./components/sections/Herosection";
import { Container } from "./components/styles/common/container.styled";
import { Aboutsection } from "./components/sections/Aboutsection";
import { Projectsection } from "./components/sections/Projectssection";
import { Contact } from "./components/sections/Contacts";
import { Footer } from "./components/layout/footer";

const App = () => {
  const theme = {
    colors: {
      white: "rgba(240,247,255,1)",
      navyBlue: "rgba(2,12,27,1)",
      lightNavyBlue: "rgba(4,22,48,1)",
      green: "rgba(0,206,158,1)",
      orange: "rgba(249,105,14,1)",
      purple: "rgba(102,51,153,1)",
      blue: "#35bbebaa",
    },
    mobile: "768px",
    transition: "all 650ms ease-in-out",
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <HeroSection />
        <Container>
          <Aboutsection />
          <Projectsection />
          <Contact />
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
