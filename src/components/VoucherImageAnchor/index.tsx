import Link from "next/link";
import { VoucherContainer, VoucherImage } from "./styles";
import { StaticImageData } from "next/image";

interface IVoucherImageAnchor {
  voucherImage: string | StaticImageData;
}

const VoucherImageAnchor = ({ voucherImage }: IVoucherImageAnchor) => {
  const imageSrc =
    typeof voucherImage === "string" ? voucherImage : voucherImage.src;

  return (
    <VoucherContainer>
      <Link href="">
        <VoucherImage src={imageSrc} />
      </Link>
    </VoucherContainer>
  );
};

export default VoucherImageAnchor;
