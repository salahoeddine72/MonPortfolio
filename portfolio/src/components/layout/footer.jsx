import {
  Codewith,
  FooterNav,
  Footerstyled,
} from "../styles/layout/Footer.styled";

export const Footer = () => {
  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  return (
    <>
      <hr />
      <Footerstyled>
        <FooterNav>
          <a href="#about">About -</a>
          <a href="#projects">Projets -</a>
          <a href="#contact">Contact</a>
        </FooterNav>
        <Codewith>Coded with React and Styled components</Codewith>
        <div>
          &copy; Mai 2023 - {months[new Date().getMonth()]}{" "}
          {new Date().getFullYear()}
        </div>
      </Footerstyled>
    </>
  );
};
