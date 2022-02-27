import React from "react";
import { NavLink } from 'react-router-dom';

import {
	Box,
	Container,
	Flex,
	HStack,
    VStack
} from "@chakra-ui/react"
import { RiHomeSmileFill } from "react-icons/ri";


const Footer = () => {
    return (
        <Box w="100%" bg="gray.200" position="absolute">
			<Container maxW='container.xl'>
				<Flex
                    h="auto"
                    alignItems='center'
                    justifyContent='space-between'
                    py={{ base: 16, lg: 10 }}
                    flexDirection={{ base: "column", lg: "row" }}
                >
                    <Box
                        as={NavLink}
                        to="/"
                        fontWeight={500}
                        color="#0053CD"
                    >
                        <HStack w="100%">
                            <RiHomeSmileFill size={50} />
                            <Box pl={4} pt={2}>© {new Date().getFullYear()} Omada, Inc. All rights reserved.</Box>
                        </HStack>
                    </Box>
                    <HStack spacing={14}>
                        <VStack alignItems="flex-start" spacing={3}>
                            <Box fontWeight={600}>Socials</Box>
                            <Box>Twitter</Box>
                            <Box>Instagram</Box>
                            <Box>LinkedIn</Box>
                        </VStack>
                        <VStack alignItems="flex-start" spacing={3}>
                            <Box fontWeight={600}>Legal</Box>
                            <Box>Licenses</Box>
                            <Box>Terms of Service</Box>
                            <Box>Privacy</Box>
                        </VStack>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    );
}

export default Footer;