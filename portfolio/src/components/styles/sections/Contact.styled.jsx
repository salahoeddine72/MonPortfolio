import styled, { keyframes } from "styled-components";

const float = keyframes`
from{
transform:translate(0px,0px);
}
65%{
transform:translate(0px,10px);

}
to{
transform:translate(0px,0px);

}
`;

export const StyledContact = styled.section`
  min-height: 19vh;
  padding: 10rem 0 5rem 0;
  width: 100%;
`;
export const Detailwrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column-reverse;
  }
`;
export const Imagewrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  img {
    width: 50%;
    animation: ${float} 3s ease-in-out infinite;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: center;
    margin-bottom: 2rem;
  }
`;
export const Contactinfo = styled.div`
  flex: 1;
  font-family: "poppins", sans-serif;
  font-size: 18px;
  p {
    padding: 0;
    margin-bottom: 2rem;
    text-align: justify;
  }
  div {
    display: flex;
    align-items: center;
    a {
      display: flex;
      align-items: center;
      margin: 0 2rem 2rem 0;
      svg {
        margin: 0.5rem;
      }
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
      flex-direction: column;
      align-items: flex-start;
      a {
        margin: 0 0 2rem 0;
        font-size: 16px;
      }
    }
  }
`;
