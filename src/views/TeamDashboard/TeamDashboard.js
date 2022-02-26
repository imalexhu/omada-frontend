import React, { useEffect, useState } from "react";

import {
	Box,
	Divider,
	Flex,
	Heading,
	HStack,
	Icon,
	Image,
	Spacer,
	Stack,
	Text,
	useEditableState,
	VStack
} from "@chakra-ui/react";
import ParticipantCard from "../../components/ParticipantCard/ParticipantCard";
import { useLocation } from 'react-router-dom';
import axios from "axios";

const TeamDashboard = () => {
	const location = useLocation();
	const project = location.state;
	console.log(project);
	return (
		<Flex bg="whitesmoke" margin="0" height="100vh" alignItems="center" justifyContent="center">
			<Flex justifyContent="space-between" padding="4" inlineSize="800px" blockSize="400px" 
					bg="white" boxShadow="0px 4px 10px rgba(0,0,0,0.15)" borderRadius="xl">
				<VStack alignItems="flex-start" justifyContent="space-between">
					<Box>
						<Flex marginBottom="3">
							<Heading >{project.name}</Heading>
							<Spacer w="3"/>
							<Text color="gray" alignSelf="end">{project.projectStatus}</Text>
						</Flex>
						<Text>{project.description}</Text>
					</Box>
					<HStack>
						{project.platforms.map(p => (
							<Flex paddingBlock="2" paddingInline="4" borderRadius="2xl" boxShadow="0px 1px 3px rgba(0,0,0,0.15)">
								<Text>{p.platform}</Text>
							</Flex>
						))}
					</HStack>
				</VStack>
				<Flex>
					<Divider orientation="vertical" marginInline="4"/>
					<Stack>
						{project.participants.length == 0?
						<Heading>No Users</Heading>:
						project.participants.map(p => (
							<ParticipantCard participant={p}/>
						))}
					</Stack>
				</Flex>
			</Flex>
		</Flex>
	);
}

export default TeamDashboard;