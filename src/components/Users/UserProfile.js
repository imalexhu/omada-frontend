import React, { useState, useEffect } from "react"

import {
  Container,
  Center,
  Heading,
  Text,
  VStack,
  HStack,
  Tag,
  Link,
} from "@chakra-ui/react"

import UserImage from "./UserImage"

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

    roles: ["frontend"],
  },
  {
    id: "2",
    username: "Che Kambouris",
    githubId: "CheKambouris",
    career: "Student",
    company: "University of Adelaide",
    currentProjectsCreated: ["web application", "shoping cart", "mobile game"],
    bio: "Second year student studying Computer Science at The University of Adelaide, part time desktop support officer at Immanuel College and hobbyist software developer.",
    projectHistory: [
      { timestemp: "1/2/2021", projectId: "Chatbot system", role: "frontend" },
      {
        timestemp: "12/4/2021",
        projectId: "Data preprocessing",
        role: "backend",
      },
    ],
    currentProjectsInvolved: ["uniHack"],

    roles: ["frontend"],
  },
  {
    id: "3",
    username: "Kosta Hassouros",
    githubId: "devkosta",
    career: "Student",
    company: "University of Adelaide",
    currentProjectsCreated: ["web application", "shoping cart", "mobile game"],
    bio: "I'm passionate about consumer technology and the way we interact with it today, it's impact on society is as interesting as the tech itself. I enjoy dealing with the whole stack, from building microservices in NodeJS, to creating beautiful user interfaces in React.",
    projectHistory: [
      { timestemp: "1/2/2021", projectId: "Chatbot system", role: "frontend" },
      {
        timestemp: "12/4/2021",
        projectId: "Data preprocessing",
        role: "backend",
      },
    ],
    currentProjectsInvolved: ["uniHack"],

    roles: ["UX Design"],
  },
  {
    id: "4",
    username: "Alex Hu",
    githubId: "imalexhu",
    career: "Student",
    company: "University of Adelaide",
    currentProjectsCreated: ["web application", "shoping cart", "mobile game"],
    bio: "Passionate about web technologies specifically building out microservices and managing distributed communication, self taught in full stack developement (MEAN stack). Currently enrolled in University of Adelaide studying Computer Science as a second year, web developer for the compeditive programming club.",
    projectHistory: [
      { timestemp: "1/2/2021", projectId: "Chatbot system", role: "frontend" },
      {
        timestemp: "12/4/2021",
        projectId: "Data preprocessing",
        role: "backend",
      },
    ],
    currentProjectsInvolved: ["uniHack"],

    roles: ["backend"],
  },
  {
    id: "5",
    username: "Patrick Sumarli",
    githubId: "PatrickS136",
    career: "Student",
    company: "University of Adelaide",
    currentProjectsCreated: ["web application", "shoping cart", "mobile game"],
    bio: "I am an aspiring software developer who enjoys solving challenging problems and building projects. My favourite aspect about the field is being able to continuously learn new technologies and create many different programs.",
    projectHistory: [
      { timestemp: "1/2/2021", projectId: "Chatbot system", role: "frontend" },
      {
        timestemp: "12/4/2021",
        projectId: "Data preprocessing",
        role: "backend",
      },
    ],
    currentProjectsInvolved: ["uniHack"],

    roles: ["backend"],
  },
]

const UserProfile = (props) => {
  const [username] = useState(users[props.user].username)
  const [image, setImage] = useState("")
  const [career] = useState(users[props.user].career)
  const [company] = useState(users[props.user].company)
  const [currentProjectsCreated] = useState(
    users[props.user].currentProjectsCreated
  )
  const [projectHistory, setProjectHistory] = useState(
    users[props.user].projectHistory
  )
  const [currentProjectsInvolved] = useState(
    users[props.user].currentProjectsInvolved
  )
  const [bio] = useState(users[props.user].bio)
  const [roles] = useState(users[props.user].roles)

  const fetchUserImage = async (user) => {
    const url = "https://api.github.com/users/" + user.githubId
    const response = await fetch(url)
    const data = await response.json()
    setImage(data.avatar_url)

    return data.avatar_url
  }

  const fetchGithubProject = async (user) => {
    const url = "https://api.github.com/users/" + user.githubId + "/repos"
    const response = await fetch(url)
    const data = await response.json()
    setProjectHistory(data)

    return
  }

  useEffect(() => {
    if (image === "") {
      fetchUserImage(users[props.user])
      fetchGithubProject(users[props.user])
    }

    if (projectHistory === "") {
      fetchGithubProject(users[0])
    }
  }, [image, projectHistory])
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
                <Link href={projectHistory.html_url} isExternal>
                  {projectHistory.name + " @ " + projectHistory.pushed_at}
                </Link>
              </Tag>
            ))}
          </VStack>
        </VStack>
      </Center>
    </Container>
  )
}

export default UserProfile
