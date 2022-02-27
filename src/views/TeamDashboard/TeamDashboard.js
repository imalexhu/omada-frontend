import React, { useEffect, useState } from "react"
import UserProfile from "../../components/Users/UserProfile"
import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Spacer,
  Stack,
  Text,
  useEditableState,
  VStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react"
import ParticipantCard from "../../components/ParticipantCard/ParticipantCard"
import { useLocation } from "react-router-dom"

import Members from "../../components/Users/Members"
import axios from "axios"

const profiles = [
  {
    profileName: "Che Kambouris",
    githubId: "chekambouris",
    roles: [],
    id: "2",
  },
  {
    profileName: "Alex Hu",
    githubId: "imalexhu",
    roles: [],
    id: "4",
  },
]
// const project = {
//   name: "UniHack",
//   description:
//     "Teams have 48 hours to design and build something awesome. It can be anything - a website, a mobile application, a video game, or even something hardware. The important thing is that it needs to work when it is presented to the judges.",
//   creator: "0",
//   //   platforms: formData.selectedIntegrations.map((si) => ({
//   //     platform: si.name,
//   //     url: si.link,
//   //   })),
//   status: "INPROGRESS", // by default the user probs wants an active project
//   participants: Users,
// }

const TeamDashboard = () => {
  const location = useLocation()
  const project = location.state
  const { isOpen, onOpen, onClose } = useDisclosure()
  console.log(project)
  const test = () => {
    console.log("hi")
  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size='xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <UserProfile user={profiles[0].id - 1} /> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex
        bg='whitesmoke'
        margin='0'
        height='100vh'
        alignItems='center'
        justifyContent='center'
      >
        <Flex
          justifyContent='space-between'
          padding='4'
          inlineSize='800px'
          blockSize='400px'
          bg='white'
          boxShadow='0px 4px 10px rgba(0,0,0,0.15)'
          borderRadius='xl'
        >
          <VStack alignItems='flex-start' justifyContent='space-between'>
            <Box>
              <Flex marginBottom='3'>
                <Heading>{project.name}</Heading>
                <Spacer w='3' />
                <Text color='gray' alignSelf='end'>
                  {project.projectStatus}
                </Text>
              </Flex>
              <Text>{project.description}</Text>
            </Box>
            <HStack>
              {project.platforms.map((p) => (
                <Flex
                  paddingBlock='2'
                  paddingInline='4'
                  borderRadius='2xl'
                  boxShadow='0px 1px 3px rgba(0,0,0,0.15)'
                >
                  <Text>{p.platform}</Text>
                </Flex>
              ))}
            </HStack>
          </VStack>
          <Flex>
            <Divider orientation='vertical' marginInline='4' />
            <Stack justifyContent='space-between'>
              <Stack>
                {false ? (
                  <Heading>No Users</Heading>
                ) : (
                  profiles.map((p) => <ParticipantCard participant={p} />)
                )}
              </Stack>
            </Stack>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default TeamDashboard
