import React from "react";

import ProjectCard from "../../components/ProjectCard/ProjectCard";

import {
	Stack,
	Flex,
	Heading,
	Text,
	Button,
	Image,
	VStack,
	HStack,
	Divider,
	Spacer,
} from "@chakra-ui/react"

const sampleUser = {
	id: 0,
	profileName: "Che Kambouris",
	discordId: "Chedsta#1010",
	githubId: "CheKambouris",
	projects: [0],
	roles: ["backend", "frontend",]
}
const sampleProject = {
	id: 0,
	projectName: "Cool Project Name",
	description: "Cool project description",
	creatorID: 0,
	discordLink: null,
	githubRepo: null,
	difficulty: null,
	projectStatus: "In Progress",
	participants: [
		{
			profileName: "Che Kambouris",
			roles: ["Frontend"],
			githubId: "CheKambouris",
			discordId: "Chedsta#1234",
			projectHistory: [{}],
		}, {
			profileName: "Alex Hu",
			roles: ["Backend"],
			githubId: "imalexhu",
			discordId: "AlexHu#1234",
			projectHistory: [{}],
		}
	],
	techUsed: [
		{
			tech: "Github",
			link: "https://github.com/imalexhu/omada-backend"
		},
		{
			tech: "Discord",
			link: "https://discord.gg/8EDvWcQk",
		}
	]
}
const projects = [sampleProject]
const users = [sampleUser]

const Home = () => {
	return (
		<HStack h="100vh">
			<Stack flex="2">
				<Heading margin="10">Ongoing Projects</Heading>
				<ProjectCard title={sampleProject.projectName}
					creator={sampleUser.profileName}
					description={sampleProject.description}
					difficulty={sampleProject.difficulty}
					availableRoles={[]}
					techInUse={[]}/>
			</Stack>
			<Divider orientation="vertical"/>
			<Flex flex="1" align="center" justify="center">
				<Stack spacing="6" w="full" maxW="lg" align="center" justify="center">
					<Heading fontSize="4xl">
						Create new project?
					</Heading>
					<Spacer h="20px"/>
					<Button rounded="full" bg="blue.400" color="white" _hover={{bg: 'blue.500'}}>
						Click Here
					</Button>
				</Stack>
			</Flex>
		</HStack>
	);
}

export default Home;