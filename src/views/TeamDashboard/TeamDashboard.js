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
import axios from "axios";

const TeamDashboard = ({ project }) => {
	return (
		<Flex bg="whitesmoke" margin="0" height="100vh" alignItems="center" justifyContent="center">
			<Flex justifyContent="space-between" padding="4" inlineSize="800px" blockSize="400px" 
					bg="white" boxShadow="0px 4px 10px rgba(0,0,0,0.15)" borderRadius="xl">
				<VStack alignItems="flex-start" justifyContent="space-between">
					<Box>
						<Flex marginBottom="3">
							<Heading >{project.projectName}</Heading>
							<Spacer w="3"/>
							<Text color="gray" alignSelf="end">{project.projectStatus}</Text>
						</Flex>
						<Text>{project.description}</Text>
					</Box>
					<HStack>
						{project.techUsed.map(t => (
							<Flex paddingBlock="2" paddingInline="4" borderRadius="2xl" boxShadow="0px 1px 3px rgba(0,0,0,0.15)">
								<Text>{t.tech}</Text>
							</Flex>
						))}
					</HStack>
				</VStack>
				<Flex>
					<Divider orientation="vertical" marginInline="4"/>
					<Stack>
						{project.participants.map(p => (
							<ParticipantCard participant={p}/>
						))}
					</Stack>
				</Flex>
			</Flex>
		</Flex>
	);
}

export default TeamDashboard;