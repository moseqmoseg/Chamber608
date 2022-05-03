import { Flex, Center } from "@chakra-ui/react";
import MainMenu from "../components/main_menu";

function Gear() {
  return (<Flex height="100vh" direction="column">
  <MainMenu></MainMenu>

  <Center mt={10} paddingBottom={20}>
    
   Detailed list of available gear along with permissions.
  </Center>
</Flex>)  
}

export default Gear;
