"use client";

import {
  UnstyledButton,
  Group,
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
  Burger,
  Container,
  Drawer,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FaHome } from "react-icons/fa";
import classes from "./Header.module.css";
import { IconSun, IconMoon } from "@tabler/icons-react";

const links = [
  { link: "/", label: <FaHome size={24} /> },
  { link: "/#projects", label: "Projects" },
  { link: "/about", label: "About" },
  { link: "mailto:iamgladwin@gmail.com", label: "Contact" },
];

const Header = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const items = links.map((link) => (
    <UnstyledButton
      component="a"
      href={link.link}
      key={link.link}
      fz={"lg"}
      fw={900}
      onClick={close}>
      {link.label}
    </UnstyledButton>
  ));

  return (
    <header className={classes.header}>
      <Container mt={30}>
        <Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Group>
        <Group gap={40} justify="center" visibleFrom="xs">
          {items}
          <ActionIcon
            onClick={() =>
              setColorScheme(computedColorScheme === "light" ? "dark" : "light")
            }
            variant="transparent"
            size="xl"
            aria-label="Toggle color scheme">
            {computedColorScheme === "dark" ? (
              <IconSun color="orange" stroke={3.5} size={24} />
            ) : (
              <IconMoon stroke={3.5} size={24} />
            )}
          </ActionIcon>
        </Group>
      </Container>
      <Drawer opened={opened} onClose={toggle} size="100%" padding="md">
        <Stack mt={20}>
          {items}{" "}
          <ActionIcon
            onClick={() =>
              setColorScheme(computedColorScheme === "light" ? "dark" : "light")
            }
            variant="transparent"
            size="xl"
            aria-label="Toggle color scheme"
            pr={20}>
            {computedColorScheme === "dark" ? (
              <IconSun color="orange" stroke={3.5} size={24} />
            ) : (
              <IconMoon stroke={3.5} size={24} />
            )}
          </ActionIcon>
        </Stack>
      </Drawer>
    </header>
  );
};

export default Header;
