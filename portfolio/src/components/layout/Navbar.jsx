import {
  MenuIcon,
  Nav,
  Lineone,
  Linetwo,
  Linethree,
  Navlist,
  NavItem,
  NavLink,
  Profile,
  SocialIcons,
} from "../styles/layout/Nav.styled";
import { Logo } from "../styles/layout/Nav.styled";
import { useState } from "react";
import { NavItems } from "../../data/Navitems";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CTAButton } from "../styles/common/CTAbutton.styled";
import useScrollDirection from "../../hooks/Usescrolldirection";

export const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  const scrolldirection = useScrollDirection("down");

  return (
    <>
      <Nav scrolldirection={scrolldirection}>
        <div>
          <a href="#hero-section">
            <Logo src="./images/logo.png"></Logo>
          </a>
        </div>
        <MenuIcon menuOpen={menuOpen} onClick={() => setmenuOpen(!menuOpen)}>
          <Lineone menuOpen={menuOpen} />
          <Linetwo menuOpen={menuOpen} />
          <Linethree menuOpen={menuOpen} />
        </MenuIcon>
        <Navlist menuOpen={menuOpen}>
          {NavItems &&
            NavItems.map((navItem, index) => (
              <NavItem
                key={index}
                index={index}
                menuOpen={menuOpen}
                onClick={() => setmenuOpen(false)}
              >
                {navItem.isProfile ? (
                  <NavLink href="#hero-section">
                    <Profile>
                      <img
                        src="./images/IMG-72191.JPG"
                        alt="SalahEddine El Mourhir"
                      />
                      <span>SalahEddine El Mourhir</span>
                    </Profile>
                  </NavLink>
                ) : null}
                {navItem.text ? (
                  <NavLink href={navItem.href}> {navItem.text} </NavLink>
                ) : null}
                {navItem.hasSocialIcons ? (
                  <SocialIcons>
                    <NavLink
                      href="https://www.linkedin.com/in/salaheddine-elmourhir-401026180/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </NavLink>
                    <NavLink
                      href="https://github.com/salahoeddine72/"
                      target="_blank"
                    >
                      <FaGithub />
                    </NavLink>
                  </SocialIcons>
                ) : null}
                {navItem.hasCTA ? (
                  <CTAButton href="./images/CV.pdf" download="MyCV">
                    Télécharger mon CV
                  </CTAButton>
                ) : null}
              </NavItem>
            ))}{" "}
        </Navlist>
      </Nav>
    </>
  );
};
