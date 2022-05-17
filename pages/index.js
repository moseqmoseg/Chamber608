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

import MainMenu from "../components/main_menu";

function Home() {
  return (
    <Flex height="100vh" direction="column" overflow="hidden">
      <MainMenu></MainMenu>

      
      <Center mt={10} paddingBottom={20}>
        <SimpleGrid columns={2} spacing={4}>
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
                "url('https://i.postimg.cc/9FFbXrgT/calendar-Boxreal.png')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "270px",
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
                "url('https://i.postimg.cc/8cwqFxVb/Untitled-500-270-px-300-270-px-325-270-px.png')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "270px",
            }}
          >
            <Flex direction={"column"} justify="center" fontSize="15.6px">
              <Heading size="lg" my="2">
                <LinkOverlay href="/gear">Gear</LinkOverlay>
              </Heading>
              <Text>
                Check out a detailed list of available gear,add new gear, check
                to see if you have permission to use other members gear
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
                "url('https://i.postimg.cc/BbSPJPgV/payment-Box.png')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "270px",
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
                "url('https://i.postimg.cc/3JSBkYzq/profile-Boxreal.png')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "270px",
            }}
          >
            <Flex direction={"column"} justify="center" fontSize="15.6px">
              <Heading size="lg" my="2">
                <LinkOverlay href="/profile">My Profile</LinkOverlay>
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
