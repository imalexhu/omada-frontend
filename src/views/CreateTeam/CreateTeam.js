import React, { useEffect, useState } from "react";

import {
  TeamName,
  TeamDescription,
  ConnectPlatforms,
  AddIntegrationLinks,
  Review,
} from "./form";
import {
  Flex,
  Container,
  Progress,
  HStack,
  VStack,
  IconButton,
  Button,
} from "@chakra-ui/react";

import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import axios from "axios";
import { Link } from "react-router-dom";

const serverURL = `http://localhost:5000/`

const CreateTeam = ({ user }) => {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    teamName: "",
    teamDescription: "",
    selectedIntegrations: [],
  });

  const nextForm = () => setPage((page) => page + 1);
  const prevForm = () => {
    if (page === 1) return;
    setPage((page) => page - 1);
  };

  const handleInputData = (input) => (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const handleSelectedData = (selected) => {
    setFormData((prevState) => ({
      ...prevState,
      selectedIntegrations: selected,
    }));
  };

  const handleIntegrationLinks = (name, link) => {
    const res = formData.selectedIntegrations.filter((item) => {
      return item.name === name;
    });

    res[0]["link"] = link;
  };

  const submit = () => {
    const project = {
      name: formData.teamName,
      description: formData.teamDescription,
      creator: user._id,
      platforms: formData.selectedIntegrations.map(si => ({
        platform: si.name,
        url: si.link,
      })),
      status: "INPROGRESS", // by default the user probs wants an active project
      participants: [],
    }
    const uploadData = async () => {
      // Uncomment this code when you want to test upload logic, but to prevent polution of data I'm disabling it
      // await axios.post(serverURL + "/create-project/" + user._id, project);
    }
    uploadData();
    return project;
  }

  return (
    <React.Fragment>
      <Flex w="100%" h="100vh" bg="white" alignItems="center">
        <Container maxW="container.md" mb={16}>
          {page === 1 && (
            <TeamName handleFormData={handleInputData} values={formData} />
          )}
          {page === 2 && (
            <TeamDescription
              handleFormData={handleInputData}
              values={formData}
            />
          )}
          {page === 3 && (
            <ConnectPlatforms handleSelectedData={handleSelectedData} />
          )}
          {page === 4 && (
            <AddIntegrationLinks
              handleIntegrationLinks={handleIntegrationLinks}
              values={formData}
            />
          )}
          {page === 5 && <Review values={formData} />}

          <VStack transition="0.1s ease-in">
            <HStack
              my={8}
              spacing={6}
              alignItems="center"
              justifyContent="space-between"
            >
              {page > 1 && (
                <IconButton
                  colorScheme="messenger"
                  aria-label="Previous Form"
                  size="lg"
                  rounded="full"
                  onClick={prevForm}
                  icon={<BsArrowLeft size={22} />}
                />
              )}
              {page < 5 && (
                <IconButton
                  colorScheme="messenger"
                  aria-label="Next Form"
                  size="lg"
                  rounded="full"
                  onClick={nextForm}
                  icon={<BsArrowRight size={22} />}
                />
              )}
              {page === 5 && (
                <Link to="/teamview" state={submit()}>
                  <Button colorScheme="messenger" size="lg" rounded="full">
                    Get Started
                  </Button>
                </Link>
              )}
            </HStack>

            <Progress w="100%" mt={8} value={page * 20} size="xs" />
          </VStack>
        </Container>
      </Flex>
    </React.Fragment>
  );
};

export default CreateTeam;
