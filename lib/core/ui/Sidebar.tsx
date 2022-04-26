import {
  Box,
  Circle,
  Divider,
  Flex,
  Spacer,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import {
  BiBuoy,
  BiCategory,
  BiCheckShield,
  BiCog,
  BiCommentAdd,
  BiCreditCard,
  BiEnvelope,
  BiGitPullRequest,
  BiHome,
  BiNews,
  BiPurchaseTagAlt,
  BiRecycle,
  BiRedo,
  BiTagAlt,
  BiUser,
  BiUserCircle,
  BiLogOut,
  BiUserPlus,
  BiWallet,
} from "react-icons/bi";
import { NavGroup } from "./NavGroup";
import { AdminNavItem } from "./AdminNavItem";
import { auth } from "@lib/auth/data/firebaseAuth";

export const Sidebar = () => {
  return (
    <Flex h="full" w={64} direction="column" px="4" py="4">
      <Stack spacing="8" flex="1" overflow="auto" pt="8">
        <NavGroup label="Админ удирдлага">
          <AdminNavItem icon={<BiUser />} label="Тэмцээн үүсгэх" />
          <AdminNavItem icon={<BiUserCircle />} label="Даалгавар үүсгэх" />
          {/* <AdminNavItem icon={<BiUserPlus />} label="Хэрэглэгчид" /> */}
        </NavGroup>      
        <NavGroup label="Тохиргоо">
          {/* <NavItem icon={<BiPurchaseTagAlt />} label="Plans" />
        <NavItem icon={<BiRecycle />} label="Subsription" /> */}
          <AdminNavItem
            icon={<BiLogOut />}
            label="Гарах"
            onClick={() => auth.signOut()}
          />
        </NavGroup>
      </Stack>
    </Flex>
  );
};
