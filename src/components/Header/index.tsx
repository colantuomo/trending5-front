import Image from "next/image";
import { HeaderWrapper } from "./styles";

const logo = "/trending5-logo.svg";
const LOGO_SIZE_W = 200;
const LOGO_SIZE_H = 50;

export function Header() {
  return (
    <HeaderWrapper>
      <Image
        alt="Trending5 Logo"
        src={logo}
        width={LOGO_SIZE_W}
        height={LOGO_SIZE_H}
      />
    </HeaderWrapper>
  );
}
