import {
  Container,
  Badge,
  Center,
  Indicator,
  Text,
  Button,
  Group,
  Avatar,
  Paper,
} from "@mantine/core";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Welcome = () => {
  return (
    <Container mt={150}>
      <Center>
        <Indicator inline withBorder processing label="2024" fw={700} size={25}>
          <Badge variant="light" color="teal" size="xl">
            Looking for Internship
          </Badge>
        </Indicator>
      </Center>
      <Text ta="center" fw={900} size="55px" mt={50}>
        Gladwin Chan
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
            </Text>
          </div>
        </Group>
      </Container>
    </Container>
  );
};

export default Welcome;
