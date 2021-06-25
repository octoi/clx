import styled from 'styled-components';

export const CoverImageContainer = styled.div`
    margin-top: 30px;
    transition: 0.3s;
    cursor: pointer;
    border: 2px solid transparent;

    &:hover {
        border-color: var(--primaryAccentColor);
    }

    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }

    ul li button { display: none; }

    .slick-arrow {
        &:before {
            
        }
    }
`

export const ProductDetailContainer = styled.div`
    margin-top: 30px;
    
    p {
        color: #fff;
        font-size: 25px;
        font-weight: 600;
    }

    section {
        opacity: 0.5;
        text-align: right;
        font-size: 23px;
        font-weight: 600;
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
    }

    @media (max-width: 600px) {
        div {
            align-items: flex-start;
            justify-content: space-evenly;
            flex-direction: column;
            margin-top: 0;
        }

        p {
            font-size: 20px;
            font-weight: normal;
            margin-top: 20px;
        }

        section {
            text-align: left;
            margin-top: 10px;
        }

        button {
            margin-top: 20px;
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

export const Description = styled.p`
    font-size: 20px;
    opacity: 0.5;
    margin-top: 50px;
`

export const UserDetail = styled.article`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: start !important;
    background: var(--secondaryColor);
    width: fit-content;
    padding: 20px;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: var(--primaryAccentColor);
    }

    img {
        width: 75px;
        height: 75px;
        border-radius: 20px;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        margin-left: 20px;
    }

    span {
        font-size: 20px;
        opacity: 0.5;
    }

    .name {
        font-size: 25px;
        opacity: 1;
    }

    @media (max-width: 605px) {
        width: 100%;
    }

`