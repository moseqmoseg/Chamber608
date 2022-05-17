import { Center, Flex } from "@chakra-ui/react";
import MainMenu from "../components/main_menu";
import MainCalendar from "../components/main_calendar";

function Calendar() {
  return (
    <Flex height="100vh" direction="column" overflow="hidden" >
      <MainMenu></MainMenu>

      <Center m={20} mt={10} >
        <MainCalendar></MainCalendar>
      </Center>
    </Flex>
  );
}

export default Calendar;
