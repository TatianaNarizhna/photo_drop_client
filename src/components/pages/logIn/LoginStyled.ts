import styled from "styled-components";

export const Title = styled.h2`
  font-family: ${(props) => props.theme.font.futura};
  font-weight: ${(p) => p.theme.fontWeight.bold};
  font-size: ${(p) => p.theme.fontSize.large};
  line-height: 26.4px;
  text-align: center;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  /* position: relative; */

  & .selected-flag {
  }

  & .react-tel-input {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 20px;
  }

  & .react-tel-input .flag-dropdown {
    position: static;
    width: 70px;
    height: 40px;
    background-color: var(--input_background);
    border: 1px solid var(--border);
    border-radius: 10px;
    margin-right: 10px;
    outline: transparent;
  }

  & .arrowCustom {
    position: absolute;
    /* z-index: 1; */
    cursor: pointer;
    top: 314px;
    left: 50px;

    @media screen and (min-width: 1440px) {
      top: 314px;
      left: 825px;
    }
  }

  & .react-tel-input .form-control {
    position: static;
    display: inline-flex;
    align-items: center;
    padding: 15px 13px 14px 13px;
    min-width: 265px;
    height: 40px;
    border-radius: 10px;
    background-color: var(--input_background);
    border: 1px solid var(--border);
  }

  & .react-tel-input .country-list {
    position: absolute;
    top: -210px;
    left: 50%;
    transform: translateX(-50vw);
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: calc(100vh - 56px);
    z-index: 50;
    box-shadow: none;
  }

  & li {
    width: 350px;
    border-bottom: 1px solid var(--border);
  }

  & .react-tel-input .country-list .country {
    padding: 15px 9px;
  }

  & .arrow {
    display: none;
  }
`;

export const FormContent = styled.div`
  width: 100%;
  margin: 136px 0 0 0;
`;

export const EnterText = styled.h3`
  font-family: ${(props) => props.theme.font.futura};
  font-weight: ${(p) => p.theme.fontWeight.medium};
  font-size: ${(p) => p.theme.fontSize.medium18};
  line-height: 23.8px;
  margin: 14px 0 19px 0;
`;

export const InputWrapp = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 345px;
`;

export const Button = styled.button`
  margin-bottom: 20px;
  min-width: 345px;
  cursor: pointer;
  border-radius: 50px;
  padding: 14px 20px;
  background-color: var(--button);
  font-family: futura-pt, sans-serif;
  font-weight: ${(p) => p.theme.fontWeight.medium};
  font-size: ${(p) => p.theme.fontSize.medium18};
  line-height: 23.08px;
  color: var(--white);
  border: none;
`;

export const TextPolicy = styled.p`
  margin-bottom: 38px;
  color: var(--policy_gray);
  font-family: ${(props) => props.theme.font.futura};
  font-weight: ${(p) => p.theme.fontWeight.normal};
  font-size: ${(p) => p.theme.fontSize.small};
  line-height: 17.95px;

  & .link {
    color: var(--policy_gray);
    text-decoration: underline;
    text-decoration-color: var(--button);
  }

  & .link:visited {
    color: var(--policy_gray);
    text-decoration-color: var(--button);
  }
`;
