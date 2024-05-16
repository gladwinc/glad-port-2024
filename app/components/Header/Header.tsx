"use client";

import {
  Anchor,
  UnstyledButton,
  Group,
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { FaHome } from "react-icons/fa";
import classes from "./Header.module.css";
import { IconSun, IconMoon } from "@tabler/icons-react";

const links = [
  { link: "/", label: <FaHome size={24} /> },
  { link: "/#projects", label: "Projects" },
  { link: "/about", label: "About" },
  /*   { link: "mailto:iamgladwin@gmail.com", label: "Contact" },
   */
];

const Header = () => {
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
      fw={900}>
      {link.label}
    </UnstyledButton>
  ));

  return (
    <header className={classes.header}>
      <Group mt={30} gap={40} justify="center">
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
    </header>
  );
};

export default Header;
