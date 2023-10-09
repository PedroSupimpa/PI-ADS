"use client";

import ImageTextCard from "@/components/ImageTextCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Aling,
  PageContent,
  VoucherCarouselContainer,
  responsive,
  voucherCarousel,
} from "./styles";
import Nav from "@/components/nav";
import VoucherImageAnchor from "@/components/VoucherImageAnchor";

import voucherTest7 from "@/imgTest/voucherTest7.png";
import voucherTest4 from "@/imgTest/voucherTest4.png";
import voucherTest5 from "@/imgTest/voucherTest5.png";
import voucherTest6 from "@/imgTest/voucherTest6.png";
import voucherTest8 from "@/imgTest/voucherTest8.png";
import extra_img from "@/imgTest/extra_img.jpg";
import drogasil_img from "@/imgTest/drogasil_img.webp";
import kalunga_img from "@/imgTest/kalunga_img.webp";
import oba_img from "@/imgTest/oba_img.png";

import Footer from "@/components/Footer/index,";

export default function MainPage() {
  return (
    <>
      <Nav />
      <Aling>
        <PageContent>
          <VoucherCarouselContainer>
            <Carousel responsive={voucherCarousel}>
              <VoucherImageAnchor
                voucherImage={voucherTest7}
              ></VoucherImageAnchor>
              <VoucherImageAnchor
                voucherImage={voucherTest8}
              ></VoucherImageAnchor>
              <VoucherImageAnchor
                voucherImage={voucherTest4}
              ></VoucherImageAnchor>
              <VoucherImageAnchor
                voucherImage={voucherTest5}
              ></VoucherImageAnchor>
              <VoucherImageAnchor
                voucherImage={voucherTest6}
              ></VoucherImageAnchor>
            </Carousel>
          </VoucherCarouselContainer>
          <Carousel responsive={responsive}>
            <ImageTextCard
              title="Extra"
              subtitle="30 min"
              image={extra_img}
            ></ImageTextCard>

            <ImageTextCard
              title="Drogasil"
              subtitle="30 min"
              image={drogasil_img}
            ></ImageTextCard>

            <ImageTextCard
              title="Kalunga"
              subtitle="30 min"
              image={kalunga_img}
            ></ImageTextCard>

            <ImageTextCard
              title="Oba Hortifruti"
              subtitle="30 min"
              image={oba_img}
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
        </PageContent>
      </Aling>
      <Footer />
    </>
  );
}
