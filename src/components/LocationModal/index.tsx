import LocationOnIcon from "@mui/icons-material/LocationOn";
import NearMeIcon from "@mui/icons-material/NearMe";
import CloseIcon from "@mui/icons-material/Close";
import {
  ContainerLocation,
  IconContainer,
  LocationValue,
  LocationModalContainer,
  LocationSearch,
  Text,
  LiveLocation,
} from "./styles";
import { ILocationModal } from "@/types/types";
import { useState } from "react";

const LocationModal = ({ locationValue }: ILocationModal) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <ContainerLocation onClick={handleOpenModal}>
        <IconContainer>
          <LocationOnIcon style={{ color: "#232323" }} />
        </IconContainer>
        <LocationValue>{locationValue}</LocationValue>
      </ContainerLocation>
      {openModal && (
        <LocationModalContainer>
          <CloseIcon
            onClick={handleOpenModal}
            style={{
              cursor: "pointer",
              top: "0.5vw",
              right: "0.5vw",
              position: "absolute",
            }}
          />
          <Text></Text>
          <LocationSearch>
            <IconContainer style={{ margin: "0  0 0 0.3vw " }}>
              <LocationOnIcon style={{ color: "#232323" }} />
            </IconContainer>
            <input
              type="text"
              placeholder={"Digite o endereço"}
              style={{
                width: "100%",
                height: "80%",
                border: "none",
                outline: "none",
              }}
            />
          </LocationSearch>
          <LiveLocation>
            <NearMeIcon />
            <p>Usar localizacao atual</p>
          </LiveLocation>
        </LocationModalContainer>
      )}
    </>
  );
};

export default LocationModal;
