import styled from "styled-components";

export const Sectionheadin = styled.div`
  text-align: center;
  margin-bottom: 7rem;

  h1 {
    text-transform: uppercase;
    display: inline-block;
    font-size: 2rem;
    margin: 0.5rem 0 1.5rem 0;
    position: relative;

    &::after {
      content: "";
      display: block;
      height: 5px;
      width: 50%;
      background: ${({ theme }) => theme.colors.purple};
      position: absolute;
      left: 50%;
      bottom: -7px;
      transform: translate(-50%);
    }
  }
  @media (${({ theme }) => theme.mobile}) {
    text-align: left;
  }
`;
