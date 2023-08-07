"use client";

import ImageTextCard from "@/components/ImageTextCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "./styles";
import Nav from "@/components/nav";

export default function MainPage() {
  return (
    <>
      <Nav />
      <Carousel responsive={responsive}>
        <ImageTextCard
          title="Zezin, o corno"
          subtitle="o maior corno do mundo"
          image="https://media.sketchfab.com/models/243f544627214afeb17535ce53ca75fa/thumbnails/220b50db33464ae5aa902a30704bb92f/1024x576.jpeg"
        ></ImageTextCard>

        <ImageTextCard
          title="Jukinha, o corno"
          subtitle="o maior corno do mundo"
          image="https://media.sketchfab.com/models/243f544627214afeb17535ce53ca75fa/thumbnails/220b50db33464ae5aa902a30704bb92f/1024x576.jpeg"
        ></ImageTextCard>

        <ImageTextCard
          title="Jukinha, o corno"
          subtitle="o maior corno do mundo"
          image="https://play-lh.googleusercontent.com/TdByGSl0ydL445smYzXVKWW-7E5G_jG0MJAti9DlevS1unPdaAJmzETUZ2F7-PZSovws"
        ></ImageTextCard>

        <ImageTextCard
          title="Jukinha, o corno"
          subtitle="o maior corno do mundo"
          image="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt70e0b34417caba99/62915270285a180f5793b6c0/WR_RoseQuartzPoro_Circle_1024.jpg"
        ></ImageTextCard>

        <ImageTextCard
          title="Jukinha, o corno"
          subtitle="o maior corno do mundo"
          image="https://media.sketchfab.com/models/243f544627214afeb17535ce53ca75fa/thumbnails/220b50db33464ae5aa902a30704bb92f/1024x576.jpeg"
        ></ImageTextCard>

        <ImageTextCard
          title="Joaozin, o corno"
          subtitle="o maior corno do mundo"
          image="https://static.wikia.nocookie.net/logopedia/images/d/db/Fortnite_S1.svg/revision/latest?cb=20210330161743.jpeg"
        ></ImageTextCard>

        <ImageTextCard
          title="Josezin, o corno"
          subtitle="o maior corno do mundo"
          image="https://static.wikia.nocookie.net/logopedia/images/2/2e/Fortnite_Chapter_2_Season_2.svg/revision/latest/scale-to-width-down/250?cb=20210330161744"
        ></ImageTextCard>
      </Carousel>
    </>
  );
}
