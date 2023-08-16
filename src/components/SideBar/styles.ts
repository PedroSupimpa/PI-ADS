import styled from "styled-components";

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: fixed;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  top: 0px;
  left: 0px;
  height: 100%;
  width: 20vw;
  left: ${(props) => (props ? "0" : "-100%")};
  animation: handleSideBar 0.4s;
  z-index: 10000;

  @keyframes handleSideBar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 20vw;
    }
  }
  @media (max-width: 400px) {
    width: 100%;

    @keyframes handleSideBar {
      from {
        opacity: 0;
        width: 0;
      }
      to {
        opacity: 1;
        width: 100%;
      }
    }
  }
`;

export const SideBarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  width: calc(100% - 2vw);
  padding: 1vw;
  height: calc(8vh - 2vw);
  font-size: 1em;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #222831;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: end;
  cursor: pointer;
  margin: 1vw;
  width: 20%;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1vw;
  width: calc(100% - 2vw);
  height: 40vh;
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 6vh;
  font-size: 1em;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #222831;
`;

export const SectionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 6vh;
  border-radius: 0.3vw;

  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;
export const ItemValue = styled.div`
  font-size: 1em;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #222831;
  cursor: pointer;
  display: flex;
  justify-content: end;
  margin: 1vw;
`;
