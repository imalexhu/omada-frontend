import React from "react";

import {
    Flex,
    Box,
    VStack,
    Container
} from "@chakra-ui/react";

const Teams = () => {
    return (
        <React.Fragment>
            <Flex h="30vh" mb={5} bg="#F5F5F6" alignItems="center">
                <VStack w="100vw">
                    <Box
                        fontSize={{ base: "4xl", md: "5xl" }}
                        fontWeight={400}
                        color="gray.700"
                    >
                        Join a{" "}
                        <Box as="span" fontWeight={700} color="#0053CD">Team.</Box>
                    </Box>
                </VStack>
            </Flex>
            <Container maxW="container.lg">
                <Box
                    mb={6}
                    bg="white"
                    border="1px"
                    borderColor="gray.100"
                    rounded="full"
                    shadow="lg"
                    sx={{
                        position: "sticky",
                        top: 6
                    }}
                >
                    <Flex p={6} px={8} alignItems="center" justifyContent="space-between">
                        <Box>Test</Box>
                    </Flex>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Teams;