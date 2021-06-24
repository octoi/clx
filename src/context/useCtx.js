import { useContext } from 'react';
import { StateContext } from './context';

export default function useCtx() {
    return useContext(StateContext);
}