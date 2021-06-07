import styled from "styled-components";

export const HomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  max-width: 1200px;
  padding-right: 20px;
  padding-left: 20px;
  margin-top: 50px;
`;

export const CardList = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: auto;
  height: 400px;

  @media (max-width: 600px) {
    margin-bottom: 0;
  }
`;
