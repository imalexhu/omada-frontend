import React, { useEffect, useState } from "react";

import {
    TeamName,
    TeamDescription
} from "./form";
import {
    Flex,
    Container,
    VStack,
    HStack,
    IconButton
} from "@chakra-ui/react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const CreateTeam = () => {
    const [page, setPage] = useState(1);
    const [formData, setFormData] = useState({
        teamName: "",
        teamDescription: "",
    });

    const nextForm = () => setPage((page) => page + 1);
    const prevForm = () => {
        if (page === 1) return;

        setPage((page) => page - 1)
    };
    
    return (
        <React.Fragment>
            <Flex h="100vh" bg="#F5F5F6" alignItems="center">
                <Container maxW="container.md">
                    <VStack h="10vh" spacing={6}>
                        {page === 1 && <TeamName />}
                        {page === 2 && <TeamDescription />}

                        <HStack pt={4} spacing={8}>
                            {page > 1 && 
                                <IconButton
                                    colorScheme="messenger"
                                    aria-label="Previous Form"
                                    size="lg"
                                    rounded="full"
                                    onClick={prevForm}
                                    icon={<BsArrowLeft size={22} />}
                                />
                            }
                            <IconButton
                                colorScheme="messenger"
                                aria-label="Next Form"
                                size="lg"
                                rounded="full"
                                onClick={nextForm}
                                icon={<BsArrowRight size={22} />}
                            />
                        </HStack>
                    </VStack>
                </Container>
            </Flex>
        </React.Fragment>
    );
}

export default CreateTeam;