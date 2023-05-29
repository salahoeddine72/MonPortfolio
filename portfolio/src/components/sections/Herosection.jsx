import { CTAButton } from "../styles/common/CTAbutton.styled";
import {
  HeroContent,
  HeroSocialIcons,
  SocialIcon,
  StyledArrowDown,
  Styledherosection,
} from "../styles/sections/herosection.styled";
import { FaArrowDown, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <Styledherosection id="hero-section">
      <HeroContent>
        <h1>SalahEddine El Mourhir</h1>
        <h3>{"{Full-stack Developer}"}</h3>
        <p>NodeJs . Python . React . NoSQL </p>
        <div>
          <CTAButton
            href="https://github.com/salahoeddine72?tab=repositories"
            target="_blank"
          >
            Projects
          </CTAButton>
          <CTAButton
            href="https://wa.me/33750717458"
            target="_blank"
            primary
            margin="0 0 0 20px"
          >
            Contact Me
          </CTAButton>
        </div>
      </HeroContent>
      <StyledArrowDown href="#about">
        <FaArrowDown></FaArrowDown>
      </StyledArrowDown>
      <HeroSocialIcons>
        <SocialIcon
          color="#2a9ce9"
          href="https://www.linkedin.com/in/salaheddine-elmourhir-401026180/"
          target="_blank"
        >
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon
          color="#ffffff"
          href="https://github.com/salahoeddine72/"
          target="_blank"
        >
          <FaGithub />
        </SocialIcon>
        <SocialIcon href="https://wa.me/33750717458" target="_blank">
          <FaWhatsapp />
        </SocialIcon>
      </HeroSocialIcons>
    </Styledherosection>
  );
};
