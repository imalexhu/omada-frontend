import React from "react";

import {
    Box,
    HStack,
    Textarea
} from "@chakra-ui/react";

const TeamDescription = () => {
    return (
        <React.Fragment>
            <Box
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight={400}
                color="gray.700"
            >
                Write a short{" "}
                <Box as="span" fontWeight={700} color="#0053CD">Project Description.</Box>
            </Box>
            <HStack w="100%" spacing={2}>
                <Textarea
                    p={3}
                    placeholder="Team Description"
                    size="lg"
                    bg="white"
                    rounded="xl"
                    resize="none"
                />
            </HStack>
        </React.Fragment>
    );
}

export default TeamDescription;