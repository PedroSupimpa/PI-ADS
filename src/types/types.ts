import { StaticImageData } from "next/image";

export interface IImageTextCard {
  title: string;
  subtitle: string;
  image: string | StaticImageData;
}

export interface ILocationModal {
  locationValue: string;
}
