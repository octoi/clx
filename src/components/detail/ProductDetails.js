import React, { useRef, useState, useEffect } from 'react';
import moment from 'moment';
import useCtx from '../../context/useCtx';
import { useHistory } from 'react-router-dom';
import { ProductDetailContainer, CustomButton, Description, UserDetail } from './styledComponents';
import { Button, Spinner } from '@chakra-ui/react';
import { getUserData } from '../../firebase/helpers/firebaseUser';

export default function ProductDetails({ product }) {
	const [loading, setLoading] = useState(false);
	const [seller, setSeller] = useState(null);
	const { user } = useCtx();
	const deleteBtn = useRef();
	const history = useHistory();

	useEffect(() => {
		getUserData(product?.sellerEmail).then(userData => {
			setSeller(userData);
		})
	}, [product]);

	const deleteProduct = async () => {
		const word = "Click To Confirm"

		if (deleteBtn.current.innerText !== word) {
			deleteBtn.current.innerText = word;
			return;
		}

		setLoading(true);

		await product?.ref.delete();
		window.location.href = "/"

	}

	return (
		<ProductDetailContainer>
			<div>
				<p>{product?.title}</p>
				<p>₹{product?.price}</p>
			</div>
			<div>
				{user.email === product?.sellerEmail ? (
					<Button
						size="lg"
						as={CustomButton}
						style={{ background: 'var(--dangerColor)' }}
						onClick={deleteProduct}
						ref={deleteBtn}
					>
						{loading ? <Spinner /> : "Delete Product"}
					</Button>
				) : (
					<Button
						size="lg"
						as={CustomButton}
						style={{ background: 'var(--primaryAccentColor)' }}
						onClick={() => history.push(`/chat/${product?.sellerEmail}`)}
					>Contact Seller</Button>
				)}
				<section>
					<span>{product?.location}</span><br />
					<span>{moment(product?.date).fromNow()}</span>
				</section>
			</div>
			<Description>{product?.description}</Description>
			{seller && (
				<UserDetail onClick={() => {
					history.push(`/user/${seller.email}`)
				}}>
					<img src={seller.profile} alt={seller.name} />
					<div>
						<span className="name">{seller.name}</span>
						<span>{seller.email}</span>
					</div>
				</UserDetail>
			)}
		</ProductDetailContainer>
	)
}
