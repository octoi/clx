import { useState } from 'react';
import Buttons from '../components/sell/Buttons';
import CoverImages from '../components/sell/CoverImages';
import Inputs from '../components/sell/Inputs';

export default function Sell() {
	const [coverImages, setCoverImages] = useState([]);
	const [title, setTitle] = useState('');
	const [price, setPrice] = useState('');
	const [location, setLocation] = useState('');
	const [description, setDescription] = useState('');

	return (
		<div>
			<CoverImages coverImages={coverImages} setCoverImages={setCoverImages} />
			<Inputs
				title={title}
				location={location}
				description={description}
				price={price}
				setTitle={setTitle}
				setLocation={setLocation}
				setDescription={setDescription}
				setPrice={setPrice}
			/>
			<Buttons coverImages={coverImages} title={title} description={description} location={location} price={price} />
		</div>
	)
}
