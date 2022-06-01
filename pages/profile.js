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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FaPenSquare } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useDisclosure, useToast } from "@chakra-ui/react";

function Profile() {
  useEffect(() => {
    return () => {
      console.log(user);
    };
  }, []);

  const { user, changeEmail, changePassword } = useAuth();
  const {
    isOpen: isPasswordOpen,
    onOpen: onPasswordOpen,
    onClose: onPasswordClose,
  } = useDisclosure();
  const {
    isOpen: isEmailOpen,
    onOpen: onEmailOpen,
    onClose: onEmailClose,
  } = useDisclosure();

  const [newEmail, setnewEmail] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  const toast = useToast();


  const handleEmailChange = () => {
    changeEmail(newEmail);
    onEmailClose();
  };

  const handlePassChange = () => {
    changePassword(newPassword);
    onPasswordClose();
  };



  return (
    <Flex height="100vh" direction={"column"} overflow="hidden">
      <MainMenu></MainMenu>
      <Flex flexDirection={"column"} align="center">
        <Flex
          justify={"center"}
          align="center"
          flexDirection="column"
          width={"56%"}
          mt={19}
          height={"90vh"}
          boxShadow="base"
          p="6"
          rounded="md"
          bg="white"
        >
          <Flex align="center" flexDirection="column" spacing={3} width="100%">
            <Image
              width={200}
              height={200}
              alt={user.displayName}
              borderRadius={200}
              src={user.photoURL}
              borderColor="purple.500"
              borderStyle="solid"
              borderWidth="2px"
            ></Image>
            <Text
              mt={5}
              mb={5}
              fontSize="6xl"
              display={"flex"}
              flexDirection={"column"}
              bg="purple.100"
            >
              {user.displayName}
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
                        onClick={onEmailOpen}
                      />
                    </Th>
                    <Modal isOpen={isEmailOpen} onClose={onEmailClose}>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Update your Email</ModalHeader>
                        <ModalBody>
                          <Input
                            value={newEmail}
                            type="email"
                            onChange={(e) => {
                              setnewEmail(e.target.value);
                            }}
                            placeholder="yournewemail@email.com"
                          ></Input>
                        </ModalBody>

                        <ModalFooter>
                          <Button
                            colorScheme="purple"
                            mr={3}
                            onClick={() => {
                              handleEmailChange();
                            }}
                          >
                            Update Email
                          </Button>
                          <Button
                            colorScheme="purple"
                            onClick={() => {
                              onEmailClose();
                            }}
                          >
                            Close
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </Tr>
                </Thead>
                <Thead>
                  <Tr>
                    <Th>Password</Th>
                    <Th typeof="password">******</Th>
                    <Th>
                      <IconButton
                        colorScheme="purple"
                        size={"sm"}
                        as={FaPenSquare}
                        _hover={{ cursor: "pointer" }}
                        onClick={onPasswordOpen}
                      />
                    </Th>
                    <Modal isOpen={isPasswordOpen} onClose={onPasswordClose}>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Update your Password</ModalHeader>
                        <ModalBody>
                          <Input
                            value={newPassword}
                            type={showPassword ? "text" : "password"}
                            onChange={(e) => {
                              setnewPassword(e.target.value);
                            }}
                            placeholder="New password"
                          ></Input>
                          <InputRightElement h={"full"}>
                            <Button
                              variant={"ghost"}
                              onClick={() =>
                                setshowPassword((showPassword) => !showPassword)
                              }
                            >
                              {showPassword ? (
                                <ViewIcon mr={4} />
                              ) : (
                                <ViewOffIcon mr={4} />
                              )}
                            </Button>
                          </InputRightElement>
                          <InputGroup></InputGroup>
                        </ModalBody>

                        <ModalFooter>
                          <Button
                            colorScheme="purple"
                            mr={3}
                            onClick={handlePassChange}
                          >
                            Update Password
                          </Button>
                          <Button
                            colorScheme="purple"
                            onClick={() => {
                              onPassWordClose();
                            }}
                          >
                            Close
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </Tr>
                </Thead>
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
              </Table>
            </TableContainer>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Profile;
