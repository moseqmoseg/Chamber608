import { Menu, MenuButton, MenuList, MenuItem, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { Icon, HamburgerIcon } from "@chakra-ui/icons";
import {
  FaHome,
  FaCalendarAlt,
  FaGuitar,
  FaUserAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

function MainMenu() {
  const { user, logout } = useAuth();
  const router = useRouter();
  return (
    
    <Flex 
    sx={{
      position: "-webkit-sticky",
      /* Safari */ position: "sticky",
      top: "0",
    }}
    bgColor="purple.200"
    ml={4}
    mr={4}
    >
      <Menu >
        <MenuButton boxSize={"2em"} as={HamburgerIcon}_hover={{background:"purple.400",color:"white"}}>
          Menu
        </MenuButton>

        <MenuList over >
          <Link href={"/"} passHref>
            <MenuItem
              _hover={{ background: "purple.300",color:"white" }}
              fontWeight="bold"
              icon={<Icon as={FaHome} />}
            >
              Home{" "}
            </MenuItem>
          </Link>

          <Link href={"/calendar"} passHref>
            <MenuItem
              _hover={{ background: "purple.300",color:"white" }}
              fontWeight="bold"
              icon={<Icon as={FaCalendarAlt} />}
            >
              Calendar{" "}
            </MenuItem>
          </Link>

          <Link href={"/gear"} passHref>
            <MenuItem
              _hover={{ background: "purple.300",color:"white" }}
              fontWeight="bold"
              icon={<Icon as={FaGuitar} />}
            >
              Gear{" "}
            </MenuItem>
          </Link>

          <Link href={"/profile"} passHref>
            <MenuItem
              _hover={{ background: "purple.300",color:"white" }}
              fontWeight="bold"
              icon={<Icon as={FaUserAlt} />}
            >
              My Profile{" "}
            </MenuItem>
          </Link>

          <MenuItem
            _hover={{ background: "purple.300" , color:"white"}}
            icon={<Icon as={FaSignOutAlt} />}
            fontWeight="bold"
            onClick={() => {
              logout();
              router.push("/login");
            }}
          >
            Log Out
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default MainMenu;
