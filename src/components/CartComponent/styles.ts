import styled from "styled-components";

export const CartContainer = styled.div<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: #f2f2f2;
  padding: 0.5vw;
  border-radius: 0.3vw;
  top: 7.5%;
  right: 0px;
  height: 100%;
  width: 25vw;
  transform: translateX(${(props) => (props.$active ? "0%" : "100%")});
  transition: transform ease-in-out 0.5s;
  z-index: 9999;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 65%;
`;

export const CartHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 12%;
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  margin-bottom: 0.3vw;
`;

export const CartItemList = styled.div`
  min-height: 35%;
  height: auto;
  width: 100%;
  margin-bottom: 0.3vw;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
`;

export const CheckoutVoucher = styled.div`
  height: 20%;
  width: 100%;
  background-color: white;
  margin-bottom: 0.3vw;
`;

export const CartFooter = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
  width: 100%;
  background-color: white;
  margin-bottom: 0.3vw;
`;

export const CartFooterInfo = styled.div`
  height: 50%;
  width: 100%;
  background-color: white;
`;
export const CartFooterFixed = styled.div`
  width: 100%;
  height: 50%;
  background-color: white;
`;

export const TitleContainer = styled.div`
  margin: 0.7vw;
  font-size: 1.5vw;
`;

export const LocationText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 35%;
  width: 100%;
`;

export const VendorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 10%;
  background-color: white;
  margin-bottom: 0.5vw;
`;
export const VendorName = styled.div`
  font-size: 1vw;
`;
export const VendorImage = styled.div`
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

export const ItemContainer = styled.div``;
