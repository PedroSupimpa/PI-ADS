import styled from "styled-components";

export const SideBarContainer = styled.div`
  display: flex;
  position: fixed;
  background-color: #f2f2f2;
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

export const IconContainer = styled.div`
  display: flex;
  justify-content: end;
  cursor: pointer;
  margin: 1vw;
  width: 100%;
`;
