import React from "react";

import {
    Container,
    Box,
    Flex
} from "@chakra-ui/react";

const Teams = () => {
    return (
        <Container maxW="container.lg">
            <Box bg="white" border="1px" borderColor="gray.100" rounded="full" shadow="lg">
                <Flex p={6} px={8} alignItems="center" justifyContent="space-between">
                    <Box>Test</Box>
                </Flex>
            </Box>
        </Container>
    );
}

export default Teams;