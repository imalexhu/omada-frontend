import React, { useEffect, useState } from "react";
import axios from "axios"

import {
	Box,
	Flex,
	Heading,
	Spacer,
	Text
} from "@chakra-ui/react";
import { useLocation } from "react-router";

const difficultyColor = {
	"Easy": "limegreen",
	"Medium": "orange.400",
	"Hard": "red",
};

const ProjectCard = ({ project }) => {
	const {
		name,
		description,
		creator,
		platforms,
		status,
	} = project;

	const [profile, setProfile] = useState({});

	const fetchGithubUser = async (username) => {
		let res = await axios.get(`https://api.github.com/users/` + username);
		setProfile(res.data);
	}

	useEffect(() => fetchGithubUser(creator.githubID))

	return (
		<Box w="100%" position="relative" borderRadius="3xl" shadow="lg" padding={6}>
			<Flex justifyContent="space-between" >
				<Flex>
					<Heading marginBottom={3}>{name}</Heading>
					<Spacer w="2"/>
					<Text alignSelf="center" color="gray">{creator.profileName}</Text>
				</Flex>
				{/* <Box>
					<Text
						paddingBlock="0.5"
						paddingInline="3"
						borderRadius="2xl"
						bg={difficultyColor[difficulty]}
						fontWeight="bold"
						color="white"
					>
							{difficulty}
					</Text>
				</Box> */}
			</Flex>
			<Text color="gray" noOfLines={2}>{description}</Text>
			<Flex justifyContent="space-between" paddingTop="3">
				<Text>{platforms.join(", ")}</Text>
				{/* <Text>{"Available Roles: " + availableRoles.join(", ")}</Text> */}
			</Flex>
		</Box>
	);
}

export default ProjectCard; 	