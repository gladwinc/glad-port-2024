"use client";
import { useState } from "react";
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
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FaHome } from "react-icons/fa";
import classes from "./Header.module.css";
import { IconSun, IconMoon } from "@tabler/icons-react";

const links = [
  { link: "/", label: <FaHome size={30} /> },
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

  const [isHovered, setIsHovered] = useState(false);
  const handleImageClick = () => {
    window.location.href = "/";
  };

  return (
    <header className={classes.header}>
      <Container size="md" mt={30} className={classes.inner}>
        <div className={classes.left}>
          <Image
            src="/gladwin_name.png"
            h={56}
            alt="Gladwin"
            hiddenFrom="xs"
            onClick={handleImageClick}
            style={{
              cursor: "pointer",
              transition: "transform 250ms",
              transform: isHovered ? "scale(1.03)" : "scale(1)",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
        <div className={classes.center}>
          <Group gap={40} visibleFrom="xs">
            {items}
            <ActionIcon
              onClick={() =>
                setColorScheme(
                  computedColorScheme === "light" ? "dark" : "light"
                )
              }
              variant="transparent"
              aria-label="Toggle color scheme">
              {computedColorScheme === "dark" ? (
                <IconSun color="orange" stroke={3.5} size={40} />
              ) : (
                <IconMoon stroke={3.5} size={40} />
              )}
            </ActionIcon>
          </Group>
        </div>
        <Burger
          opened={opened}
          onClick={toggle}
          mb={10}
          hiddenFrom="xs"
          size="sm"
        />
      </Container>
      <Drawer opened={opened} onClose={toggle} size="100%">
        <Stack pl={10} mt={50}>
          {items}
          <ActionIcon
            onClick={() =>
              setColorScheme(computedColorScheme === "light" ? "dark" : "light")
            }
            variant="transparent"
            aria-label="Toggle color scheme">
            {computedColorScheme === "dark" ? (
              <IconSun color="orange" stroke={3.5} size={40} />
            ) : (
              <IconMoon stroke={3.5} size={40} />
            )}
          </ActionIcon>
        </Stack>
      </Drawer>
    </header>
  );
};

export default Header;
