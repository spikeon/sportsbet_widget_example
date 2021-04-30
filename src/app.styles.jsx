import styled from 'styled-components';

export const AppContainer = styled.div`
    max-width: 600px;
    max-height: 800px;
    min-height: 400px;
    padding: 20px 40px;
    background-color: #dfdfdf;
    border-radius: 5px;
    position: relative;
    display:flex;
    flex-direction: column;    
`;

export const AppHeader = styled.h1`
    margin-top: 0;
    flex-grow:0;
    text-align: center;
`;

export const CloseButton = styled.div`
    position: absolute;
    top: -5px;
    right: -5px;
    padding: 5px;
    border-radius: 20px;
    height: 20px;
    width: 20px;
    text-align: center;
    font-weight: bold;
    background-color: #333;
    color: #ccc;
`;
