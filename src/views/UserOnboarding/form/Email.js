import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  HStack,
  Input,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Spinner,
} from "@chakra-ui/react";

const Email = () => {
  let navigate = useNavigate();
  const { isOpen, onOpen } = useDisclosure();

  const handleSubmit = () => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
    onOpen();
  };

  return (
    <React.Fragment>
      <Box
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight={400}
        color="gray.700"
      >
        What's Your{" "}
        <Box as="span" fontWeight={700} color="#0053CD">
          Email?
        </Box>
      </Box>
      <HStack w="100%" spacing={2}>
        <Input p={3} placeholder="Email" size="lg" bg="white" rounded="full" />
      </HStack>
      <Button colorScheme="messenger" size="lg" p={5} onClick={handleSubmit}>
        Submit
      </Button>
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

export default Email;
