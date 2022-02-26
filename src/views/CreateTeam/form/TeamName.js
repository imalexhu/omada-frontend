import React from "react";

import {
    Box,
    HStack,
    Input
} from "@chakra-ui/react";

const TeamName = () => {
    return (
        <React.Fragment>
            <Box
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight={400}
                color="gray.700"
            >
                What's Your{" "}
                <Box as="span" fontWeight={700} color="#0053CD">Team Name?</Box>
            </Box>
            <HStack w="100%" spacing={2}>
                <Input
                    p={3}
                    placeholder="Team Name"
                    size="lg"
                    bg="white"
                    rounded="full"
                />
            </HStack>
        </React.Fragment>
    );
}

export default TeamName;