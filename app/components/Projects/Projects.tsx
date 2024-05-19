"use client";

import {
  Paper,
  Container,
  Text,
  Image,
  Badge,
  Group,
  Accordion,
  Button,
  Indicator,
} from "@mantine/core";
import { FaGithub, FaSpotify, FaDatabase } from "react-icons/fa";
import { MdPointOfSale, MdMuseum } from "react-icons/md";
import { TbBulbFilled } from "react-icons/tb";
import { IconArrowRight } from "@tabler/icons-react";
import classes from "./Projects.module.css";

const projectData = [
  {
    title: "What's Playing? A Spotify Explorer",
    description:
      "A web application that allows you to explore your Spotify listening history, including your top artists and tracks.",
    image: "/proj1.png",
    github: "https://github.com/gladwinc/spotifyappv1",
    link: "https://spotifyappv1.vercel.app/login",
    tags: [
      "React",
      "Next.js",
      "Spotify API",
      "JavaScript",
      "Bootstrap",
      "OAuth2",
    ],
    icon: <FaSpotify size={35} />,
  },
  {
    title: "MET Museum Explorer",
    description:
      "A Next.js web application that allows you to explore the MET Museum's collection of art.",
    image: "/proj2.png",
    github: "https://github.com/gladwinc/MET_Explorer",
    link: "https://met-explorer-lilac.vercel.app/",
    tags: ["React", "Next.js", "Met Museum API", "JavaScript", "Bootstrap"],
    icon: <MdMuseum size={35} />,
  },
  {
    title: "Sports Tournament Database",
    description:
      "An SQL-based DBMS designed for managing sports tournaments. This project includes ERD design, data modeling, and SQL schema.",
    image: "/proj3.png",
    github: "https://github.com/gladwinc/database-tournament",
    tags: ["SQL", "Oracle", "Draw.io"],
    icon: <FaDatabase size={30} />,
  },
  {
    title: "Point-of-Sale Application",
    description:
      "A C++ Point-of-Sale Application to manage inventory and sales.",
    image: "/proj4.png",
    github: "https://github.com/gladwinc/POS-system",
    tags: ["C++"],
    icon: <MdPointOfSale size={30} />,
  },
];

const Projects = () => {
  const projects = projectData.map((project) => (
    <Accordion.Item key={project.title} value={project.title}>
      <Accordion.Control pl={40} pr={40} pt={20} pb={20}>
        <Group wrap="nowrap">
          <Text mb={6}>{project.icon}</Text>
          <div>
            <Text size="xl" lh={1.3} fw={700} mb={10}>
              {project.title}
            </Text>
          </div>
        </Group>
        <Text size="lg" fw={450} c="dimmed" mb={15}>
          {project.description}
        </Text>
        {project.tags && (
          <Group gap={10}>
            {project.tags.map((tag, index) => (
              <Badge tt="none" variant="light" size="xl" key={index}>
                {tag}
              </Badge>
            ))}
          </Group>
        )}
      </Accordion.Control>
      <Accordion.Panel>
        <Group pl={30} pr={30}>
          {project.link && (
            <Indicator withBorder processing color="green" size={22}>
              <Button
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                component="a"
                variant="default"
                size="lg"
                radius="lg"
                leftSection={<TbBulbFilled size={23} />}>
                View App
              </Button>
            </Indicator>
          )}
          {project.github && (
            <Button
              component="a"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="default"
              size="lg"
              radius="lg"
              leftSection={<FaGithub size={23} />}>
              GitHub
            </Button>
          )}
        </Group>
        {project.image && <Image src={project.image} alt={project.title} />}
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Container size="md" mb={60} pt={100} id="projects">
      <Paper radius="xl" p={40} mb={15}>
        <Text ta="center" fw={700} size="40px">
          <span className={classes.highlight}>Projects</span>
        </Text>
      </Paper>
      <Accordion variant="separated" radius="xl">
        {projects}
      </Accordion>
      <Button
        fullWidth
        component="a"
        href="https://github.com/gladwinc"
        target="_blank"
        rel="noopener noreferrer"
        justify="space-between"
        variant="light"
        radius="xl"
        size="lg"
        rightSection={<IconArrowRight />}
        mt={15}>
        <Text pt={5}>
          <FaGithub size={23} />
        </Text>
        <Text fw={700} fz="lg" ml={10}>
          More on Github
        </Text>
      </Button>
    </Container>
  );
};

/* const Projects = () => {
  const projects = projectData.map((project) => (
    <Card withBorder key={project.title}>
      <Image src={project.image} alt={project.title} />
      <Text size="xl" fw={700}>
        {project.title}
      </Text>
      <Text size="lg">{project.description}</Text>
      {project.tags && (
        <Group>
          {project.tags.map((tag, index) => (
            <Badge tt="none" size="lg" key={index}>
              {tag}
            </Badge>
          ))}
        </Group>
      )}
    </Card>
  ));

  return (
    <Container size="md" mt={100} mb={40}>
      {
        <Paper withBorder radius="lg" p={40} mb={50}>
          <Text ta="center" fw={700} fz="xl">
            Projects
          </Text>
        </Paper>
      }
      <Stack>{projects}</Stack>
    </Container>
  );
}; */

export default Projects;
