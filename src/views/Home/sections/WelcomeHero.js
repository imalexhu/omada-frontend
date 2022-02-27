import React from "react";
import FadeIn from "react-fade-in";

import {
	Flex,
	Box,
	VStack
} from "@chakra-ui/react";
import { RiHomeSmileFill } from "react-icons/ri";

const WelcomeHero = () => {
    return (
        <Flex
            w="100vw"
            h="400px"
            py={4}
            bg="gray.100"
            alignItems="center"
            sx={{
                "backgroundImage": `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1038%26quot%3b)' fill='none'%3e%3cpath d='M962 279L961 567' stroke-width='8' stroke='url(%23SvgjsLinearGradient1039)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M650 232L649 650' stroke-width='6' stroke='url(%23SvgjsLinearGradient1039)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M478 349L477 119' stroke-width='8' stroke='url(%23SvgjsLinearGradient1039)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1297 217L1296 552' stroke-width='8' stroke='url(%23SvgjsLinearGradient1039)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1173 551L1172 743' stroke-width='6' stroke='url(%23SvgjsLinearGradient1040)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M262 102L261 471' stroke-width='10' stroke='url(%23SvgjsLinearGradient1040)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M718 535L717 720' stroke-width='8' stroke='url(%23SvgjsLinearGradient1039)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M77 278L76 510' stroke-width='8' stroke='url(%23SvgjsLinearGradient1039)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M826 245L825 453' stroke-width='10' stroke='url(%23SvgjsLinearGradient1039)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M193 553L192 894' stroke-width='6' stroke='url(%23SvgjsLinearGradient1040)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1105 163L1104 536' stroke-width='6' stroke='url(%23SvgjsLinearGradient1040)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M324 441L323 594' stroke-width='8' stroke='url(%23SvgjsLinearGradient1040)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1395 406L1394 572' stroke-width='6' stroke='url(%23SvgjsLinearGradient1039)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M391 235L390 -27' stroke-width='8' stroke='url(%23SvgjsLinearGradient1040)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M784 176L783 482' stroke-width='10' stroke='url(%23SvgjsLinearGradient1039)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M361 414L360 725' stroke-width='10' stroke='url(%23SvgjsLinearGradient1039)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M948 172L947 -132' stroke-width='6' stroke='url(%23SvgjsLinearGradient1039)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M906 96L905 -262' stroke-width='8' stroke='url(%23SvgjsLinearGradient1039)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1308 211L1307 -192' stroke-width='10' stroke='url(%23SvgjsLinearGradient1039)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1217 187L1216 514' stroke-width='10' stroke='url(%23SvgjsLinearGradient1039)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M125 467L124 632' stroke-width='6' stroke='url(%23SvgjsLinearGradient1039)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1144 509L1143 817' stroke-width='6' stroke='url(%23SvgjsLinearGradient1039)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1190 40L1189 374' stroke-width='6' stroke='url(%23SvgjsLinearGradient1040)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1371 72L1370 409' stroke-width='8' stroke='url(%23SvgjsLinearGradient1040)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M792 351L791 610' stroke-width='8' stroke='url(%23SvgjsLinearGradient1039)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M878 152L877 -245' stroke-width='6' stroke='url(%23SvgjsLinearGradient1039)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M556 52L555 -141' stroke-width='6' stroke='url(%23SvgjsLinearGradient1039)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M433 122L432 501' stroke-width='10' stroke='url(%23SvgjsLinearGradient1040)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M154 470L153 685' stroke-width='6' stroke='url(%23SvgjsLinearGradient1040)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1439 425L1438 75' stroke-width='6' stroke='url(%23SvgjsLinearGradient1039)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M688 275L687 443' stroke-width='10' stroke='url(%23SvgjsLinearGradient1040)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M340 244L339 625' stroke-width='8' stroke='url(%23SvgjsLinearGradient1040)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M1435 3L1434 -246' stroke-width='10' stroke='url(%23SvgjsLinearGradient1039)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M296 156L295 -69' stroke-width='10' stroke='url(%23SvgjsLinearGradient1039)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3cpath d='M1370 256L1369 516' stroke-width='6' stroke='url(%23SvgjsLinearGradient1040)' stroke-linecap='round' class='Up'%3e%3c/path%3e%3cpath d='M126 169L125 -35' stroke-width='8' stroke='url(%23SvgjsLinearGradient1039)' stroke-linecap='round' class='Down'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1038'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='0%25' x2='0%25' y2='100%25' id='SvgjsLinearGradient1039'%3e%3cstop stop-color='rgba(212%2c 224%2c 243%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(212%2c 224%2c 243%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='0%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1040'%3e%3cstop stop-color='rgba(212%2c 224%2c 243%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(212%2c 224%2c 243%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`,
                "backgroundSize": "cover",
                "backgroundRepeat": "no-repeat",
            }}
        >
            <VStack w="100vw" mt={{ base: 14, md: 8 }} px={6} spacing={6} textAlign="center">
                <FadeIn>
                    <RiHomeSmileFill size="4rem" color="#0053CD" />
                </FadeIn>
                <FadeIn delay="150">
                <Box fontSize={{ base: "xl", md: "2xl" }}>
                    <Box as="span" fontWeight={700} color="#0053CD">
                        Omada.
                    </Box>{" "}
                    The Easier Way to Streamline Your Teams Project.
                </Box>
                </FadeIn>
            </VStack>
        </Flex>
    );
}

export default WelcomeHero;