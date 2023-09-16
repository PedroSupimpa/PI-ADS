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
import CartComponent from "../CartComponent";

const Nav = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [showCartBar, setShowCartBar] = useState(false);

  const handleSideBar = () => setShowSideBar(!showSideBar);
  const handleCartBar = () => setShowCartBar(!showCartBar);

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
          <ShoppingCartIcon
            style={{ color: "#232323" }}
            onClick={handleCartBar}
          />
        </IconContainer>
      </RightSideIcons>

      {showSideBar && <SideBar active={setShowSideBar} />}

      <CartComponent
        active={showCartBar}
        activeHandler={setShowCartBar}
        location="SHA 105, Arniqueiras - DF"
        vendorName="McDonalds"
        vendorImage="https://static.wayup.com/company_logo/9TMTMF6RyK_20180828.jpg"
        items={[
          {
            quantity: 1,
            title: "Mc Oferta Big Mac",
            value: 29.9,
            description:
              "1x Big Mac, 1x Coca-Cola Original 400ml, 1x McFritas Grande",
          },
          {
            quantity: 2,
            title: "Big Pica 6mil new voltraton magatron 7000",
            value: 9.9,
            description:
              "2x Big Pica, 1x Coca-Cola Original 400ml, 2x McPicas Grande",
          },
        ]}
      />
    </NavContainer>
  );
};

export default Nav;
