import styled from "styled-components";

export const TopicBarWrapper = styled.nav`
  display: flex;
  width: 100%;
  height: 5em;
  margin-top: 1em;
  align-items: center;
  padding: 0 1em;
  gap: 1.2em;
  overflow-x: auto;
  @media (min-width: 800px) {
    justify-content: center;
  }
`;

export const TopicLink = styled.a`
  display: flex;
  align-items: center;
  height: 2em;
  padding: 1.2em 1.4em;
  background-color: #eaeaea;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  font-weight: 600;
`;
