/* eslint-disable react/no-children-prop */
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import { storage } from "../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Icon,
  IconButton,
  InputGroup,
  InputLeftElement,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FaCloudUploadAlt } from "react-icons/fa";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  

  const router = useRouter();
  const hiddenFileInput = useRef(null);

  const { user, signup, updateUser } = useAuth();
  const imagesRef = ref(storage, "images");
  const storageRef = ref(storage, `images/${firstName} ${lastName}`);

  const handleSubmit = async (e) => {
    try {
      await signup(email, password);
    } catch (error) {
      console.log(error);
    } finally {
      uploadBytes(
        storageRef,
        document.getElementById("uploader").files[0]
      ).then(() => {
        console.log("Picture has been uploaded successfully");
        getDownloadURL(storageRef)
        .then((url) => {
          updateUser(firstName, lastName, url).then(()=>{
            console.log("User created and updated successfully");
            

          }).catch((error)=>{
            console.log(error);
          })
          
        })
        .catch((error) => {
         console.log("Failed to update user ");
         console.log(error);
        });
      });
      

      router.push("/login");
    }
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleUpload = (event) => {
    console.log(event.target.files[0]);
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"} color={"purple.500"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} textAlign={"center"} color={"purple.400"}>
            enjoy the Chamber ✌️
          </Text>
        </Stack>
        <Box
          borderRadius={0}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    onChange={(e) => {
                      setfirstName(e.target.value);
                    }}
                    required 
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    onChange={(e) => {
                      setlastName(e.target.value);
                    }}
                    required 
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl mt={8}>
                  <Input
                    id="uploader"
                    ref={hiddenFileInput}
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) => {}}
                  ></Input>
                  <IconButton
                    onClick={handleClick}
                    aria-label="Search database"
                    icon={<Icon as={FaCloudUploadAlt} />}

                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                required
                placeholder="youremail@email.com"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  required
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? (
                      <ViewIcon mr={4} />
                    ) : (
                      <ViewOffIcon mr={4} />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                borderRadius={0}
                loadingText="Submitting"
                size="lg"
                bg={"purple.500"}
                color={"white"}
                _hover={{
                  bg: "purple.700",
                }}
                onClick={() => {
                  handleSubmit();
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link color={"purple.500"} href="/login">
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Signup;
