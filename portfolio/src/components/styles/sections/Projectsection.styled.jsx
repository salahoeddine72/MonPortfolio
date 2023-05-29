import styled from "styled-components";

export const Styledprojectsection = styled.section`
  min-height: 90vh;
  padding: 10rem 0 5rem 0;
  width: 100%;
`;

export const Singleproj = styled.div`
  display: flex;
  align-items: center;
  &:nth-child(even) {
    flex-direction: row-reverse;
    margin: 10rem 0;
    a {
      img {
        transform: rotateY(-30deg);
      }
      &:hover {
        img {
          transform: rotateY(0deg);
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    &:nth-child(even) {
      flex-direction: column;
      a {
        margin-bottom: 3rem;
        img {
          transform: rotateY(0deg);
        }
      }
    }
  }
`;

export const ProjectimageC = styled.a`
  display: flex;
  flex: 1;
  position: relative;
  align-items: center;
  justify-content: center;
  perspective: 1000px;

  img {
    width: 90%;
    border-radius: 20px;
    transform: rotateY(30deg);
    transition: ${({ theme }) => theme.transition};
    z-index: 3;
  }
  &:hover {
    img {
      transform: rotateY(0deg);
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 3rem;
    justify-content: flex-start;
    img {
      transform: rotate(0deg);
      width: 80%;
      border-radius: 9px;
    }
  }
`;

export const Projectdescr = styled.div`
  flex: 1;
  h1 {
    font-size: 2rem;
    margin: 0 0 2rem 0;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.orange} 0%,
      ${({ theme }) => theme.colors.purple} 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    text-align: justify;
  }
  div {
    display: flex;
    align-items: center;
    a {
      display: flex;
      align-items: center;
      margin: 2rem 2rem 2rem 0;
      font-size: 1.2rem;
      svg {
        margin-right: 0.5rem;
      }
    }
  }
`;
export const Tags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;

  span {
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    background: #0e213c;
    display: inline-block;
    padding: 7px;
    border-radius: 5px;
    font-size: 14px;
  }
`;
