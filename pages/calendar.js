import { Center, Flex } from "@chakra-ui/react";
import MainMenu from "../components/main_menu";

function Calendar() {
  return (
    <Flex height="100vh" direction="column">
      <MainMenu></MainMenu>

      <Center mt={10} paddingBottom={20}>
        
        Calendar that includes all booked dates. Here is where you book your
        time slot
      </Center>
    </Flex>
  );
}

export default Calendar;
