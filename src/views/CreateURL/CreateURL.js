import { React, useState, useEffect } from "react"
import {
  Stack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Text,
  Input,
  Box,
  Select,
  Button,
  SimpleGrid,
  ButtonGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"

const CreateURL = () => {
  const [isUrlCopied, setUrlCopied] = useState(false)
  const [url, setUrl] = useState("")
  const { isOpen, onOpen, onClose } = useDisclosure()

  function copy() {
    var element = document.getElementById("url")
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
      <Button onClick={onOpen}>Create Invite URL</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Invite URL</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isUrlCopied && (
              <Stack spacing={3}>
                {/* <Alert status='error'>
                <AlertIcon />
                There was an error processing your request
              </Alert> */}

                <Alert status='success'>
                  <AlertIcon />
                  Invite URL is copied!
                </Alert>

                {/* <Alert status='warning'>
                <AlertIcon />
                Seems your account is about expire, upgrade now
              </Alert>

              <Alert status='info'>
                <AlertIcon />
                Chakra is going live on August 30th. Get ready!
              </Alert> */}
              </Stack>
            )}

            <SimpleGrid minChildWidth='120px' spacing='40px'>
              <Select id='role' placeholder='Select Role'>
                <option value='2d43sdf'>Frontend Developer</option>
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
              placeholder='Select Role and Project.'
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={createURL}>
              Create Invite URL
            </Button>
            <Button colorScheme='blue' mr={3} onClick={copy}>
              Copy
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreateURL
