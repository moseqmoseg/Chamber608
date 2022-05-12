import { Center, Flex } from "@chakra-ui/react";
import MainMenu from "../components/main_menu";
import MainCalendar from "../components/main_calendar";

function Calendar() {
  return (
    <Flex direction="column" pb={100}>
      <MainMenu></MainMenu>

      <Center mt={10} padding={30}>
        <MainCalendar></MainCalendar>
      </Center>
    </Flex>
  );
}

export default Calendar;
