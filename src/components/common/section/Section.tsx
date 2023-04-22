import { FC } from "react";
import { SectionStyled } from "./SectionSlyled";

interface SectionProps {
  children: React.ReactNode;
}

const Section: FC<SectionProps> = ({ children }) => {
  return <SectionStyled>{children}</SectionStyled>;
};

export default Section;
