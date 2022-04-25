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
  BiUserPlus,
  BiWallet,
} from "react-icons/bi";
import { NavGroup } from "./NavGroup";
import { AdminNavItem } from "./AdminNavItem";

export const Sidebar = () => {
  return (
    <Flex h="full" w={64} direction="column" px="4" py="4">
      <Stack spacing="8" flex="1" overflow="auto" pt="8">
        <NavGroup label="Хэрэглэгч">
          <AdminNavItem icon={<BiUser />} label="Бүх бүртгэл" />
          <AdminNavItem icon={<BiUserCircle />} label="Багш хэрэглэгч" />
          <AdminNavItem icon={<BiUserPlus />} label="Сурагч хэрэглэгч" />
        </NavGroup>

        <NavGroup label="Контент">
          <AdminNavItem icon={<BiNews />} label="Бүх контент" />
          <AdminNavItem icon={<BiCheckShield />} label="Баталгаажсан" />
          <AdminNavItem icon={<BiGitPullRequest />} label="Хүсэлт илгээдсан" />
          <AdminNavItem icon={<BiRecycle />} label="Бүрэн бус" />
        </NavGroup>
        <NavGroup label="Борлуулалт">
          <AdminNavItem icon={<BiCreditCard />} label="Бүх худалдан авалт" />
          <AdminNavItem icon={<BiPurchaseTagAlt />} label="Купон-р авсан" />
          {/* <NavItem icon={<BiPurchaseTagAlt />} label="Plans" />
        <NavItem icon={<BiRecycle />} label="Subsription" /> */}
        </NavGroup>
        <NavGroup label="Тохиргоо">
          <AdminNavItem icon={<BiCategory />} label="Категори" />
          <AdminNavItem icon={<BiTagAlt />} label="Tag" />
          {/* <NavItem icon={<BiPurchaseTagAlt />} label="Plans" />
        <NavItem icon={<BiRecycle />} label="Subsription" /> */}
        </NavGroup>
      </Stack>
      <Box>
        <Stack spacing="1">
          {/* <NavItem subtle icon={<BiCog />} label="Тохирглл" /> */}
          <AdminNavItem
            subtle
            icon={<BiBuoy />}
            label="Тусламж & Заавар"
            // endElement={<Circle size="2" bg="blue.400" />}
          />
        </Stack>
      </Box>
    </Flex>
  );
};
