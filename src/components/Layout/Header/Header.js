import React from "react";

import navLinks from "../../../constants/navLinks.constants";

import HeaderLink from "./HeaderLink";
import {
    Box,
    Container,
    Flex,
    HStack,
    Button
} from "@chakra-ui/react";

const Header = () => {
    return (
        <Box w="100%" position={{ base: "none", md: "absolute" }} bg="white">
            <Container maxW="container.xl">
                <Flex h={16} alignItems="center" justifyContent="space-between">
                    <HStack spacing={8}>
                        {navLinks.defaultLinks.map((item) => (
                            <HeaderLink key={item.to} toRoute={item.to}>{item.name}</HeaderLink>
                        ))}
                    </HStack>
                    <HStack spacing={8}>
                        <Button colorScheme="messenger">Connect with Discord</Button>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    );
}

export default Header;