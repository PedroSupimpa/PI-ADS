import CloseIcon from "@mui/icons-material/Close";
import {
  CartContainer,
  CartFooter,
  CartFooterFixed,
  CartFooterInfo,
  CartHeader,
  CartItemList,
  CheckoutVoucher,
  Header,
  Image,
  LocationText,
  TitleContainer,
  VendorContainer,
  VendorImage,
  VendorName,
} from "./styles";
import CartItemContainer from "./CartItemContainer";

interface ICart {
  active: boolean;
  location: string;
  vendorName: string;
  vendorImage: string;
  items: {
    quantity: number;
    title: string;
    value: number;
    description: string;
  }[];
  activeHandler: (active: boolean) => void;
}

const CartComponent = ({
  active,
  activeHandler,
  location,
  vendorName,
  vendorImage,
  items,
}: ICart) => {
  const closeCart = () => {
    activeHandler(false);
  };

  return (
    <CartContainer $active={active}>
      <CartHeader>
        <Header>
          <TitleContainer>{"Cart"}</TitleContainer>
          <CloseIcon
            onClick={closeCart}
            style={{ marginRight: "0.3vw", cursor: "pointer" }}
          />
        </Header>
        <LocationText>{location}</LocationText>
      </CartHeader>
      <VendorContainer>
        <VendorImage>
          <Image src={vendorImage} />
        </VendorImage>
        <VendorName>{vendorName}</VendorName>
      </VendorContainer>

      <CartItemList>
        {items.map((itemDetail, idx) => (
          <CartItemContainer
            key={idx}
            quantity={itemDetail.quantity}
            title={itemDetail.title}
            value={itemDetail.value}
            description={itemDetail.description}
          />
        ))}
      </CartItemList>
      <CheckoutVoucher></CheckoutVoucher>
      <CartFooter>
        <CartFooterInfo></CartFooterInfo>
        <CartFooterFixed></CartFooterFixed>
      </CartFooter>
    </CartContainer>
  );
};

export default CartComponent;
