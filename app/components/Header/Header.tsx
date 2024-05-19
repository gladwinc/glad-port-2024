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
import classes from "./Header.module.css";
import { AiTwotoneHome } from "react-icons/ai";
import { PiSunDimDuotone, PiMoonDuotone } from "react-icons/pi";

const links = [
  /*   { link: "/", label: <AiTwotoneHome size={27} /> },
   */ { link: "/#projects", label: "Projects" },
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
      key={link.label}
      fz={"lg"}
      fw={800}
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
      <Container size="md" mt={30}>
        <Group justify="space-between">
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
          <Burger
            opened={opened}
            onClick={toggle}
            mb={10}
            hiddenFrom="xs"
            size="sm"
          />
          <Drawer opened={opened} onClose={toggle} size="100%">
            <Stack pl={10} mt={50}>
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
                  <PiSunDimDuotone strokeWidth={2} color="orange" size={40} />
                ) : (
                  <PiMoonDuotone strokeWidth={2} size={40} />
                )}
              </ActionIcon>
            </Stack>
          </Drawer>
        </Group>
        <Group gap={40} justify="center" visibleFrom="xs">
          <ActionIcon
            component="a"
            href="/"
            size={40}
            variant="transparent"
            aria-label="Home">
            <AiTwotoneHome color="black" size={28} />
          </ActionIcon>
          {items}
          <ActionIcon
            size={33}
            onClick={() =>
              setColorScheme(computedColorScheme === "light" ? "dark" : "light")
            }
            variant="transparent"
            aria-label="Toggle color scheme">
            {computedColorScheme === "dark" ? (
              <PiSunDimDuotone strokeWidth={2} color="orange" size={30} />
            ) : (
              <PiMoonDuotone strokeWidth={2} size={30} />
            )}
          </ActionIcon>
        </Group>
      </Container>
    </header>
  );
};

export default Header;
