import SearchIcon from "@mui/icons-material/Search";
import { IconContainer, SearchBarContainer } from "./styles";
import React from "react";

interface ISearchBar {
  placeholder: string;
}

const SearchBar = ({ placeholder }:ISearchBar) => {
  return (
    <SearchBarContainer>
      <input
        type="text"
        placeholder={placeholder}
        style={{
          width: "100%",
          height: "80%",
          border: "none",
          outline: "none",
          marginLeft: "0.5vw",
          backgroundColor: "#f2f2f2",
        }}
      />
      <IconContainer>
        <SearchIcon />
      </IconContainer>
    </SearchBarContainer>
  );
};

export default SearchBar;
