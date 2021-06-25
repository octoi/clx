import { useState } from 'react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	useDisclosure,
	Button
} from '@chakra-ui/react';
import { CustomInput } from './styledComponents';

export default function AlertModal({ value, setValue, children, title, isNumber, placeholder }) {
	const { onClose, onOpen, isOpen } = useDisclosure();
	const [valueState, setValueState] = useState(value);

	return (
		<div>
			<div style={{ cursor: "pointer" }} onClick={onOpen}>{children}</div>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				isCentered
			>
				<ModalOverlay />
				<ModalContent style={{ background: 'var(--secondaryColor)' }}>
					<ModalHeader>{title}</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<CustomInput placeholder={placeholder} type={isNumber ? "number" : "text"} onChange={(e) => setValueState(e.target.value)} value={valueState} />
					</ModalBody>

					<ModalFooter>
						<Button style={{ background: 'var(--dangerColor)' }} onClick={onClose}>cancel</Button>
						<Button
							style={{ background: 'var(--primaryAccentColor)', color: "white" }}
							colorScheme="red"
							ml={3}
							onClick={() => {
								setValue(valueState);
								onClose();
							}}
							disabled={valueState.trim().length === 0}
						>Done</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</div>
	)
}
