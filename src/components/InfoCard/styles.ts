import styled from "styled-components";

export const InfoCardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: center;
  overflow-x: hidden;
  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: start;
  }
  p {
    font-weight: 500;
  }
`;

export const InfoCardImage = styled.img`
  background-color: #c4c4c4;
  @media (min-width: 800px) {
    width: 150px;
  }
`;

export const InfoCardTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
