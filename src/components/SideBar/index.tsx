import {
  SideBarContainer,
  IconContainer,
  SectionContainer,
  SectionItem,
  SectionTitle,
  SideBarHeader,
  ItemValue,
} from "./styles";
import CloseIcon from "@mui/icons-material/Close";

interface ISideBar {
  active: (value: boolean) => void;
}

const SideBar = ({ active }: ISideBar) => {
  const closeSideBar = () => {
    active(false);
  };
  return (
    <SideBarContainer>
      <SideBarHeader>
        <div>LOGO</div>
        <IconContainer>
          <CloseIcon onClick={closeSideBar} />
        </IconContainer>
      </SideBarHeader>
      <SectionContainer>
        <SectionTitle>Section</SectionTitle>
        <SectionItem>
          <ItemValue>Restaurantes</ItemValue>
          <IconContainer> {">"} </IconContainer>
        </SectionItem>
        <SectionItem>
          <ItemValue>Mercados</ItemValue>
          <IconContainer> {">"} </IconContainer>
        </SectionItem>
        <SectionItem>
          <ItemValue>PetShop</ItemValue>
          <IconContainer> {">"} </IconContainer>
        </SectionItem>
        <SectionItem>
          <ItemValue>Material de Contrucao</ItemValue>
          <IconContainer> {">"} </IconContainer>
        </SectionItem>
      </SectionContainer>
    </SideBarContainer>
  );
};

export default SideBar;
