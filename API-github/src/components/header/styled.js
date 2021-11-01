import styled from 'styled-components';

// --------------- Barra de busca ---------------
export const Wrapper = styled.div`
    display: flex;
    min-width: 20%;
    justify-content: space-between;
    padding: 24px;
    margin-left: 12px;

    input {
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 100%;
        height: 44px;
        padding: 8px;
        font-weight: 500;
    }

    .buscar {
        background-color: #225ed8;
        padding: 8px 16px;
        margin: 0 16px;
        border-radius: 8px;
        font-weight: bold;
        font-size: 16px;

        &:hover {
            background-color: #2c5282;
            box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2)
        }

        span {
            font-weight: bold;
            color: #ffff;
        }
    }
`;
