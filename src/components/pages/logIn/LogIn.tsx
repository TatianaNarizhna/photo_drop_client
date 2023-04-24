import { FC, useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import Dropdown from "react-phone-input-2";

import "react-phone-input-2/lib/style.css";
import Header from "../../common/header/Header";
import Section from "../../common/section/Section";
import Svg from "../../../svgSprite/symbol-defs.svg";
import {
  Form,
  Title,
  FormContent,
  EnterText,
  InputWrapp,
  Button,
  TextPolicy,
} from "./LoginStyled";

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
            <InputWrapp>
              <Title>Let’s get started</Title>
              <EnterText>Enter your phone number</EnterText>

              <PhoneInput
                country={"us"}
                onChange={handlePhoneChange}
                dropdownClass="custom-dropdown"
                searchPlaceholder="Search"
                specialLabel="Select Country"
              />
              <svg width={13.5} height={6.5} className="arrowCustom">
                <use xlinkHref={`${Svg}#icon-arrow_down`}></use>
              </svg>
              <Button type="submit">Create account</Button>
              <TextPolicy>
                By proceeding, you consent to get WhatsApp or SMS messages, from
                PhotoDrop and its affiliates to the number provided. Text “STOP”
                to 89203 to opt out.{" "}
              </TextPolicy>

              <TextPolicy>
                By continuing, you indicate that you have read and agree to our
              </TextPolicy>
              <TextPolicy>
                <Link to="/terms" className="link">
                  Terms of Use
                </Link>{" "}
                &{" "}
                <Link to="/policy" className="link">
                  Privacy Policy
                </Link>
              </TextPolicy>
            </InputWrapp>
          </Form>
        </FormContent>
      </Section>
    </>
  );
};

export default LogIn;
