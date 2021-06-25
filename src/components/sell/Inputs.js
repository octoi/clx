import React from 'react';
import AlertModal from './AlertModel';
import { InputContainer, ClickItem, FlexClickItem, CustomTextArea } from './styledComponents';

export default function Inputs({ title, price, description, location, setTitle, setPrice, setDescription, setLocation }) {
	return (
		<InputContainer>
			<FlexClickItem>
				<AlertModal title="Add title" value={title} setValue={setTitle} placeholder="product title">
					<ClickItem>{title === '' ? "Click To Add Title" : title}</ClickItem>
				</AlertModal>
				<AlertModal title="Add price" value={price} setValue={setPrice} placeholder="price in number" isNumber>
					<ClickItem>{price === '' ? "Click To Add Price" : '₹ ' + price}</ClickItem>
				</AlertModal>
			</FlexClickItem>
			<FlexClickItem>
				<AlertModal title="Add location" value={location} setValue={setLocation} placeholder="where are you living ??">
					<ClickItem>{location === '' ? "Click To Add Location" : location}</ClickItem>
				</AlertModal>
			</FlexClickItem>
			<CustomTextArea placeholder="Type product description" rows="5" value={description} onChange={(e) => setDescription(e.target.value)} />
		</InputContainer>
	)
}
