import { db } from "../config/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import {
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { useState } from "react";

function Inventory() {
  const [type, setType] = useState("");
  const [model, setModel] = useState("");
  const [owner, setOwner] = useState("");
  const [amount, setAmount] = useState("");
  const gearCollection = collection(db, "Gear");

  const [value, loading, error] = useCollection(gearCollection, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  function cleanUp() {
    setType("");
    setModel("");
    setOwner("");
    setAmount("");
  };

  async function addGear(info) {
    try {
      const docRef = await addDoc(gearCollection, info);
      console.log(info);

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <Flex direction="column">
      <TableContainer>
        <Table colorScheme="purple" variant="striped" border="red">
          <TableCaption placement="top">Equipment List</TableCaption>
          <Thead>
            <Tr>
              <Th>Type</Th>
              <Th>Model</Th>
              <Th>Amount</Th>
              <Th>Owner</Th>
            </Tr>
          </Thead>

          {error && <strong>Error: {JSON.stringify(error)}</strong>}
          {loading && <span>Collection: Loading...</span>}
          {value && (
            <Tbody>
              {value.docs.map((doc) => (
                <Tr key={doc.id}>
                  <Td>{doc.data().Model}</Td>
                  <Td>{doc.data().Type}</Td>
                  <Td>{doc.data().Amount}</Td>
                  <Td>{doc.data().Owner}</Td>
                </Tr>
              ))}
            </Tbody>
          )}
        </Table>
      </TableContainer>

      <Button sx={{
        position: "-webkit-sticky",
        /* Safari */ position: "sticky"
      }} bg="purple.500" onClick={onOpen}>
        Add Gear
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add that gear!</ModalHeader>
          <ModalCloseButton onClick={() => cleanUp()} />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Type</FormLabel>
              <Input
                isRequired={true}
                value={type}
                onChange={(e) => setType(e.target.value)}
                placeholder="Microphone"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Model</FormLabel>
              <Input
                isRequired={true}
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="Shure Sm57"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Owner</FormLabel>
              <Input
                isRequired={true}
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
                placeholder="Jonny Pijamas"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Amount</FormLabel>
              <Input
                isRequired={true}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type={"number"}
                placeholder="3"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={() => {
                console.log(type, model, owner, amount);
                console.log(type == "");
                console.log(model == "");
                console.log(owner == "");
                console.log(amount == "");

                if (type || model || owner || amount == "") {
                  addGear({
                    Type: type,
                    Model: model,
                    Owner: owner,
                    Amount: amount,
                  });
                  cleanUp();
                  onClose();
                } else {
                  alert(`fill out the whole thing bro`);
                }
              }}
              colorScheme="purple"
              mr={3}
            >
              Add Gear
            </Button>
            <Button
              onClick={() => {
                cleanUp();
                onClose();
              }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Inventory;
