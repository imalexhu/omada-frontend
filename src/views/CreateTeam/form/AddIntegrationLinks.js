import React from "react";
import FadeIn from "react-fade-in";

import DynamicIcon from "../../../components/DynamicIcon/DynamicIcon";
import {
    VStack,
    HStack,
    Box,
    Input
} from "@chakra-ui/react";

const AddIntegrationLinks = ({ values, handleIntegrationLinks }) => {
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
                    Add Invite Links to Your{" "}
                    <Box as="span" fontWeight={700} color="#0053CD">Integrations.</Box>
                </Box>
                <VStack as={FadeIn}>
                    {values["selectedIntegrations"].map((item) => (
                        <HStack mb={3} key={item.name}>
                            <DynamicIcon mr={3} iconName={item.icon} size={28} color="#0053CD" />
                            <Input
                                placeholder={`${item.name} Invite Link`}
                                size="lg"
                                onChange={(e) => handleIntegrationLinks(item.name, e.target.value)}
                            />
                        </HStack>
                    ))}
                </VStack>
            </VStack>
        </FadeIn>
    );
}

export default AddIntegrationLinks;