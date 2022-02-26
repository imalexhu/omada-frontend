import { React, useEffect, useState } from "react";
import { BsStack } from "react-icons/bs"
import {
	Box,
	Flex,
	Heading,
	Icon,
	Image,
	Spacer,
	Text,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react";


const ProjectInfoModal = ({ isOpen, onClose, project, creator }) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Modal Title</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Lorem count={2} />
				</ModalBody>

				<ModalFooter>
					<Button colorScheme='blue' mr={3} onClick={onClose}>
						Close
					</Button>
					<Button variant='ghost'>Secondary Action</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}

export default ProjectInfoModal;