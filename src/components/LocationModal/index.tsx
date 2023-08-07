import LocationOnIcon from "@mui/icons-material/LocationOn";
import { IconContainer, LocationValue } from "./styles";
import { ILocationModal } from "@/types/types";

const LocationModal = ({ locationValue }: ILocationModal) => {
  return (
    <>
      <IconContainer>
        <LocationOnIcon style={{ color: "#232323" }} />
      </IconContainer>
      <LocationValue>{locationValue}</LocationValue>
    </>
  );
};

export default LocationModal;
