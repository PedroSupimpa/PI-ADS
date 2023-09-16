import {
  ButtonsContainer,
  DescriptionContainer,
  EditButton,
  ItemContainer,
  ItemDescription,
  ItemHeaderContainer,
  ItemTitle,
  ItemValue,
  RemoveButton,
} from "./styles";

interface IItemContainer {
  quantity: number;
  title: string;
  value: number;
  description: string;
}

const CartItemContainer = ({
  quantity,
  title,
  value,
  description,
}: IItemContainer) => {
  const handleRemoveItem = () => {};

  const handleEditItem = () => {};

  return (
    <>
      <ItemContainer>
        <ItemHeaderContainer>
          <ItemTitle>{quantity + "x " + title}</ItemTitle>

          <ItemValue>{value}</ItemValue>
        </ItemHeaderContainer>

        <DescriptionContainer>
          <ItemDescription>{description}</ItemDescription>
        </DescriptionContainer>

        <ButtonsContainer>
          <EditButton onClick={handleEditItem}>Edit</EditButton>
          <RemoveButton onClick={handleRemoveItem}>Remove</RemoveButton>
        </ButtonsContainer>
      </ItemContainer>
    </>
  );
};

export default CartItemContainer;
