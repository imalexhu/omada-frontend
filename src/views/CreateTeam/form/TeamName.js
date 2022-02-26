import React from "react";
import FadeIn from "react-fade-in";

import {
    VStack,
    Box,
    Input
} from "@chakra-ui/react";

const TeamName = ({ handleFormData, values }) => {
    return (
        <FadeIn>
            <VStack w="100%" spacing={8} alignItems="center">
                <Box
                    w="100%"
                    textAlign="center"
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontWeight={400}
                    color="gray.700"
                >
                    What's Your{" "}
                    <Box as="span" fontWeight={700} color="#0053CD">Team Name?</Box>
                </Box>
                <Input
                    value={values["teamName"]}
                    placeholder="Team Name"
                    size="lg"
                    onChange={handleFormData("teamName")}
                />
            </VStack>
        </FadeIn>
    );
}

export default TeamName;