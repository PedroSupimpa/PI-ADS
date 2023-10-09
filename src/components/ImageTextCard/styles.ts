import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 15vw;
  height: 10vh;
  border-radius: 1em;
  align-items: center;
  padding: 1em;
  margin: 1em;
  margin-top: 2vh;
  gap: 1vw;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: 464px) {
    width: 80%;
    height: 50%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  align-items: center;
  margin-left: 1vw;
`;

export const Title = styled.div`
  display: flex;
  font-size: 1.5em;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #222831;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;

export const Subtitle = styled.div`
  display: flex;
  align-items: start;
  font-size: 1em;
  color: #222831;
  width: 100%;
  height: 80%;
  box-sizing: border-box;

  overflow: hidden;
`;

export const ImageContainer = styled.div`
  min-height: 30px;
  min-width: 90px;
  width: 6vw;
  height: 10vh;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.5em;
  object-fit: cover;
  box-sizing: border-box;
`;
