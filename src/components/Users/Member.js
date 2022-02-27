import { React, useState, useEffect } from "react"
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Tag,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react"

import UserProfile from "./UserProfile"

import {} from "@chakra-ui/react"
const Member = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const fetchUserImage = async (user) => {
    const url = "https://api.github.com/users/" + user.githubId
    const response = await fetch(url)
    const data = await response.json()
    setImage(data.avatar_url)
    setLoaded(true)
  }

  const [image, setImage] = useState("")
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (image === "") {
      fetchUserImage(props.member)
    }
  }, [image])
  return (
    loaded && (
      <>
        <Center py={6}>
          <Box
            maxW={"320px"}
            w={"full"}
            bg='white'
            boxShadow={"2xl"}
            rounded={"lg"}
            p={6}
            textAlign={"center"}
          >
            <Avatar
              size={"xl"}
              src={image}
              alt={"Avatar Alt"}
              mb={4}
              pos={"relative"}
            />
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              {props.member.username}
            </Heading>
            <Text fontWeight={600} color={"gray.500"} mb={4}>
              {props.member.career} @ {props.member.company}
            </Text>

            <HStack>
              <Text>Project: </Text>
              {props.member.currentProjectsInvolved.map(
                (currentProjectsInvolved) => (
                  <Tag colorScheme='green' key={currentProjectsInvolved}>
                    {currentProjectsInvolved}
                  </Tag>
                )
              )}
            </HStack>
            <HStack>
              <Text>Position: </Text>
              {props.member.roles.map((currentProjectsInvolved) => (
                <Tag colorScheme='blue' key={currentProjectsInvolved}>
                  {currentProjectsInvolved}
                </Tag>
              ))}
            </HStack>
            {/* <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Badge px={2} py={1} bg='gray' fontWeight={"400"}>
            #art
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #photography
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #music
          </Badge>
        </Stack> */}

            <Stack mt={8} direction={"row"} spacing={4}>
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}
                onClick={onOpen}
              >
                View Profile
              </Button>
            </Stack>
          </Box>
        </Center>
        <Modal isOpen={isOpen} onClose={onClose} size='xl'>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Profile</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <UserProfile user={props.member.id - 1} />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  )
}

export default Member
