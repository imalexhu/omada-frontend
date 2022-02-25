import { React, useEffect, useState } from "react";
import { BsStack } from "react-icons/bs"
import {
	Box,
	Flex,
	Heading,
	Icon,
	Image,
	Spacer,
	Text
} from "@chakra-ui/react";
import axios from "axios"

const difficultyColor = {
	"Easy": "limegreen",
	"Medium": "orange.400",
	"Hard": "red",
};


const ProjectCard = ({ title,
						creator,
						description,
						difficulty,
						availableRoles,
						techInUse }) => {
	const [profile, setProfile] = useState({});
	const getGithubUser = async (username) => {
		let r = await axios.get(`https://api.github.com/users/` + username);
		setProfile(r.data);
	}
	useEffect(() => getGithubUser(creator.githubID))
	return (
		<Box position="relative" borderRadius="3xl" boxShadow="0px 4px 10px rgba(0,0,0,0.15)" padding={4}>
			<Flex justifyContent="space-between" >
				<Flex>
					<Heading marginBottom={3}>{title}</Heading>
					<Spacer w="2"/>
					{/* <Image fit="scale-down" src={profile?.avatar_url}/> */}
					<Text alignSelf="center" color="gray">{creator.profileName}</Text>
				</Flex>
				<Box>
					<Text paddingBlock="0.5" paddingInline="3" borderRadius="2xl"
						bg={difficultyColor[difficulty]} fontWeight="bold" color="white">
							{difficulty}
					</Text>
				</Box>
			</Flex>
			<Text color="gray" noOfLines={2}>{description}</Text>
			<Flex justifyContent="space-between" paddingTop="3">
				<Text>{techInUse.join(', ')}</Text>
				<Text>{"Available Roles: " + availableRoles.join(', ')}</Text>
			</Flex>
		</Box>
	);
}

export default ProjectCard;