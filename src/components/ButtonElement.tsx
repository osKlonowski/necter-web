import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    background: #01BF71;
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
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #010606;
        color: #01BF71;
    }
`