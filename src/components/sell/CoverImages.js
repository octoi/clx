import { useRef, useState } from 'react';
import { CoverImageContainer, CoverDisplayImageContainer } from './styledComponents';
import { VisuallyHidden, useToast, useDisclosure, Spinner, Grid, AlertDialogCloseButton, Button } from '@chakra-ui/react';
import { AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, } from '@chakra-ui/react';

export default function CoverImage({ coverImages, setCoverImages }) {
	const [isLoading, setIsLoading] = useState(false);
	const [currentImage, setCurrentImage] = useState(null);

	const { isOpen, onOpen, onClose } = useDisclosure();
	const toast = useToast();
	const cancelRef = useRef();
	const fileInput = useRef();

	const handleClick = () => {
		if (isLoading) return;

		fileInput.current.click();

		fileInput.current.addEventListener("change", event => {
			let file = event.target.files[0];

			setIsLoading(true)

			if (!file) {
				toast({
					title: "Oops something bad happened",
					description: "This maybe the problem of stupid developer who wrote this code",
					isClosable: true,
					duration: 5000,
					status: "error",
					position: "top-right",
				});
				setIsLoading(false)
				return
			};

			if (file.type.substring(0, 5) !== "image") {
				toast({
					title: "Cannot use this file",
					description: "Invalid file format, use an image file",
					isClosable: true,
					duration: 5000,
					status: "error",
					position: "top-right",
				});
				return
			}

			var reader = new FileReader();

			reader.onloadend = e => {
				let imgData = {
					src: e.target.result,
					info: event.target.files[0],
				}
				setCoverImages([...coverImages, imgData])
				setIsLoading(false)
			}

			if (file) reader.readAsDataURL(file);
		});
	}

	const removeImage = (id, permission) => {
		if (!permission) {
			setCurrentImage(id);
			onOpen();
			return;
		}

		if (currentImage === null) {
			onClose();
			return;
		};

		let covers = [];
		coverImages.map((img, idx) => {
			if (idx !== currentImage) covers.push(img);
			return img
		});

		setCoverImages(covers)
		setCurrentImage(null)
		onClose();
	}

	return (
		<div>

			{coverImages.length !== 3 && (
				<CoverImageContainer onClick={handleClick}>
					{isLoading ? <Spinner /> : <img src="/images/add_image.svg" alt="add images" />}
				</CoverImageContainer>
			)}

			<Grid marginTop={5} templateColumns="repeat(3, 1fr)" gap={6}>
				{coverImages.length !== 0 && coverImages.map((imageData, idx) => (
					<CoverDisplayImageContainer key={idx} onClick={() => removeImage(idx)}>
						<img src={imageData.src} alt={idx} />
					</CoverDisplayImageContainer>
				))}
			</Grid>

			<VisuallyHidden>
				<input
					ref={fileInput}
					type="file"
					accept="image/*"
				/>
			</VisuallyHidden>


			<AlertDialog
				motionPreset="slideInBottom"
				leastDestructiveRef={cancelRef}
				onClose={onClose}
				isOpen={isOpen}
				isCentered
				scrollBehavior="inside"
			>
				<AlertDialogOverlay />

				<AlertDialogContent style={{ background: 'var(--secondaryColor)' }}>
					<AlertDialogHeader>Remove Image?</AlertDialogHeader>
					<AlertDialogCloseButton />
					<AlertDialogBody>
						<img src={coverImages[currentImage]?.src} alt={currentImage} style={{ marginBottom: "20px" }} />
						Are you sure you want to remove this image ?
					</AlertDialogBody>
					<AlertDialogFooter>
						<Button style={{ background: 'var(--primaryAccentColor)' }} ref={cancelRef} onClick={onClose}>No</Button>
						<Button
							style={{ background: 'var(--dangerColor)', color: "white" }}
							colorScheme="red"
							ml={3}
							onClick={() => removeImage(currentImage, true)}
						>Yes</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	)
}
