import React from "react";
import FadeIn from "react-fade-in";

import {
    VStack,
    Box,
    Textarea
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
                    Write a Short{" "}
                    <Box as="span" fontWeight={700} color="#0053CD">Project Description.</Box>
                </Box>
                <Textarea
                    h={40}
                    value={values["teamDescription"]}
                    placeholder="Team Description"
                    size="lg"
                    resize="none"
                    onChange={handleFormData("teamDescription")}
                />
            </VStack>
        </FadeIn>
    );
}

export default TeamName;