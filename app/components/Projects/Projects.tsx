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
import { FaGithub, FaSpotify, FaDatabase, FaMusic } from "react-icons/fa";
import { MdPointOfSale, MdMuseum } from "react-icons/md";
import { TbBulbFilled } from "react-icons/tb";
import { IconArrowRight } from "@tabler/icons-react";
import { FaObjectUngroup } from "react-icons/fa6";
import classes from "./Projects.module.css";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({ subsets: ["latin"] });

const projectData = [
  {
    title: "Object Detection Using Pre-Trained Machine Learning Models",
    description:
      "A web application that leverages pre-trained machine learning models to detect objects in images. It utilizes the React framework, Vite for efficient development, TensorFlow for machine learning, and Groq for AI-generated insights.",
    image: "/proj0.png",
    github: "https://github.com/gladwinc/tensorflow-object-detection",
    link: "https://tensorflow-object-detection-one.vercel.app/",
    tags: [
      "React",
      "Vite",
      "TensorFlow",
      "LLM Integration",
      "MobileNet",
      "Coco-SSD",
      "Groq AI",
      "JavaScript",
      "Tailwind",
    ],
    icon: <FaObjectUngroup size={35} />,
  },
  {
    title: "Spotify Explorer: Uncover Your Listening History",
    description:
      "This web application allows users to explore their Spotify listening history over three time periods: 1 month, 6 months, and 1 year. Users can copy and share their listening history easily. The app integrates with the Spotify API to provide personalized insights into top artists and tracks.",
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
    title: "MET Museum Explorer: Explore Art Collections Online",
    description:
      "A Next.js web application that allows you to explore the MET Museum's extensive art collection. It features advanced search capabilities, session history tracking, and the ability to save your favourites for easy access.",
    image: "/proj2.png",
    github: "https://github.com/gladwinc/MET_Explorer",
    link: "https://met-explorer-lilac.vercel.app/",
    tags: ["React", "Next.js", "Met Museum API", "JavaScript", "Bootstrap"],
    icon: <MdMuseum size={35} />,
  },
  {
    title: "Database Design for Sports Tournaments",
    description:
      "This SQL-based Database Management System (DBMS) project is designed for managing sports tournaments. It features an Entity-Relationship Diagram (ERD) to visualize the relationships between entities, and a SQL script to create and populate the database. This design has been validated with 100+ rows of data, and is ready to be used by tournament organizers.",
    image: "/proj3.png",
    github: "https://github.com/gladwinc/database-tournament",
    tags: ["SQL", "Oracle", "Draw.io"],
    icon: <FaDatabase size={30} />,
  },
  {
    title: "Record Store Website",
    description:
      "A website for a record store with responsive design, genre-filtered music catalog, and a contact form. Backend powered by Node.js and Express.js.",
    image: "/proj5.png",
    github: "https://github.com/gladwinc/record-store",
    link: "https://record-store-bqxx.onrender.com/",
    tags: ["Node.js", "Express.js", "HTML", "CSS", "JavaScript"],
    icon: <FaMusic size={30} />,
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
        <Group justify="center" mb={10}>
          {project.link && (
            <Indicator withBorder processing color="green" size={16}>
              <Button
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                component="a"
                variant="default"
                color="default"
                size="lg"
                radius="md"
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
              color="default"
              size="lg"
              radius="md"
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
    <Container size="md" mb={60} pt={70} id="projects">
      <Paper radius="xl" p={40} mb={15}>
        <Text ta="center" fw={700} size="50px">
          <span
            className={classes.highlight}
            style={{ fontFamily: fredoka.style.fontFamily }}>
            Projects
          </span>
        </Text>
      </Paper>
      <Accordion chevronPosition="right" variant="separated" radius="xl">
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
