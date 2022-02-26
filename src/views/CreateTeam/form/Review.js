import React from "react";
import FadeIn from "react-fade-in";

import {
    VStack,
    Box,
    Link
} from "@chakra-ui/react";

const Review = ({ values }) => {
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
                    Review Your{" "}
                    <Box as="span" fontWeight={700} color="#0053CD">Team Information.</Box>
                </Box>
                <VStack w="100%" spacing={8} alignItems="flex-start">
                    <FadeIn>
                        <Box mb={3} fontSize="lg" fontWeight={700}>
                            Team Name:{" "}
                            <Box as="span" fontWeight={400}>{values["teamName"]}</Box>
                        </Box>
                        <Box mb={3} fontSize="lg" fontWeight={700}>
                            Team Description:{" "}
                            <Box as="span" fontWeight={400}>{values["teamDescription"]}</Box>
                        </Box>
                        <Box mb={3} fontSize="lg" fontWeight={700}>
                            Platform Integrations:{" "}                 
                            {values["selectedIntegrations"].map((item, index) => (
                                <Box as="span" fontWeight={400} key={item.name}>
                                    {item.name}{index === values["selectedIntegrations"].length - 1 ? "" : ", "}
                                </Box>
                            ))}    
                        </Box>
                        {values["selectedIntegrations"].map((item) => (
                            <Box mb={3} fontSize="lg" fontWeight={700} key={item.link}>
                                {item.name} Link:{" "}
                                <Link as="span" fontWeight={400}>{item.link}</Link>
                            </Box>
                        ))}
                    </FadeIn>
                </VStack>
            </VStack>
        </FadeIn>
    );
}

export default Review;