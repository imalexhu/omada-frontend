import React from "react"
import Member from "./Member"
import { SimpleGrid, Box, Center } from "@chakra-ui/react"

const members = [
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

const Members = () => {
  return (
    <>
      <Center py={6}>
        <SimpleGrid columns={3} spacing={10}>
          {members.map((member) => (
            <Box>
              <Member member={member} />
            </Box>
          ))}
        </SimpleGrid>
      </Center>
    </>
  )
}

export default Members
