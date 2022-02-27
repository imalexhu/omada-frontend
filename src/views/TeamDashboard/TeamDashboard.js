import React, { useEffect, useState } from "react"
import UserProfile from "../../components/Users/UserProfile"
import {
  Alert,
  AlertIcon,
  SimpleGrid,
  Select,
  Input,
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
    profileName: "Kelvin Ting",
    githubId: "tingkelvin",
    roles: ["Fontend"],
    id: "1",
  },
  {
    profileName: "Che Kambouris",
    githubId: "chekambouris",
    roles: ["Fontend"],
    id: "2",
  },
  {
    profileName: "Alex Hu",
    githubId: "imalexhu",
    roles: ["Backend"],
    id: "4",
  },
  {
    profileName: "Patrick Sumarli",
    githubId: "PatrickS136",
    roles: ["Backend"],
    id: "5",
  },
  {
    profileName: "Kosta Hassouros",
    githubId: "devkosta",
    roles: ["UX Design"],
    id: "3",
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

  const [isUrlCopied, setUrlCopied] = useState(false)
  const [url, setUrl] = useState("")

  function copy() {
    var element = document.getElementById("url")
    console.log(element.value)
    setUrlCopied(true)
  }

  function createURL() {
    const baseURL = "omada.invite/"
    var role = document.getElementById("role").value
    var project = document.getElementById("project").value
    setUrl(baseURL + role + project)
  }

  function changeURL() {
    const baseURL = "omada.invite/"
    var role = document.getElementById("role").value
    var project = document.getElementById("project").value
    setUrl(baseURL + role + project)
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Send Invite URL</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isUrlCopied && (
              <Stack spacing={3}>
                <Alert status='success'>
                  <AlertIcon />
                  Invites are sent!
                </Alert>
              </Stack>
            )}

            <SimpleGrid minChildWidth='120px' spacing='40px'>
              <Select id='member' placeholder='Select Member'>
                <option value='2dsdfgfsdf'>All Members</option>
                <option value='affdfsgfffs'>Alex Hu</option>
                <option value='2sdfgfgfdffd'>Che Kambouris</option>
                <option value='2sdfgfgfdffd'>Patrick Sumarli</option>
                <option value='dsfdgfgfdedc'>Kelvin Ting</option>
                <option value='fasgfgffdfdd'>Kosta Hassouros</option>
              </Select>
              <Select id='role' placeholder='Select Role'>
                <option value='2d43sdf'>Fontend Developer</option>
                <option value='affd2ffs'>Backend Developer</option>
                <option value='22asdffd'>Data Engineer</option>
                <option value='dsffdedc'>Data Scientist</option>
                <option value='fasdfdfdd'>UI/UX Designer</option>
              </Select>
              <Select id='project' placeholder='Select Project'>
                <option value='davvdsd'>Mern Shop for company X</option>
                <option value='eddsdcd'>Sales analysis on Company Y</option>
                <option value='aasd4554'>Stock prediction on company Z</option>
              </Select>
            </SimpleGrid>
            <Text>URL</Text>
            <Input
              id='url'
              value={url}
              placeholder='Select Member, Role and Project.'
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='messenger' mr={3} onClick={createURL}>
              Create Invite URL
            </Button>
            <Button colorScheme='messenger' mr={3} onClick={copy}>
              Send
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
          blockSize='800px'
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
            <Flex
              h='100%'
              justifyContent='space-between'
              alignItems='flex-start'
            >
              <Stack h='100%' justifyContent='space-between'>
                <Stack>
                  {false ? (
                    <Heading>No Users</Heading>
                  ) : (
                    profiles.map((p) => <ParticipantCard participant={p} />)
                  )}
                </Stack>
                <Button onClick={onOpen} colorScheme='messenger'>
                  Send Invites
                </Button>
              </Stack>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default TeamDashboard
