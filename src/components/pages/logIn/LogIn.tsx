import { FC, useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Header from "../../common/header/Header";
import Section from "../../common/section/Section";
import Svg from "../../../svgSprite/symbol-defs.svg";
import { Form, Title, FormContent, EnterText } from "./LoginStyled";

const LogIn: FC = () => {
  const [phone, setPhone] = useState<string>("");

  const handlePhoneChange = (value: string) => {
    setPhone(`+${value}`);
  };

  return (
    <>
      <Header />
      <Section>
        {" "}
        <FormContent>
          {" "}
          <Form>
            <Title>Let’s get started</Title>
            <EnterText>Enter your phone number</EnterText>
            <div>
              <PhoneInput country={"us"} onChange={handlePhoneChange} />
              <svg width={13.5} height={6.5} className="arrow">
                <use xlinkHref={`${Svg}#icon-arrow_down`}></use>
              </svg>
            </div>
          </Form>
        </FormContent>
      </Section>
    </>
  );
};

export default LogIn;
