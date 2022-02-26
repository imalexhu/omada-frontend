import React from "react";

import navLinks from "../../../constants/navLinks.constants";

import {
    Box,
    Container,
    Flex,
    HStack,
    Button
} from "@chakra-ui/react";

const Header = () => {
    return (
        <Box bg="white">
            <Container maxW="container.xl">
                <Flex h={16} alignItems="center" justifyContent="space-between">
                    <HStack spacing={8}>
                        {navLinks.defaultLinks.map((item) => (
                            <Box key={item.to}>{item.name}</Box>
                        ))}
                    </HStack>
                    <HStack spacing={8}>
                        <Button colorScheme="twitter">Connect with Discord</Button>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    );
}

export default Header;