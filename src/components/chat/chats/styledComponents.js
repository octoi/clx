import styled from 'styled-components';

export const Container = styled.div`
    background: var(--secondaryColor);
    padding: 20px;
    margin-top: 20px;
`

export const ChatsContainer = styled.div`
    margin-top: 30px;
`

export const ChatCardContainer = styled.div`
    padding: 15px 20px;
    display: flex;
    align-items: center;
    background: var(--primaryColor);
    margin-top: 10px;
    border-radius: 10px;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
        background: var(--primaryAccentColor);
    }

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 3px solid var(--primaryAccentColor);
    }
`