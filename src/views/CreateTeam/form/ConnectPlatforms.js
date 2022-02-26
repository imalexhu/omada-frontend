import React from "react";
import platforms from '../../../stubbedData'


import {
    Box,
    HStack,
} from "@chakra-ui/react";




const ConnectPlatforms = () => {


    return (
        <React.Fragment>
            <Box
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight={400}
                color="gray.700"
            >
                Select the platforms you wish to{" "}
                <Box as="span" fontWeight={700} color="#0053CD">Integrate.</Box>
            </Box>
            <HStack w="100%" spacing={2}>
                {platforms.map(p => { console.log(p) })}
            </HStack>
        </React.Fragment>
    );
}

export default ConnectPlatforms;