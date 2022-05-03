import { Flex, Center } from "@chakra-ui/react";
import MainMenu from "../components/main_menu";

function Payments() {
  return (
    <Flex height="100vh" direction="column">
      <MainMenu></MainMenu>
      <Center mt={10} pb={20}>
      Here is where you pay your monthly rent and change payment methods or
      amount.
      </Center>
      
    </Flex>
  );
}

export default Payments;
