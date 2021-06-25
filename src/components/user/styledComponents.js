import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        border: 2px solid var(--primaryAccentColor);
        border-radius: 20px;
        width: 30vh;
        height: 30vh;
        cursor: pointer;
    }
`

export const CustomButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 20px;
    border-radius: 10px;
    transition: 0.3s;

    &:hover {
        opacity: 0.8;
    }
`