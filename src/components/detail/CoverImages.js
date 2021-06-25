import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useRef } from 'react';
import { CoverImageContainer } from './styledComponents';
import { useDisclosure, AlertDialogCloseButton } from '@chakra-ui/react';
import { AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody } from '@chakra-ui/react';

export default function CoverImages({ images }) {
	const [currentImg, setCurrentImg] = useState(0);

	let settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	}

	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = useRef();

	return (
		<CoverImageContainer>
			<Slider {...settings}>
				{images.map((img, idx) => <img onDoubleClick={() => {
					setCurrentImg(idx);
					onOpen();
				}} src={img} key={idx} alt={idx} />)}
			</Slider>

			<AlertDialog
				motionPreset="slideInBottom"
				leastDestructiveRef={cancelRef}
				onClose={onClose}
				isOpen={isOpen}
				isCentered
				size="xl"
				scrollBehavior="inside"
			>
				<AlertDialogOverlay />

				<AlertDialogContent style={{ background: 'var(--secondaryColor)' }}>
					<AlertDialogHeader>Look 👀</AlertDialogHeader>
					<AlertDialogCloseButton />
					<AlertDialogBody>
						<img src={images[currentImg]} alt={currentImg} style={{ marginBottom: "20px" }} />
					</AlertDialogBody>
				</AlertDialogContent>
			</AlertDialog>
		</CoverImageContainer>
	)
}
