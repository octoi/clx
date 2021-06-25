import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CustomButton, ButtonsContainer } from './styledComponents';
import { Button, AlertDialogCloseButton, useDisclosure, useToast, Spinner } from '@chakra-ui/react';
import { AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter } from '@chakra-ui/react';
import useCtx from '../../context/useCtx';
import addDataToFirebase from '../../firebase/helpers/createProduct';

function checkCanSubmit(coverImages, title, description, location, price) {
	return coverImages.length !== 0 && title.trim().length !== 0 && description.trim().length !== 0 && location.trim().length !== 0 && price.trim().length !== 0;
}

function CancelProduct({ onClose, isOpen }) {
	const history = useHistory();
	const cancelRef = useRef();

	const handleRedBtn = () => {
		history.push('/');
		return;
	}

	return (
		<AlertDialog
			motionPreset="slideInBottom"
			leastDestructiveRef={cancelRef}
			onClose={onClose}
			isOpen={isOpen}
			isCentered
		>
			<AlertDialogOverlay />

			<AlertDialogContent style={{ background: 'var(--secondaryColor)' }}>
				<AlertDialogHeader>Remove Image?</AlertDialogHeader>
				<AlertDialogCloseButton />
				<AlertDialogBody>
					Are you sure ??, your all progress will be lost
				</AlertDialogBody>
				<AlertDialogFooter>
					<Button style={{ background: 'var(--primaryAccentColor)' }} ref={cancelRef} onClick={onClose}>No</Button>
					<Button
						style={{ background: 'var(--dangerColor)', color: "white" }}
						colorScheme="red"
						ml={3}
						onClick={handleRedBtn}
					>Yes</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}

export default function Buttons({ coverImages, title, description, location, price, }) {
	const [loading, setLoading] = useState(false);
	const canSubmit = checkCanSubmit(coverImages, title, description, location, price);
	const { isOpen: cancelIsOpen, onClose: cancelOnClose, onOpen: cancelOnOpen } = useDisclosure();
	const { user } = useCtx();
	const toast = useToast();
	const history = useHistory();

	const sellProduct = () => {
		if (!canSubmit || loading) return;
		setLoading(true);
		const data = {
			images: coverImages,
			title,
			description,
			location,
			price,
			createdAt: Date.now(),
			sellerEmail: user.email,
		}
		addDataToFirebase(data).then(() => {
			toast({
				title: "Published your product",
				description: "Now your product is available online",
				status: "success",
				duration: 5000,
				isClosable: true,
				position: 'top-right',
			});
			history.push('/');
			setLoading(false);
		}).catch((err) => {
			setLoading(false)
			console.log(err);
			toast({
				title: "Failed to sell",
				description: "An error occured on uploading to cloud",
				status: "error",
				duration: 5000,
				isClosable: true,
				position: 'top-right',
			});
		})
	}

	return (
		<div>
			{/* visible parts  */}
			<ButtonsContainer>
				<Button
					size="lg"
					as={CustomButton}
					style={{ background: 'var(--primaryAccentColor)' }}
					disabled={!canSubmit}
					onClick={sellProduct}
				>{loading ? <Spinner /> : "Sell My Product"}</Button>
				<Button
					size="lg"
					as={CustomButton}
					style={{ background: 'var(--dangerColor)' }}
					onClick={cancelOnOpen}
				>Cancel</Button>
			</ButtonsContainer>
			{/* invisible parts  */}
			<CancelProduct isOpen={cancelIsOpen} onClose={cancelOnClose} />
		</div>
	)
}