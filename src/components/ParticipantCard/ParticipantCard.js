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


const ParticipantCard = ({ participant }) => {
	const [profile, setProfile] = useState({});
	const getGithubUser = async () => {
		let r = await axios.get(`https://api.github.com/users/` + participant.githubId);
		setProfile(r.data);
	};
	useEffect(() => getGithubUser());
	return (
		<Flex padding={4} borderRadius="2xl" boxShadow="0px 4px 3px rgba(0,0,0,0.15)">
			<Image boxSize="50px" borderRadius="full" src={profile.avatar_url}/>
			<Box margin="0px 0px 10px 10px">
					<Text fontWeight="bold" fontSize="17px">{participant.profileName}</Text>
					<Text color="gray">{participant.roles.join(", ")}</Text>
			</Box>
		</Flex>
	);
}

export default ParticipantCard;