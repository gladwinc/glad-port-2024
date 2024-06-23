"use client";

import {
  Container,
  Badge,
  Center,
  Indicator,
  Text,
  Button,
  Group,
  Avatar,
  Anchor,
} from "@mantine/core";
import { FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({ subsets: ["latin"] });

const Welcome = () => {
  return (
    <Container size="sm" mt={120}>
      <Center>
        <Indicator inline withBorder processing label="2024" fw={700} size={30}>
          <Badge variant="light" color="teal" size="xl" p={20}>
            Looking for Internship
          </Badge>
        </Indicator>
      </Center>
      <Text
        ta="center"
        fw={700}
        size="75px"
        mt={30}
        style={{ fontFamily: fredoka.style.fontFamily }}>
        Gladwin Chan
      </Text>

      <Group wrap="nowrap" align="flex-start">
        <Avatar size={120} mt={30} src="/glad3.png" />
        <Text size="lg" fw={450} mt={30}>
          I am a{" "}
          <Text span fw={700}>
            software developer
          </Text>{" "}
          who specializes in creating{" "}
          <Text span fw={700}>
            {" "}
            web experiences
          </Text>{" "}
          that are both performant and user-friendly. I build applications
          leveraging the latest web technologies to deliver exceptional{" "}
          <Text span fw={700}>
            user experiences
          </Text>
          .{" "}
          <Anchor
            href="/about"
            variant="gradient"
            gradient={{ from: "#07c8f9", to: "#0d41e1" }}
            fz="lg"
            fw={700}>
            More about me{" "}
            <IoIosArrowDroprightCircle
              size={22}
              style={{ position: "relative", top: "4.5px" }}
            />
          </Anchor>
        </Text>
      </Group>

      <Group justify="center" mt={30}>
        <Button
          component="a"
          href="https://www.linkedin.com/in/gladwinchan/"
          target="_blank"
          rel="noopener noreferrer"
          variant="light"
          size="xl"
          radius="xl"
          leftSection={<FaLinkedin />}>
          LinkedIn
        </Button>
        <Button
          component="a"
          href="https://github.com/gladwinc/"
          target="_blank"
          rel="noopener noreferrer"
          variant="light"
          size="xl"
          radius="xl"
          leftSection={<FaGithub />}>
          GitHub
        </Button>
        <Button
          component="a"
          href="mailto:iamgladwin@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          variant="light"
          size="xl"
          radius="xl"
          leftSection={<FaPaperPlane />}>
          Email
        </Button>
      </Group>
    </Container>
  );
};

export default Welcome;
