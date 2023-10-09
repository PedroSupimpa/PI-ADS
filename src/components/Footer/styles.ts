import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  height: 25vh;
  width: 100%;
  margin-top: 3vh;
  border-top: 1px solid lightgray;
`;

export const FooterBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const BrandLogo = styled.div`
  width: 5%;
  height: 45%;
  border-radius: 100%;
  background-color: gray;
  margin: 0.8vw;
`;

export const CopyrigthText = styled.div`
  width: 40%;
  font-size: 1.2em;
`;
export const LinksTerms = styled.div`
  display: flex;

  align-items: center;
  width: 50%;
`;

export const LinkOptions = styled.div`
  height: 100%;
  font-size: 1.5em;
  margin: 1vw;
`;
