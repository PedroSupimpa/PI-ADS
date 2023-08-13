"use client";
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
import { useState } from "react";
import SideBar from "@/components/SideBar";
import Link from "next/link";

const Nav = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const handleSideBar = () => setShowSideBar(!showSideBar);

  return (
    <NavContainer>
      <IconContainer>
        <MenuIcon style={{ color: "#232323" }} onClick={handleSideBar} />
      </IconContainer>
      <div style={{ color: "#232323" }}>Home</div>

      <SeachContainer>
        <SearchBar placeholder="Search ..." />
      </SeachContainer>

      <LocationContainer>
        <LocationModal locationValue="Taguatinga" />
      </LocationContainer>

      <RightSideIcons>
        <Link href="/login">
          <IconContainer>
            <AccountCircleIcon style={{ color: "#232323" }} />
          </IconContainer>
        </Link>

        <IconContainer>
          <ShoppingCartIcon style={{ color: "#232323" }} />
        </IconContainer>
      </RightSideIcons>

      {showSideBar && <SideBar active={setShowSideBar} />}
    </NavContainer>
  );
};

export default Nav;
