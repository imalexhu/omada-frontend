import React, { useEffect, useState } from "react";

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
import { Link } from "react-router-dom";
import axios from "axios";

const serverURL = `http://localhost:5000/`;

const Home = ({ user }) => {
	const [projects, setProjects] = useState([]);
	const getProjects = async () => {
		let projects = [];
		for (let id of user.currentProjectsInvolved) {
			const response = await axios.get(serverURL + "get-project", { params: { id: id } })
			projects = [...projects, response.data]
		}
		setProjects(projects);
	}
	useEffect(() => getProjects(), []);

	return (
		<HStack marginInline="400px" marginBlock="30px" h="100vh">
			<Stack flex="2">
				{
				projects.length == 0?
				<>
					<Heading>No ongoing projects</Heading>
					<Text>Make one instead. </Text>
				</>:
				<>
					<Heading marginLeft="40px">Ongoing Projects</Heading>
					{projects.map(p => (
						<ProjectCard project={p}/>
					))}
				</>
				}
			</Stack>
			<Divider orientation="vertical"/>
			<Flex flex="1" align="center" justify="center">
				<Stack spacing="6" w="full" maxW="lg" align="center" justify="center">
					<Heading fontSize="4xl">
						Create new project?
					</Heading>
					<Spacer h="20px"/>
					<Link to="/createteam">
						<Button rounded="full" bg="blue.400" color="white" _hover={{bg: 'blue.500'}}>
							Click Here
						</Button>
					</Link>
				</Stack>
			</Flex>
		</HStack>
	);
}

export default Home;