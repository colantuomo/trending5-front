import styled from "styled-components";

export const CardWrapper = styled.a`
  width: 250px;
  height: 50px;
  font-size: 10px;
  cursor: pointer;

  @media (max-width: 600px) {
    min-width: 200px;
    height: 390px;
  }

  img {
    max-width: 100%;
    max-height: 150px;
  }

  h2 {
    font-weight: 600;
    font-size: 16px;
  }

  p {
    font-weight: 100;
    font-size: 14px;
  }
`;
