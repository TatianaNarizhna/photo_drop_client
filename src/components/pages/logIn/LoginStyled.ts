import styled from "styled-components";

export const Title = styled.h2`
  font-family: ${(props) => props.theme.font.futura};
  font-weight: ${(p) => p.theme.fontWeight.bold};
  font-size: ${(p) => p.theme.fontSize.large};
  line-height: 26.4px;
  text-align: center;
`;

export const Form = styled.form`
  /* position: relative; */

  & .arrow {
    position: absolute;
    z-index: 1;
    cursor: pointer;
    top: 17px;
    left: 44px;
  }

  & .react-tel-input {
    position: relative;
    width: 100%;
  }
`;

export const FormContent = styled.div`
  width: 100%;
  margin: 136px 0 0 0;
`;

export const EnterText = styled.p`
  font-family: ${(props) => props.theme.font.futura};
  font-weight: ${(p) => p.theme.fontWeight.medium};
  font-size: ${(p) => p.theme.fontSize.medium18};
  line-height: 23.8px;
  margin: 14px 0 19px 0;
`;
