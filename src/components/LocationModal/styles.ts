import styled from "styled-components";

export const ContainerLocation = styled.div``;

export const LocationValue = styled.div`
  @media (max-width: 464px) {
    display: none;
    justify-content: center;
    align-items: center;
  }
`;

export const IconContainer = styled.div`
  margin: 1vw;
`;

export const LocationModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30vw;
  height: 50vh;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.5em;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 464px) {
    width: 85%;
  }
`;

export const Text = styled.div`
  margin-top: 5%;
  height: 65%;
  width: 80%;
  background-color: #f2f2f2;
`;

export const LocationSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70%;
  height: 10%;
  background-color: white;
  border-radius: 0.5em;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin-top: 2%;
`;

export const LiveLocation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
`;
