import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FC } from "react";

const Header: FC = () => {
  return (
    <Flex h={20} justifyContent="space-between" alignItems="center">
      <Flex w={80} fontSize={20} color="blue" fontWeight="semibold">
        🐢 Save the SEA
      </Flex>
      <Flex display={["none", "none", "flex"]} gap={8}>
        <Button variant="link" colorScheme="purple">
          Home
        </Button>
        <Button variant="link" colorScheme="purple">
          Mint
        </Button>
        <Button variant="link" colorScheme="purple">
          Sale
        </Button>
      </Flex>
      <Flex display={["none", "none", "flex"]} w={40} justifyContent="end">
        <Button colorScheme="purple" textColor="orange">
          🦊 로그인
        </Button>
      </Flex>
      <Flex display={["flex", "flex", "none"]}>
        <Menu>
          <MenuButton
            colorScheme="pink"
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem>🦊 로그인</MenuItem>
            <MenuItem>Home</MenuItem>
            <MenuItem>Mint</MenuItem>
            <MenuItem>Sale</MenuItem>
            <MenuItem>로그아웃</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Header;
