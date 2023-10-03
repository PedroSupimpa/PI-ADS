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
  const imageSrc = typeof image === "string" ? image : image.src;
  return (
    <Container>
      <ImageContainer>
        <Image src={imageSrc} />
      </ImageContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TextContainer>
    </Container>
  );
};

export default ImageTextCard;
