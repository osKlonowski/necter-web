import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: #00ffbe;
  white-space: nowrap;
  padding: 14px 48px;
  color: #010606;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  justify-content: center;
  display: flex;
  font-weight: normal;
  letter-spacing: 1px;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #b4bced;
    color: #010606;
  }
`;
