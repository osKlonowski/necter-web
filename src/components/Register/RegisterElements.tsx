import styled from "styled-components";

export const ImageViewer = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50px;
`;

export const PageWrapper = styled.div`
  color: #fff;
  background: #b4bced;
  justify-content: center;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 700px;
  padding: 80px;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const Input = styled.input`
  font-size: 14px;
  padding: 10px;
  margin: 10px 0px;
  background: #fff;
  border: none;
  border-radius: 4px;
  ::placeholder {
    color: #111111;
  }
`;

export const Select = styled.select`
  font-size: 14px;
  padding: 10px;
  margin: 10px 0px;
  background: #fff;
  border: none;
  border-radius: 4px;
  ::placeholder {
    color: #111111;
  }
`;

export const SubmitButton = styled.input`
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  padding: 8px 16px;
  color: #111111;
  background-color: #00ffbe;
  border-radius: 12px;
  font-size: 16px;
`;
