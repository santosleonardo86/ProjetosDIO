import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// ------------------------------ Repositories, Starred --------------------------------
export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    font-weight: 500;
    width: 100%;
    margin-top: 48px;
    margin-left: 16px;
`;

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
    border-radius: 16px;
    border: 1px solid #ccc;
    padding: 16px;
    user-select: none;
    cursor: pointer;
    z-index: 9999;
    background-color: '#FFF';
    margin: 8px;
    
    &:focus {
        outline: none; //não aparece a linha de contorno no botão
    }

    &.is-selected { //quando tiver selecionado...
        box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2)
    }
`;
WrapperTab.tabsRole = 'Tab';

// ----------------------------- Área dos repositórios ----------------------------
export const WrapperTabPanel = styled(TabPanel)`
    /* border: 1px solid #ccc; */
    margin-top: 16px;
    margin-left: 30px;

    &.is-selected {
        display: block;
    }
`;

WrapperTabPanel.tabsRole = 'TabPanel';

export const WrapperList = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap; //quebra linhas!!
`;
