import React from "react";
import FadeIn from "react-fade-in";
import { NavLink } from 'react-router-dom';

import GetStartedCard from "./GetStartedCard";
import {
	Flex,
	Box,
	VStack
} from "@chakra-ui/react";

const GetStarted = () => {
    return (
        <Flex
            w="100vw"
            h="auto"
            py={8}
        >
            <VStack w="100%" mt={{ base: 6, md: 8 }} px={6} spacing={6} textAlign="center">
                <FadeIn>
                    <Box
                        w="100%"
                        mb={6}
                        textAlign="center"
                        fontSize={{ base: "xl", md: "2xl" }}
                        fontWeight={400}
                        color="gray.700"
                    >
                        Get Started in{" "}
                        <Box as="span" fontWeight={700} color="#0053CD">3 Steps</Box>
                    </Box>
                    <Flex
                        spacing={4}
                        gap={{ base: 1, lg: 6 }}
                        flexDirection={{ base: "column", lg: "row" }}
                    >
                        <FadeIn delay={100}>
                            <GetStartedCard number={1} src="/assets/create.svg">
                                <Box fontSize="xl">
                                    <Box as={NavLink} to="/createteam" fontWeight={600} color="#0053CD">Create a Team</Box>
                                    {" "}or{" "}
                                    <Box as={NavLink} to="/user_onboarding" fontWeight={600} color="#0053CD">Join One</Box> 
                                </Box>
                            </GetStartedCard>
                        </FadeIn>
                        <FadeIn delay={200}>
                            <GetStartedCard number={2} src="/assets/join.svg">
                                <Box fontSize="xl">
                                    <Box as="span" fontWeight={600} color="#0053CD">Connect with Your Team</Box>
                                    {" "}via the{" "}
                                    <Box as="span" to="/user_onboarding" fontWeight={600} color="#0053CD">Integrated Platforms</Box> 
                                </Box>
                            </GetStartedCard>
                        </FadeIn>
                        <FadeIn delay={300}>
                            <GetStartedCard number={3} src="/assets/finished.svg">
                                <Box fontSize="xl">
                                    <Box as="span" to="/createteam" fontWeight={600} color="#0053CD">Start Developing!</Box>
                                </Box>
                            </GetStartedCard>
                        </FadeIn>
                    </Flex>
                </FadeIn>
            </VStack>
        </Flex>
    );
}

export default GetStarted;