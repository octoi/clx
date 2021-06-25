import React from 'react';
import moment from 'moment';
import { ProductContainer } from './styledComponents';
import { Link } from 'react-router-dom';

export default function Product({ product }) {
	return (
		<ProductContainer>
			<Link to={`/detail/${product.id}`}>
				<img src={product.images[0]} alt={product.title} />

				<div className="details">

					<p className="price">₹{product.price}</p>
					<p className="title">{product.title}</p>

					<div className="minute-details">

						<p>{product.location}</p>
						<p>{moment(product.createdAt).fromNow()}</p>

					</div>
				</div>

			</Link>
		</ProductContainer>
	)
}
