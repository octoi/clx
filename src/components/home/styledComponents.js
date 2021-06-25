import styled from 'styled-components';

export const FloatingBtn = styled.button`
    background-color: var(--primaryAccentColor);
    padding: 13px 38px;
    border-radius: 30px;
    border: 2px solid var(--primaryAccentColor);
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.5s;
    z-index: 10;

    position: fixed;
    margin-bottom: 30px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    &:hover {
        background: none;
    }

    @media (max-width: 495px){
        font-size: 15px;
    }
`

export const ProductContainer = styled.div`
    background: var(--secondaryColor);
    border-radius: 12px;
    cursor: pointer;
    transition: 0.5s ease-out;
    border: 2px solid var(--primaryColor);
    margin-top: 20px;

    display: inline-block;
    width: calc(100%);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
        transform: rotate(2deg) scale(1.1);
        border: 2px solid var(--primaryAccentColor);
        box-shadow: var(--secondaryColor) 0px 8px 24px;
        z-index: 5;
    }

    img {
        border-radius: 12px 12px 0 0;
        width: 100%;
        aspect-ratio: 1920 / 1080;
        object-fit: cover;
    }

    .details {
        padding: 20px;
        display: inline-block;
        width: calc(100%);
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .price {
        font-size: 30px;
        font-weight: bold;
    }

    .title {
        font-size: 25px;
        margin-top: 30px;
        opacity: 0.5;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .minute-details {
        display: flex;
        justify-content: space-between;

        p {
            font-size: 18px;
            opacity: 0.5;
        }
    }

    @media (max-width: 1635px){
        .price {
            font-size: 25px;
        }

        .title {
            font-size: 20px;
        }

        .minute-details {
            p {
                font-size: 15px;
                opacity: 0.5;
            }
        }
    }

`

export const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 1635px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1210px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 825px){
        grid-template-columns: repeat(1, 1fr);
    }
`