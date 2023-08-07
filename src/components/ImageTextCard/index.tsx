import { IImageTextCard } from "@/types/types";
import {
  Container,
  Subtitle,
  Title,
  Image,
  ImageContainer,
  TextContainer,
} from "./styles";

const ImageTextCard = ({ title, subtitle, image }: IImageTextCard) => {
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

export default ImageTextCard;
