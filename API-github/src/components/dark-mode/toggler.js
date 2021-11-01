import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"
import {DarkTheme} from "@styled-icons/fluentui-system-filled/DarkTheme"

const Button = styled.button`
    display: flex;
    justify-content: flex-end;
    margin: 8px 0 0 8px;
    cursor: pointer;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    color: #e6e6e6;
    border-radius: 100%;
    padding: 0;
    
`;

const Toggle = ({ theme, toggleTheme }) => {
    return (
        <Button onClick={toggleTheme} >
            <DarkTheme size="22"/>
        </Button>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;
