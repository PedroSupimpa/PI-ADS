import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 250px;
  height: 132px;
  background-color: pink;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  background-color: red;
`;

export const Subtitle = styled.div`
  background-color: blue;
`;

export const ImageContainer = styled.div`
  background-color: green;
  border-radius: 50%;
  width: 4vw;
  height: 4vw;
  overflow: hidden;
`;

export const Image = styled.img`
  max-width: 100%;
  min-width: 100%;
  max-height: 100%;
  min-height: 100%;
  object-fit: cover;
  box-sizing: border-box;
`;
