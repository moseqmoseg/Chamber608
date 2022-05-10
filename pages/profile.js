import { useAuth } from "../context/AuthContext";
import MainMenu from "../components/main_menu";
import {
  Flex,
  SimpleGrid,
  Text,
  Tag,
  Button,
  Table,
  Thead,
  Tr,
  Th,
  TableContainer,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { FaPenSquare, FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";

function Profile() {
  const { user } = useAuth();
  return (
    <Flex height="100vh" direction={"column"}>
      <MainMenu></MainMenu>
      <Flex flexDirection={"column"} align="center">
        <Flex
          justify={"center"}
          align="center"
          flexDirection="column"
          width={"76%"}
          mt={19}
          height={"90vh"}
          boxShadow="base"
          p="6"
          rounded="md"
          bg="white"
        >
          <SimpleGrid columns={2} spacing={7} width="100%">
            <Image
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              borderRadius={200}
            ></Image>
            <Text
              mt={100}
              fontSize="6xl"
              display={"flex"}
              flexDirection={"column"}
            >
              Jonny Pijamas
              <Tag
                colorScheme={"purple"}
                size={"lg"}
                borderRadius="full"
                variant="solid"
                fontSize={"x-large"}
                width="50%"
              >
                Los Lobos
              </Tag>
            </Text>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Email</Th>
                    <Th>{user.email}</Th>
                    <Th>
                      <IconButton
                        colorScheme="purple"
                        size={"sm"}
                        as={FaPenSquare}
                        _hover={{ cursor: "pointer" }}
                      />
                    </Th>
                  </Tr>
                </Thead>
                <Thead>
                  <Tr>
                    <Th>Phone Number</Th>
                    <Th>{user.phoneNumber}</Th>
                    <Th>
                      <IconButton
                        colorScheme="purple"
                        size={"sm"}
                        as={FaPenSquare}
                        _hover={{ cursor: "pointer" }}
                      />
                    </Th>
                  </Tr>
                </Thead>
                <Thead>
                  <Tr>
                    <Th>Password</Th>
                    <Th>••••••••••••</Th>
                    <Th>
                      <IconButton
                        colorScheme="purple"
                        size={"sm"}
                        as={FaPenSquare}
                        _hover={{ cursor: "pointer" }}
                      />
                    </Th>
                  </Tr>
                </Thead>
              </Table>
            </TableContainer>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Monthly Rent</Th>
                    <Th>80€</Th>
                  </Tr>
                </Thead>
                <Thead>
                  <Tr height={"40px"}>
                    <Th>Key Tag</Th>
                    <Th>214323525</Th>
                  </Tr>
                </Thead>
                <Thead>
                  <Tr>
                    <Th>Password</Th>
                    <Th>••••••••••••</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
              </Table>
            </TableContainer>
          </SimpleGrid>
          <Link href={"/calendar"} passHref>
            <Button
              size="lg"
              leftIcon={FaCalendarAlt}
              colorScheme="purple"
              variant="solid"
              mt={5}
            >
              Book Session
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Profile;
