import styled from "styled-components";
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6vh;
  background: white;
  border-bottom: 1px solid #f2f2f2;
  z-index: 10001;
`;

export const SeachContainer = styled.div`
  display: flex;
  align-items: center;
  width: 35vw;
  height: 80%;
`;

export const IconContainer = styled.div`
  margin: 1vw;
  cursor: pointer;
`;

export const RightSideIcons = styled.div`
  display: flex;
  justify-content: end;
  width: 15vw;
`;

export const LocationContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 10vw;
  height: 80%;
  padding: 0.5%;
  font-size: 1em;
  cursor: pointer;
`;
