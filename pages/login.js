import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, login } = useAuth();
  const router = useRouter();

  const handleShowClick = () => setShowPassword(!showPassword);
  const handleLogin = async (e) => {
    try {
      await login(email, password);
      console.log(user);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      bg={useColorModeValue("gray.50", "gray.800")}
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="purple.500" />
        <Heading color="purple.400">Welcome to the Chamber</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              bg={useColorModeValue("white", "gray.700")}
              boxShadow="lg"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" />
                  <Input
                    type="email"
                    placeholder="email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="gray.300" />
                  <Input
                    value={password}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      variant={"ghost"}
                      h="1.75rem"
                      size="sm"
                      onClick={handleShowClick}
                    >
                      {showPassword ? (
                        <ViewIcon mr={4} />
                      ) : (
                        <ViewOffIcon mr={4} />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                size={"lg"}
                type="submit"
                variant="solid"
                bg={"purple.500"}
                width="full"
                color="white"
                _hover={{
                  bg: "purple.700",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link color="purple.500" href="/signup">
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};

export default Login;
