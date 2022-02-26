import React from "react"
import { Image } from "@chakra-ui/react"

const UserImage = ({ pic, name }) => (
  <Image src={pic} alt={name} boxSize='200px' borderRadius='full' mx='auto' />
)

export default UserImage;