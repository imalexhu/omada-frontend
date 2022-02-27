import React from "react";
import { ReactSVG } from "react-svg";

import {
    Flex,
    VStack,
    Center
} from "@chakra-ui/react";

const GetStartedCard = ({ children, number, src }) => {
    return (
        <Flex
            w="20rem"
            h="25rem"
            p={6}
            mb={10}
            bg="gray.100"
            rounded="2xl"
        >
            <VStack w="100%" pb={8} alignItems="center" justifyContent="space-between">
                <VStack spacing={6}>
                    <Flex boxSize="2.8rem" bgColor="#2784FE" rounded="full">
                        <Center m="auto" fontSize="xl" fontWeight={400} color="white">
                            {number}
                        </Center>
                    </Flex>
                    {children}
                </VStack>
                <ReactSVG 
                    src={src}
                    wrapper="span"
                    beforeInjection={(svg) => {
                        svg.setAttribute('style', 'width: 230px; height: auto;')
                    }}
                />
            </VStack> 
        </Flex>
    )
}

export default GetStartedCard;