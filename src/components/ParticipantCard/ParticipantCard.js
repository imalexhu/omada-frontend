import { React, useEffect, useState } from "react"
import { BsStack } from "react-icons/bs"
import UserProfile from "../Users/UserProfile"
import {
  Button,
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Spacer,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"
import axios from "axios"

const difficultyColor = {
  Easy: "limegreen",
  Medium: "orange.400",
  Hard: "red",
}

const ParticipantCard = ({ participant }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [profile, setProfile] = useState({})
  const getGithubUser = async () => {
    let r = await axios.get(
      `https://api.github.com/users/` + participant.githubId
    )

    setProfile(r.data)
  }
  useEffect(() => getGithubUser())
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size='xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UserProfile user={participant.id - 1} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex
        padding={4}
        borderRadius='2xl'
        boxShadow='0px 4px 3px rgba(0,0,0,0.15)'
      >
        <Image boxSize='50px' borderRadius='full' src={profile.avatar_url} />
        <Box onClick={onOpen} marginLeft='10px'>
          <Text fontWeight='bold' fontSize='17px'>
            {participant.profileName}
          </Text>
          <Text color='gray'>{participant.roles.join(", ")}</Text>
        </Box>
      </Flex>
    </>
  )
}

export default ParticipantCard
