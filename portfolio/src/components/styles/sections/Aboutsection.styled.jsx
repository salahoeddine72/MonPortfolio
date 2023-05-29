import styled, { keyframes } from "styled-components";

const rotate = keyframes`
from{
  transform: rotate(0deg);
}
to{
  transform: rotate(360deg);
}
`;

export const StyledAboutSection = styled.section`
  min-height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10rem 0 5rem 0;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const ImageContainer = styled.div`
  height: 13rem;
  width: 13rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2.5rem;
  position: relative;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 4rem;
  }
`;
export const StyledImage = styled.img`
  height: 12rem;
  width: 12rem;
  border-radius: 50%;
  position: absolute;
  z-index: 4;
`;
export const Gradientcircle = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  animation: ${rotate} 5s linear infinite;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.orange} 0%,
    ${({ theme }) => theme.colors.green} 50%,
    ${({ theme }) => theme.colors.purple} 100%
  );
`;
export const Darkcircle = styled.div`
  height: 12.5rem;
  width: 12.5rem;
  border-radius: 50%;
  position: absolute;
  z-index: 3;
  background: ${({ theme }) => theme.colors.navyBlue};
`;
export const AboutContent = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  p {
    font-family: "poppins", sans-serif;
    font-size: 1.4rem;
    text-align: justify;
    margin-bottom: 1.45rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    p {
      font-size: 1.2rem;
    }
  }
`;
export const StyledHeading = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
`;
