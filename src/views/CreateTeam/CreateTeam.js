import React, { useState } from "react";

import {
    TeamName,
    TeamDescription,
    ConnectPlatforms,
    AddIntegrationLinks,
    Review
} from "./form";
import {
    Flex,
    Container,
    Progress,
    HStack,
    VStack,
    IconButton,
    Button
} from "@chakra-ui/react";

import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const CreateTeam = () => {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    teamName: "",
    teamDescription: "",
    selectedIntegrations: [],
  });

    const nextForm = () => setPage((page) => page + 1);
    const prevForm = () => {
        if (page === 1) return;
        setPage((page) => page - 1)
    };

    const handleInputData = (input) => (e) => {
        const { value } = e.target;
        setFormData(prevState => ({
            ...prevState, [input]: value
        }));
    }

    const handleSelectedData = (selected) => {
        setFormData(prevState => ({
            ...prevState, selectedIntegrations: selected
        }));
    }

    const handleIntegrationLinks = (name, link) => {
        const res = formData.selectedIntegrations.filter((item) => {
            return item.name === name;
        })

        res[0]["link"] = link
    }
    
    return (
        <React.Fragment>
            <Flex w="100%" h="100vh" bg="white" alignItems="center">
                <Container maxW="container.md" mb={16}>
                    {page === 1 && <TeamName handleFormData={handleInputData} values={formData} />}
                    {page === 2 && <TeamDescription handleFormData={handleInputData} values={formData} />}
                    {page === 3 && <ConnectPlatforms handleSelectedData={handleSelectedData} />}
                    {page === 4 && <AddIntegrationLinks handleIntegrationLinks={handleIntegrationLinks} values={formData} />}
                    {page === 5 && <Review values={formData} />}

                    <VStack transition="0.1s ease-in">
                        <HStack my={8} spacing={6} alignItems="center" justifyContent="space-between">
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
                            { page < 5 &&
                                <IconButton
                                    colorScheme="messenger"
                                    aria-label="Next Form"
                                    size="lg"
                                    rounded="full"
                                    onClick={nextForm}
                                    icon={<BsArrowRight size={22} />}
                                />
                            }
                            { page === 5 &&
                                <Button colorScheme="messenger" size="lg" rounded="full">Get Started</Button>
                            }
                        </HStack>

                        <Progress w="100%" mt={8} value={page * 20} size="xs" />
                    </VStack>
                </Container>
            </Flex>
        </React.Fragment>
    );
}

export default CreateTeam;