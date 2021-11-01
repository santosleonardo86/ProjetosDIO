import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 32px;
`;

// Foto
export const WrapperImage = styled.img`
border-radius: 50%;
width: 220px;
height: 220px;
margin: 8px
`;

// Informações do usuário
export const WrapperInfoUser = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
height: auto;
margin-left: 40px;
height: 230px;

h1 {
    font-size: 32px;
    font-weight: bold;
}

h3 {
    font-size: 18px;
    font-weight: bold;
}

h4 {
    font-size: 16px;
    font-weight: bold;
}
`;

export const WrapperUserGeneric = styled.div`
display: flex;
align-items: center;
margin-top: 8px;

h3 {
    margin-right: 8px;
}

a {
    font-size: 18px;
    color: #3182ce;
    font-weight: bold;
}
`;

// Seguidores, seguindo etc
export const WrapperStatusCount = styled.div`
display: flex;
align-items: center;
margin-top: 24px;

div {
    margin: 0 8px 0 0px;
    text-align: center;
    border: 1px solid #ccc;
    padding: 8px 16px 8px 16px;
    border-radius: 16px;
    /* background-color: #e6e6e6;  */
}
`;