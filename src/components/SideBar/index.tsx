import { SideBarContainer, IconContainer } from "./styles";
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
      <IconContainer>
        <CloseIcon onClick={closeSideBar} />
      </IconContainer>
    </SideBarContainer>
  );
};

export default SideBar;
