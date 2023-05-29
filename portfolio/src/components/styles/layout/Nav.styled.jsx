import styled, { keyframes, css } from "styled-components";

const NavItemFade = keyframes`
from{
opacity: 0;
transform: translate(50px);
}
to{
opacity: 1;
transform: translate(0px);
}
`;

const NavItemAnimation = ({ index }) => css`
  animation: ${NavItemFade} 0.5s ease forwards ${index / 7 + 0.5}s;
`;

export const Nav = styled.nav`
  height: 80px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 98;
  transition: all 1s ease-in-out;
  background: "rgba(2,12,27,0.8)";
  top: ${({ scrolldirection }) =>
    scrolldirection === "down" ? "-80px" : "0px"};
`;
export const Logo = styled.img`
  width: 65px;
  border-radius: 10%;
`;
export const MenuIcon = styled.div`
  cursor: pointer;
  background: ${({ theme, menuOpen }) =>
    menuOpen ? "none" : theme.colors.lightNavyBlue};
  padding: 0.7rem;
  border-radius: 5px;
  display: none;
  position: absolute;
  right: 20px;
  z-index: 999;
  transition: ${({ theme }) => theme.transition};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: inline-block;
  }
`;
export const Lineone = styled.div`
  width: 15px;
  height: 3px;
  margin: 5px 0;
  background: linear-gradient(
    135deg,
    rgba(249, 105, 40, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  transition: ${({ theme }) => theme.transition};
  transform: ${({ menuOpen }) =>
    menuOpen ? "rotate(-45deg) translate(-5px, 6px) scaleX(2) " : "none"};
`;
export const Linetwo = styled.div`
  width: 30px;
  height: 3px;
  margin: 5px 0;
  background: linear-gradient(
    135deg,
    rgba(249, 105, 40, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  transition: ${({ theme }) => theme.transition};
  opacity: ${({ menuOpen }) => (menuOpen ? 0 : 1)};
`;
export const Linethree = styled.div`
  width: 15px;
  height: 3px;
  margin: 5px 0;
  background: linear-gradient(
    135deg,
    rgba(249, 105, 40, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  margin-left: ${({ menuOpen }) => (menuOpen ? 0 : "15px")};
  transition: ${({ theme }) => theme.transition};
  transform: ${({ menuOpen }) =>
    menuOpen ? "rotate(45deg) translate(-5px, -6px) scaleX(2) " : "none"};
`;
export const Navlist = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 14px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 24rem;
    height: 100vh;
    background: ${({ theme }) => theme.colors.lightNavyBlue};
    position: fixed;
    top: 0;
    right: ${({ menuOpen }) => (menuOpen ? "0" : "-24rem")};
    padding-top: 3rem;
    justify-content: flex-start;
    flex-direction: column;
    z-index: 998;
    transition: ${({ theme }) => theme.transition};
  }
`;
export const NavItem = styled.li`
  margin: 0.2rem 0.7rem;

  &: last-child {
    margin-right: 0;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    opacity: 0;
    margin: 1.2rem 0;
    ${({ menuOpen }) => (menuOpen ? NavItemAnimation : null)}
  }
`;
export const NavLink = styled.a`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 1.5px;

  &::after {
    content: "";
    display: block;
    height: 3px;
    width: 0%;
    background: ${({ theme }) => theme.colors.orange};
    transition: all ease-in-out 300ms;
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
`;
export const Profile = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      height: 10rem;
      width: auto;
      border-radius: 30%;
      display: block;
      margin: 1.5rem 0;
    }
  }
`;
export const SocialIcons = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      margin: 0 0.5rem;
      font-size: 2rem;
    }
  }
`;
