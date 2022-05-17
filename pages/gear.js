import { Flex, Center } from "@chakra-ui/react";
import MainMenu from "../components/main_menu";
import Inventory from "../components/inventory";

function Gear() {
  return (
    <Flex height="100vh" direction="column">
      <MainMenu></MainMenu>

      <Center mt={10} paddingBottom={20}>
        <Inventory></Inventory>
      </Center>
    </Flex>
  );
};

export default Gear;
