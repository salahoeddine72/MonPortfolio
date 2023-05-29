import {
  AboutContent,
  Darkcircle,
  Gradientcircle,
  ImageContainer,
  StyledAboutSection,
  StyledHeading,
  StyledImage,
} from "../styles/sections/Aboutsection.styled";
import { CTAButton } from "../styles/common/CTAbutton.styled";

export const Aboutsection = () => {
  return (
    <>
      <hr />
      <StyledAboutSection id="about">
        <ImageContainer>
          <StyledImage
            src="./images/IMG-72191.jpg"
            alt="SALAHEDDINE EL MOURHIR"
          />
          <Darkcircle />
          <Gradientcircle />
        </ImageContainer>
        <AboutContent>
          <StyledHeading>Hello !</StyledHeading>
          <p>
            Je suis SalahEddine, étudiant en Bachelor Management des Systèmes
            d'Informations au sein de l'INGETIS-Paris, passionné par le domaine
            de développement web. Je suis à la recherche d'une opportunité
            d'alternance pour la rentrée 2023/2024 afin de développer mes
            compétences dans ce domaine dynamique et en constante évolution.
          </p>
          <p>
            Durant mes études, j'ai acquis des connaissances solides en gestion
            des systèmes d'informations, en analyse des besoins des utilisateurs
            et en gestion de projets. Cependant, ma véritable passion réside
            dans le développement web, où je peux combiner ma créativité avec
            mes compétences techniques pour créer des solutions interactives et
            innovantes.
          </p>
          <CTAButton href="./images/CV.pdf" download="MyCV">
            Télécharger mon CV
          </CTAButton>
        </AboutContent>
      </StyledAboutSection>
    </>
  );
};
