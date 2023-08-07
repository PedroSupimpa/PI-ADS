import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "@/components/SearchBar";
import {
  IconContainer,
  LocationContainer,
  NavContainer,
  RightSideIcons,
  SeachContainer,
} from "./style";
import LocationModal from "../LocationModal";

const Nav = () => {
  return (
    <nav>
      <NavContainer>
        <IconContainer>
          <MenuIcon style={{ color: "#232323" }} />
        </IconContainer>
        <div style={{ color: "#232323" }}>Home</div>

        <SeachContainer>
          <SearchBar placeholder="Search ..." />
        </SeachContainer>

        <LocationContainer>
          <LocationModal locationValue="Taguatinga" />
        </LocationContainer>

        <RightSideIcons>
          <IconContainer>
            <AccountCircleIcon style={{ color: "#232323" }} />
          </IconContainer>

          <IconContainer>
            <ShoppingCartIcon style={{ color: "#232323" }} />
          </IconContainer>
        </RightSideIcons>
      </NavContainer>
    </nav>
  );
};

export default Nav;
