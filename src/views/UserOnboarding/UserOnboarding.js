import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ProfilePicture, UserName, PlatformLinks } from "./form";
import {
  Flex,
  Container,
  VStack,
  HStack,
  IconButton,
  Progress,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Spinner,
} from "@chakra-ui/react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const maxPage = 3;

const UserOnboarding = () => {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
  });

  let navigate = useNavigate();
  const { isOpen, onOpen } = useDisclosure();

  const handleSubmit = () => {
    setTimeout(() => {
      navigate("/members");
    }, 5000);
    onOpen();
  };

  const nextForm = () => {
    if (page === maxPage) {
      return;
    }

    setPage((page) => page + 1);
  };

  const prevForm = () => {
    if (page === 1) {
      return;
    }

    setPage((page) => page - 1);
  };

  const handleInputData = (input) => (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  return (
    <React.Fragment>
      <Flex w="100%" h="100vh" bg="white" alignItems="center">
        <Container maxW="container.md" mb={16}>
          {page === 1 && (
            <UserName handleFormData={handleInputData} values={formData} />
          )}
          {page === 2 && <ProfilePicture />}
          {page === 3 && <PlatformLinks />}
          {/* {page === 4 && (
            <Email handleFormData={handleInputData} values={formData} />
          )} */}

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
              {page < maxPage && (
                <IconButton
                  colorScheme="messenger"
                  aria-label="Next Form"
                  size="lg"
                  rounded="full"
                  onClick={nextForm}
                  icon={<BsArrowRight size={22} />}
                />
              )}
              {page === maxPage && (
                <Button
                  colorScheme="messenger"
                  size="lg"
                  rounded="full"
                  onClick={handleSubmit}
                >
                  Get Started
                </Button>
              )}
            </HStack>

            <Progress
              w="100%"
              mt={8}
              value={page * (100 / maxPage)}
              size="xs"
            />
          </VStack>
        </Container>
      </Flex>
      <Modal blockScrollOnMount={false} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent alignItems={"center"} mt={250}>
          <ModalHeader>Automating Integration</ModalHeader>
          <ModalBody>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
              mb={4}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};

export default UserOnboarding;
