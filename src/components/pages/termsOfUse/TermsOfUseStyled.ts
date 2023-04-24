import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px 15px;
`;

export const Title = styled.h2`
  margin-bottom: 14px;
  text-align: center;
  font-family: ${(p) => p.theme.font.termina};
  font-weight: ${(p) => p.theme.fontWeight.bold};
  font-size: ${(p) => p.theme.fontSize.medium18};
  line-height: 21.6px;
`;

export const TextBold = styled.p`
  font-weight: ${(p) => p.theme.fontWeight.bold};
`;

export const MainText = styled.p`
  font-family: ${(p) => p.theme.font.termina};
`;
