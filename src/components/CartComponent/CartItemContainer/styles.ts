import styled from "styled-components";
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  margin-top: 0.3vh;
  padding: 0.3vw;
  box-sizing: border-box;
`;

export const ItemHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  margin: 0.5vw;
`;

export const ItemValue = styled.div``;
export const ItemTitle = styled.div`
  width: 70%;
  word-wrap: break-word;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  margin: 0.5vw;
  width: 100%;
`;
export const ItemDescription = styled.div``;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.6vw;
  margin-left: 0.5vw;
`;
export const RemoveButton = styled.div`
  cursor: pointer;
`;
export const EditButton = styled.div`
  cursor: pointer;
`;
