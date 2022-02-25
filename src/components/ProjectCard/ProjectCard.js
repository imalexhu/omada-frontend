import React from "react";

import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";

const difficultyColor = {
	"Easy": "limegreen",
	"Medium": "orange.400",
	"Hard": "red",
};

const ProjectCard = ({ title, description, difficulty, availableRoles, techInUse }) => {
	return (
		<Box position="relative" borderRadius="3xl" boxShadow="0px 4px 10px rgba(0,0,0,0.15)" padding={4}>
			<Heading marginBottom={3}>{title}</Heading>
			<Box position="absolute" right="5" top="5"
				paddingBlock="0.5" paddingInline="3"
				bg={difficultyColor[difficulty]} borderRadius="2xl">
				<Text fontWeight="bold" color="white">{difficulty}</Text>
			</Box>
			<Text color="gray" noOfLines={2}>{description}</Text>
			<Flex justifyContent="space-between" paddingTop="3">
				<Text>{techInUse.join(', ')}</Text>
				<Text>{"Available Roles: " + availableRoles.join(', ')}</Text>
			</Flex>
		</Box>
	);
}

export default ProjectCard;