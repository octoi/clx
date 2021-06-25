import React from 'react';
import { useHistory } from 'react-router-dom';
import { FloatingBtn } from './styledComponents';

export default function FloatingButton() {
	const history = useHistory();

	return (
		<FloatingBtn onClick={() => history.push('/sell')}>Sell A Product</FloatingBtn>
	)
}
