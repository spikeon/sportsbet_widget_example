import styled from 'styled-components';

export const QuestionsContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;    
    flex-grow: 1;
`;

export const ButtonContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px dashed #333;
`;

export const QuestionsButton = styled.button`
    background-color: #333;
    color: #ddd;
    font-size: 16px;
    border: none;
    padding: 10px 20px;
    :disabled {
        background-color: #aaa;
        color: #ccc;
    }
`;