import React, { useCallback, useState } from "react";
import FadeIn from "react-fade-in";

import { Box, VStack, Image } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";

import { Center, Icon, Text } from "@chakra-ui/react";
import { AiOutlineUpload, AiFillRocket } from "react-icons/ai";

const ProfilePicture = () => {
  const [imageReceived, setImageReceived] = useState(false);
  const onDrop = useCallback(() => {
    setImageReceived(true);
  }, [setImageReceived]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  const text = isDragActive
    ? "Time to Drop!"
    : "Drag your profile picture here";
  return (
    <React.Fragment>
      <FadeIn>
        <VStack w="100%" spacing={8} alignItems="center">
          <Box
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight={400}
            color="gray.700"
          >
            What's Your{" "}
            <Box as="span" fontWeight={700} color="#0053CD">
              Profile Picture?
            </Box>
          </Box>
          {imageReceived && (
            <Image
              borderRadius="full"
              boxSize="150px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              mb={7}
            />
          )}
          {!imageReceived && (
            <Center
              w="100%"
              h="180px"
              p={10}
              cursor="pointer"
              borderRadius={20}
              border="2px"
              borderColor="gray.400"
              bg={isDragActive ? "gray.100" : "transparent"}
              _hover={{ bg: "gray.100" }}
              transition="background-color 0.2s ease"
              {...getRootProps()}
            >
              <input {...getInputProps()} />

              {isDragActive ? (
                <Icon as={AiFillRocket} mr={2} />
              ) : (
                <Icon as={AiOutlineUpload} mr={2} />
              )}
              <Text>{text}</Text>
            </Center>
          )}
        </VStack>
      </FadeIn>
    </React.Fragment>
  );
};

export default ProfilePicture;
