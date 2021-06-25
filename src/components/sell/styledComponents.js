import styled from 'styled-components';

export const CoverImageContainer = styled.div`
    width: 100%;
    background-color: var(--secondaryAccentColor);
    height: 25vh;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        opacity: 0.9;
    }

    img {
        width: 60px;
    }
`

export const CoverDisplayImageContainer = styled.div`
    cursor: pointer;
    transition: 0.3s;
    border: 2px solid transparent;
    height: 20vh;
    background: var(--secondaryColor);
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
        border: 2px solid var(--primaryAccentColor);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const InputContainer = styled.div`
    margin-top: 50px;
`

export const CustomInput = styled.input`
    background: var(--primaryColor);
    border: 2px solid transparent;
    border-radius: 5px;
    width: 100%;
    padding: 10px;
    transition: 0.3s;

    &:focus {
        border: 2px solid var(--primaryAccentColor);
    } 
`

export const ClickItem = styled.p`
    color: #fff;
    font-size: 25px;
    font-weight: 600;

    @media (max-width: 600px) {
        font-size: 20px;
        font-weight: normal;
        margin-top: 20px;
    }
`

export const FlexClickItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    @media (max-width: 600px) {
        align-items: flex-start;
        justify-content: space-evenly;
        flex-direction: column;
        margin-top: 0;
    }
`

export const CustomTextArea = styled.textarea`
    width: 100%;
    background: var(--secondaryColor);
    color: #fff;
    padding: 20px;
    margin-top: 50px;
    border: 2px solid transparent;
    transition: 0.3s;
    font-size: 25px;
    font-weight: 600;

    &:focus {
        border: 2px solid var(--primaryAccentColor);
    }

    @media (max-width: 600px) {
        font-size: 20px;
        font-weight: normal;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;

    button {
        margin-top: 10px;
        margin-left: 10px;

        &:nth-child(1) {
            margin-left: 0px;
        }
    }

    @media (max-width: 510px) {
        flex-direction: column;

        button {
            width: 100%;
            margin-left: 0px;
        }
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