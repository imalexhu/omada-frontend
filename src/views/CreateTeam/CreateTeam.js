import React from "react";

import {
    Flex,
    Container,
    Box,
    VStack,
    HStack,
    Input,
    IconButton
} from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";

const CreateTeam = () => {
    return (
        <React.Fragment>
            <Flex h="100vh" bg="#F5F5F6" alignItems="center">
                <Container maxW="container.sm">
                    <VStack spacing={5} mb={24}>
                        <Box
                            fontSize={{ base: "4xl", md: "5xl" }}
                            fontWeight={400}
                            color="gray.700"
                        >
                            Create a{" "}
                            <Box as="span" fontWeight={700} color="#0053CD">Team.</Box>
                        </Box>
                        <HStack w="100%" spacing={2}>
                            <Input placeholder='Team Name' size='lg' bg="white" rounded="full" />
                            <IconButton
                                colorScheme="messenger"
                                aria-label="Create a Team"
                                size="lg"
                                rounded="full"
                                icon={<BsArrowRight size={22} />}
                            />
                        </HStack>
                    </VStack>
                </Container>
            </Flex>
        </React.Fragment>
    );
}

export default CreateTeam;