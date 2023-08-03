import { ISimpleAnchorCard } from "@/types/types";
import {
  Container,
  Subtitle,
  Title,
  Image,
  ImageContainer,
  TextContainer,
} from "./styles";

const SimpleAnchorCard = ({ title, subtitle, image }: ISimpleAnchorCard) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TextContainer>
    </Container>
  );
};

export default SimpleAnchorCard;
