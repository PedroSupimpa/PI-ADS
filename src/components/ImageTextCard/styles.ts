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
  gap: 1vw;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);

  @media (max-width: 464px) {
    width: 80%;
    height: 100%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  font-size: 1em;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #222831;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  white-space: nowrap; /* Prevent title from wrapping to a new line */
  text-overflow: ellipsis; /* Add ellipsis (...) when text overflows */
  overflow: hidden; /* Hide any overflowing text beyond the container */
`;

export const Subtitle = styled.div`
  display: flex;
  align-items: start;
  font-size: 0.8em;
  color: #222831;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  white-space: nowrap; /* Prevent title from wrapping to a new line */
  text-overflow: ellipsis; /* Add ellipsis (...) when text overflows */
  overflow: hidden; /* Hide any overflowing text beyond the container */
`;

export const ImageContainer = styled.div`
  min-height: 30px;
  min-width: 70px;
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
