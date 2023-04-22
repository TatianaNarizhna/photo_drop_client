import { FC } from "react";
import Logo from "../../../svgSprite/symbol-defs.svg";
import { HeaderStyled } from "./HeaderStyled";

const Header: FC = () => {
  return (
    <HeaderStyled>
      <svg width={125} height={16}>
        <use xlinkHref={`${Logo}#icon-PhotoDrop-Logo-Inline-Two_Toned`}></use>
      </svg>
    </HeaderStyled>
  );
};

export default Header;
