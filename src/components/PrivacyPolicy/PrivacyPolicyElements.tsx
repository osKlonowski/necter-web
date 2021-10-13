import styled from "styled-components";

export const PdfPageWrapper = styled.div`
  min-height: 800px;
  background: #010606;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-self: center;
  align-items: center;
  padding-top: 80px;
  z-index: 1;
`;

export const PageFlipperBtn = styled.div`
  display: block;
  z-index: 2;
  color: #fff;
  font-size: 18px;
  padding: 18px;
`;
