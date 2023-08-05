import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: pink;
  height: 50vh;
  width: 50vw;
  margin-top: 10vh;
  border-radius: 1rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  height: 20%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  font-size: 3rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 2rem;
  width: 100%;
  background-color: whitesmoke;
  border-radius: 2rem;
  margin-top: 10vh;
  transition: transform 01s ease;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.2);
  }
`;
export const Text = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  padding: 0.2vh;
`;

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1300, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
