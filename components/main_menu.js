import { Menu, MenuButton, MenuList, MenuItem, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { Icon, HamburgerIcon } from "@chakra-ui/icons";

import { FaHome, FaCalendarAlt, FaGuitar, FaUserAlt } from "react-icons/fa";

function MainMenu() {
  return (
    <Flex sx={{ position: '-webkit-sticky', /* Safari */ position: 'sticky', top: '0', }}>
      <Menu>
        <MenuButton boxSize={"2em"} as={HamburgerIcon}>Menu</MenuButton>

        <MenuList>
          <Link href={"/"} passHref>
            <MenuItem icon={<Icon as={FaHome} />}>Home </MenuItem>
          </Link>

          <Link href={"/calendar"} passHref>
            <MenuItem icon={<Icon as={FaCalendarAlt} />}>Calendar </MenuItem>
          </Link>

          <Link href={"/gear"} passHref>
            <MenuItem icon={<Icon as={FaGuitar} />}>Gear </MenuItem>
          </Link>

          <Link href={"/[profile]"} passHref>
            <MenuItem icon={<Icon as={FaUserAlt} />}>My Profile </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default MainMenu;
