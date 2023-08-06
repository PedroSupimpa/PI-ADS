import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "@/components/SearchBar/page";
import { IconContainer, NavContainer, SeachContainer } from "./style";

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

        <IconContainer>
          <AccountCircleIcon style={{ color: "#232323" }} />
        </IconContainer>

        <IconContainer>
          <ShoppingCartIcon style={{ color: "#232323" }} />
        </IconContainer>
      </NavContainer>
    </nav>
  );
};

export default Nav;
