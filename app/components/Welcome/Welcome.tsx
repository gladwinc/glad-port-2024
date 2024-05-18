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
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { Fredoka } from "next/font/google";
import classes from "./Welcome.module.css";

const fredoka = Fredoka({ subsets: ["latin"] });

const Welcome = () => {
  return (
    <Container mt={120}>
      <Center>
        <Indicator inline withBorder processing label="2024" fw={700} size={25}>
          <Badge variant="light" color="teal" size="xl">
            Looking for Internship
          </Badge>
        </Indicator>
      </Center>
      <Text
        ta="center"
        fw={700}
        size="75px"
        mt={50}
        style={{ fontFamily: fredoka.style.fontFamily }}>
        <span className={classes.name}>Gladwin Chan</span>
      </Text>
      <Group justify="center" mt={50}>
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
      </Group>
      <Center>
        <Button
          component="a"
          href="mailto:iamgladwin@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          fullWidth
          variant="transparent"
          mt={15}
          fz="xl"
          leftSection={<MdAlternateEmail />}>
          Send me a message!
        </Button>
      </Center>
      <Container size="xs">
        <Group wrap="nowrap" justify="center" mt={50}>
          <Avatar radius="lg" size="xxl" src="/glad3.png" />
          <div>
            <Text tt="uppercase" fz="md" fw={700} c="dimmed" mb={15}>
              Computer Programming Student
            </Text>
            <Text fz="lg" fw={500}>
              I am a developer who likes to build web applications with
              performance and user experience in mind.{" "}
              <Anchor
                href="/about"
                variant="gradient"
                gradient={{ from: "#07c8f9", to: "#0d41e1" }}
                fz="lg"
                fw={600}>
                More about me.
              </Anchor>
            </Text>
          </div>
        </Group>
      </Container>
    </Container>
  );
};

export default Welcome;
