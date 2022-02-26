import React, { useState, useEffect } from "react"

import {
  Container,
  Center,
  Heading,
  Text,
  VStack,
  HStack,
  Tag,
} from "@chakra-ui/react"

import UserImage from "../components/userImage"

const users = [
  {
    id: "1",
    username: "Kelvin Ting",
    githubId: "tingkelvin",
    career: "Student",
    company: "University of Adelaide",
    currentProjectsCreated: ["web application", "shoping cart", "mobile game"],
    bio: 'Arthur C Clarke said "Any sufficiently advanced technology is indistinguishable from magic" and that\'s how I feel about the technology I work with. I love machine learning. I am always looking for new projects and challenges to help me explore the field and grow in what I can do. I am fascinated by artificial intelligence and its applications that will enable so many people to reach their full potential.',
    projectHistory: [
      { timestemp: "1/2/2021", projectId: "Chatbot system", role: "frontend" },
      {
        timestemp: "12/4/2021",
        projectId: "Data preprocessing",
        role: "backend",
      },
    ],
    currentProjectsInvolved: ["uniHack"],

    roles: ["machine learning", "frontend", "backend"],
  },
]

const UserProfile = () => {
  const [username] = useState(users[0].username)
  const [image, setImage] = useState("")
  const [career] = useState(users[0].career)
  const [company] = useState(users[0].company)
  const [currentProjectsCreated] = useState(users[0].currentProjectsCreated)
  const [projectHistory] = useState(users[0].projectHistory)
  const [currentProjectsInvolved] = useState(users[0].currentProjectsInvolved)
  const [bio] = useState(users[0].bio)
  const [roles] = useState(users[0].roles)

  const fetchUserImage = async (user) => {
    const url = "https://api.github.com/users/" + user.githubId
    const response = await fetch(url)
    const data = await response.json()
    setImage(data.avatar_url)

    return data.avatar_url
  }

  useEffect(() => {
    if (image === "") {
      fetchUserImage(users[0])
    }
  }, [image])
  return (
    <Container mt={4}>
      <UserImage pic={image} name={username} />
      <Center>
        <VStack>
          <Heading>{username}</Heading>
          <Text color='gray'>
            {career} {" @ "} {company}
          </Text>
          <HStack>
            {roles.map((role) => (
              <Tag colorScheme='blue' key={role}>
                {role}
              </Tag>
            ))}
          </HStack>
          <Text>{bio}</Text>

          <HStack>
            <Text>Project currently working: </Text>
            {currentProjectsInvolved.map((currentProjectsInvolved) => (
              <Tag colorScheme='green' key={currentProjectsInvolved}>
                {currentProjectsInvolved}
              </Tag>
            ))}
          </HStack>

          <HStack>
            <Text>Project Created: </Text>
            {currentProjectsCreated.map((currentProjectsCreated) => (
              <Tag colorScheme='purple' key={currentProjectsCreated}>
                {currentProjectsCreated}
              </Tag>
            ))}
          </HStack>
          <VStack>
            <Text>Project History: </Text>
            {projectHistory.map((projectHistory) => (
              <Tag colorScheme='red' key={projectHistory.projectId}>
                {projectHistory.projectId +
                  " @ " +
                  projectHistory.timestemp +
                  " as " +
                  projectHistory.role}
              </Tag>
            ))}
          </VStack>
        </VStack>
      </Center>
    </Container>
  )
}

export default UserProfile
