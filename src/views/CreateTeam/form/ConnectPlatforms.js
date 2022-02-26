import React, { useState, useEffect } from "react";
import FadeIn from "react-fade-in";

import platforms from '../../../stubbedData'

import PlatformItem from "./PlatformItem";
import {
    VStack,
    Box
} from "@chakra-ui/react";

const TeamName = ({ handleSelectedData }) => {
    const [selected, setSelected] = useState([]);

    const handleAddToSelected = (name, icon) => {
        if (selected.find((item) => item.name === name)) {
            const newSelected = selected.filter((item) => item.name !== name);

            setSelected(newSelected);
            return;
        }

        setSelected((prev) => (
            [...prev, { name: name, icon: icon, value: "" }]
        ))
    }

    useEffect(() => {
        handleSelectedData(selected)
    }, [selected])

    return (
        <FadeIn>
            <VStack w="100%" spacing={8} alignItems="center">
                <Box
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontWeight={400}
                    color="gray.700"
                >
                    Select the Platforms You Wish to{" "}
                    <Box as="span" fontWeight={700} color="#0053CD">Integrate.</Box>
                </Box>
                <VStack w="100%" maxH="50%">
                    <FadeIn>
                        {platforms.map((p) => (
                            <PlatformItem
                                mb={3}
                                icon={p.icon}
                                key={p.name}
                                selected={selected}
                                handleAddToSelected={handleAddToSelected}
                            >
                                {p.name}
                            </PlatformItem>  
                        ))}
                    </FadeIn>
                </VStack>
            </VStack>
        </FadeIn>
    );
}

export default TeamName;