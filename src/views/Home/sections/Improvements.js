import React from "react";
import FadeIn from "react-fade-in";
import { MarkedText } from "@devkosta/react-text-marker";

import {
	Flex,
	VStack,
    Box,
    Container
} from "@chakra-ui/react";

const Improvements = () => {
    return (
         <Flex
            w="100vw"
            h="auto"
            py={8}
            bg="gray.100"
            sx={{
                "backgroundImage": `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1005%26quot%3b)' fill='none'%3e%3cpath d='M1721.98 412.19C1603.9 412 1488.43 342.19 1254.89 342.19 1021.34 342.19 1042.64 421.05 787.79 412.19 532.95 403.33 483.2-27.32 320.7-67.32' stroke='rgba(195%2c 224%2c 255%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1586.04 208.88C1449.18 216.73 1351.34 468.26 1101.99 466.48 852.64 464.7 786.45 10.38 617.94-31.22' stroke='rgba(195%2c 224%2c 255%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1491.29 236.92C1302.78 240.87 1142.63 495.55 782.44 494.52 422.26 493.49 290.97 6.39 73.6-19.74' stroke='rgba(195%2c 224%2c 255%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1454.52 270.22C1339.01 272.11 1249.83 421.03 1015.97 415.82 782.12 410.61 732.9-13.88 577.43-55.56' stroke='rgba(195%2c 224%2c 255%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1539.64 187.58C1407.15 188.69 1230.11 325.57 1027 321.98 823.89 318.39 876.73-22.96 770.68-75.03' stroke='rgba(195%2c 224%2c 255%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1005'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
                "backgroundSize": "cover",
                "backgroundRepeat": "no-repeat",
            }}
        >
            <VStack w="100%" mt={{ base: 6, md: 8 }} px={6} pb={2} spacing={6} textAlign="center">
                <FadeIn>
                    <Box
                        w="100%"
                        mb={6}
                        textAlign="center"
                        fontSize={{ base: "xl", md: "2xl" }}
                        fontWeight={400}
                        color="gray.700"
                    >
                        <Box as="span" fontWeight={700} color="#0053CD">Omada</Box>{" "}
                        Improves Your Teams Onboarding Process by{" "}
                        <Box as="span" fontWeight={700} color="#0053CD">78%</Box>
                    </Box>
                    <Container maxW="container.lg">
                        <Box
                            w="100%"
                            mb={6}
                            lineHeight={2}
                            textAlign="center"
                            fontSize={{ base: "lg", md: "xl" }}
                            fontWeight={400}
                            color="gray.700"
                        >
                            <MarkedText
                                textToMark={`
                                    Onboarding new members into your team project can be a long and exhausting task.
                                    Omada aims to reduce the amount of time you spend establishing communication and workspace environments,
                                    so that you can spend more time working on your project.
                                `}
                                isCaseSensitive={true}
                                markedWords={["Omada", "reduce", "establishing communication", "workspace environments,", "working on your project."]}
                                markerColor="#b3d2fc"
                            />
                        </Box>
                    </Container>
                </FadeIn>
            </VStack>
        </Flex>
    );
}

export default Improvements;