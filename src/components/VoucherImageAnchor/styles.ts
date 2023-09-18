import styled from "styled-components";

export const VoucherContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  height: 15vh;
  margin: 0.8vw;

  @media (max-width: 464px) {
    width: 100%;
    height: 100%;
  }
`;

export const VoucherImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 99%;
  height: 99%;
  border-radius: 0.5vw;
  box-sizing: border-box;
  @media (max-width: 464px) {
    border-radius: 1em;
  }
`;
