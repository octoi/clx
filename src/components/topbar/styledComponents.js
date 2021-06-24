import styled from 'styled-components';
import { MenuButton } from '@chakra-ui/react';

export const TopBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 70px;
    }

`

export const TopBarSearch = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--secondaryColor);
    height: 50px;
    padding: 10px 20px;
    border-radius: 5px;
    width: 100%;
    margin: 0 20px;
    
    img {
        width: 20px;
    }
    
    input {
        font-size: 20px;
        margin-left: 10px;
        color: #fff;
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        width: 100%;
    }

    @media (max-width: 1635px){
        input {
            font-size: 18px;
        }
    }
`

export const TopBarMenuBtn = styled(MenuButton)`
    background: var(--secondaryColor);
    font-size: 20px;
    padding: 0px 15px;
    height: 50px;
    border-radius: 5px;

    img {
        display: none;
        width: 30px;
    }

    @media (max-width: 635px){
        p {
            display: none;
        }

        img {
            display: block;
        }
    }
`