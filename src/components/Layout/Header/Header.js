import React from "react"
import { NavLink } from 'react-router-dom';

import navLinks from "../../../constants/navLinks.constants"

import HeaderLink from "./HeaderLink"
import {
	Box,
	Container,
	Flex,
	HStack
} from "@chakra-ui/react"
import { RiHomeSmileFill } from "react-icons/ri";

const Header = () => {
	return (
		<Box w="100%" bg="white" position="absolute">
			<Container maxW='container.xl'>
				<Flex h={16} alignItems='center' justifyContent='space-between'>
					<Box
						as={NavLink}
						to="/"
						fontWeight={700}
						color="#0053CD"
					>
						<RiHomeSmileFill size={30} />
					</Box>
					<HStack spacing={8}>
		
						{navLinks.defaultLinks.map((item) => (
							<HeaderLink key={item.to} toRoute={item.to}>
								{item.name}
							</HeaderLink>
						))}
					</HStack>
				</Flex>
			</Container>
		</Box>
	);
}

export default Header
