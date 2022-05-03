import {
  Flex,
  SimpleGrid,
  Box,
  Center,
  LinkBox,
  LinkOverlay,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import { FaHome, FaCalendarAlt, FaGuitar, FaUserAlt } from "react-icons/fa";

import MainMenu from "../components/main_menu";

function Home() {
  return (
    <Flex height="100vh" direction="column" >
      <MainMenu></MainMenu>

      <Center   mt={10} paddingBottom={20}>
        <SimpleGrid columns={2} spacing={10}>
          <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md" boxShadow='base' _hover={{ boxShadow: 'inner' }}>
            <Center>
              <Image
                alt=""
                height={200}
                width={200}
                src="https://images.pexels.com/photos/5408818/pexels-photo-5408818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </Center>

            <Heading size="md" my="2">
              <LinkOverlay href="/calendar">Calendar</LinkOverlay>
            </Heading>
            <Text>
              Book a time slot or check out which dates/periods are already
              booked.
            </Text>
          </LinkBox>

          <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md" boxShadow='base' _hover={{ boxShadow: 'inner' }}>
            <Center>
              <Image
                alt=""
                alignSelf={"center"}
                height={200}
                width={200}
                src="https://images.pexels.com/photos/6966/abstract-music-rock-bw.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </Center>
            <Heading size="md" my="2">
              <LinkOverlay href="/gear">Gear</LinkOverlay>
            </Heading>
            <Text>
              Check out a detailed list of available gear,add new gear, check to
              see if you have permission to use other members gear.
            </Text>
          </LinkBox>

          <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md" boxShadow='base'_hover={{ boxShadow: 'inner' }}>
            <Center>
              <Image
                alt=""
                height={200}
                width={200}
                src="https://images.pexels.com/photos/6694575/pexels-photo-6694575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </Center>

            <Heading size="md" my="2">
              <LinkOverlay href="/payments">Payments</LinkOverlay>
            </Heading>
            <Text>Here you can manage your monthly rent payments.</Text>
          </LinkBox>

          <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md" boxShadow='base' _hover={{ boxShadow: 'inner' }} >
            <Center>
              <Image
                alt=""
                height={200}
                width={200}
                src="https://images.pexels.com/photos/4272616/pexels-photo-4272616.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
            </Center>

            <Heading size="md" my="2">
              <LinkOverlay href="/[profile]">My Profile </LinkOverlay>
            </Heading>
            <Text>
              Manage your profile, change your picture,update your email or
              password.
            </Text>
          </LinkBox>
        </SimpleGrid>
      </Center>
    </Flex>
  );
}

export default Home;
