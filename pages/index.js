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
    <Flex height="100vh" direction="column">
      <MainMenu></MainMenu>

      <Center mt={10} paddingBottom={20}>
        <SimpleGrid columns={2} spacing={7}>
          <LinkBox
            color={"white"}
            as="article"
            maxW="sm"
            p="5"
            borderWidth="1px"
            boxShadow="base"
            filter="auto"
            brightness={"30%"}
            _hover={{ boxShadow: "inner", brightness: "100%" }}
            style={{
              backgroundImage:
                "url(' https://images.pexels.com/photos/6823616/pexels-photo-6823616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "300px",
            }}
          >
            <Flex direction={"column"} justify="center" fontSize="15.6px">
              <Heading size="lg" my="2">
                <LinkOverlay href="/calendar">Calendar</LinkOverlay>
              </Heading>
              <Text>
                Book a time slot or check out which dates/periods are avaliable
              </Text>
            </Flex>
          </LinkBox>

          <LinkBox
            color={"white"}
            as="article"
            maxW="sm"
            p="5"
            borderWidth="1px"
            boxShadow="base"
            filter="auto"
            brightness={"50%"}
            _hover={{ boxShadow: "inner", brightness: "100%" }}
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/3357078/pexels-photo-3357078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "300px",
            }}
          >
            <Flex direction={"column"} justify="center" fontSize="15.6px">
              <Heading size="lg" my="2">
                <LinkOverlay href="/gear">Gear</LinkOverlay>
              </Heading>
              <Text>
                Check out a detailed list of available gear,add new gear, check
                to see if you have permission to use other member`s gear
              </Text>
            </Flex>
          </LinkBox>

          <LinkBox
            color={"white"}
            as="article"
            maxW="sm"
            p="5"
            borderWidth="1px"
            boxShadow="base"
            filter="auto"
            brightness={"50%"}
            _hover={{ boxShadow: "inner", brightness: "100%" }}
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/7828315/pexels-photo-7828315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "300px",
            }}
          >
            <Flex direction={"column"} justify="center" fontSize="15.6px">
              <Heading size="lg" my="2">
                <LinkOverlay href="/payments">Payments</LinkOverlay>
              </Heading>
              <Text>Manage your payment method</Text>
            </Flex>
          </LinkBox>

          <LinkBox
            color={"white"}
            as="article"
            maxW="sm"
            p="5"
            borderWidth="1px"
            boxShadow="base"
            filter="auto"
            brightness={"50%"}
            _hover={{ boxShadow: "inner", brightness: "100%" }}
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/3952228/pexels-photo-3952228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "300px",
            }}
          >
            <Flex direction={"column"} justify="center" fontSize="15.6px">
              <Heading size="lg" my="2">
                <LinkOverlay href="/[profile]">My Profile</LinkOverlay>
              </Heading>
              <Text>
                Manage your profile, change your picture,update your email or
                password
              </Text>
            </Flex>
          </LinkBox>
        </SimpleGrid>
      </Center>
    </Flex>
  );
}

export default Home;
