import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import {
  Box,
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

const MainCalendar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const calendarRef = useRef(null);
  const [selectedTime, setselectedTime] = useState("");

  return (
    <Box>
      <FullCalendar
        innerRef={calendarRef}
        plugins={[timeGridPlugin, interactionPlugin, googleCalendarPlugin]}
        googleCalendarApiKey={process.env.NEXT_PUBLIC_CALENDAR_API_KEY}
        events={{
          googleCalendarId:
            "6imscvc8son2g9n8vpb09mhtj8@group.calendar.google.com",
        }}
        timeZone="Europe/Berlin"
        initialView="timeGridWeek"
        eventColor={"#7f5ad6"}
        editable
        selectable
        nowIndicator={true}
        // titleFormat={{ day: "2-digit", month: "short", year: "numeric" }}
        customButtons={{
          myCustomButton: {
            text: "Book a Session",

            click: function () {
              onOpen();
            },
          },
        }}
        dateClick={(info) => {
          onOpen();
          setselectedTime(info.dateStr);
          console.log(selectedTime);
        }}
        headerToolbar={{
          left: "myCustomButton",
          center: "title",
          right: "prev,next",
        }}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bgColor={"purple.500"}>Book Your Session</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Start</FormLabel>
              <Input
                id="StartInput"
                value={selectedTime}
                type={"datetime-local"}
                isRequired
                focusBorderColor="purple.500"
                placeholder={Date.now()}
              />
            </FormControl>
            .
            <FormControl mt={4}>
              <FormLabel>Duration</FormLabel>
              <Input
                type={"time"}
                isRequired
                focusBorderColor="purple.500"
                placeholder={Date}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={() => {
                onClose();
              }}
              colorScheme="purple"
              mr={3}
            >
              Save
            </Button>
            <Button
              onClick={() => {
                onClose();
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default MainCalendar;
