"use client";

import {
  Container,
  Text,
  Timeline,
  SimpleGrid,
  Paper,
  Avatar,
  Group,
  Highlight,
} from "@mantine/core";
import { MdWavingHand, MdScience } from "react-icons/md";
import { FaMicroscope, FaGraduationCap, FaBook } from "react-icons/fa";
import { FaGear, FaFileCode } from "react-icons/fa6";
import classes from "./About.module.css";
const About = () => {
  return (
    <Container pt={80} pb={60} mt={20}>
      <div>
        <Paper radius="lg" p={20} mb={20}>
          <Text ta="center" fw={700} fz="40px">
            <span className={classes.highlight}>About</span>
          </Text>
        </Paper>
      </div>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
        <div>
          <div>
            <Paper radius="lg" p={40} mb={30} className={classes.paper}>
              <Highlight mb={20} fw={700} highlight="About me.">
                About me.
              </Highlight>
              <Group wrap="nowrap">
                <Avatar variant="default" radius="xl" size="md">
                  <MdWavingHand size={16} />
                </Avatar>
                <Highlight
                  fz="lg"
                  fw={500}
                  mb={20}
                  highlight="Hello, I'm Gladwin">
                  Hello, I'm Gladwin , a computer programming & analysis
                  student.
                </Highlight>
              </Group>
              <Group wrap="nowrap">
                <Avatar variant="default" radius="xl" size="md">
                  <FaMicroscope size={16} />
                </Avatar>
                <Highlight
                  fz="lg"
                  fw={500}
                  mb={20}
                  highlight="medical laboratory technologist.">
                  I come from a healthcare background, working as a medical
                  laboratory technologist.
                </Highlight>
              </Group>
              <Group wrap="nowrap">
                <Avatar variant="default" radius="xl" size="md">
                  <MdScience size={21} />
                </Avatar>
                <Text fz="lg" fw={500}>
                  I perform lab testing, including routine blood tests, and
                  specialized procedures for Measles, COVID-19, Bartonella,
                  Blastomyces and much more.
                </Text>
              </Group>
            </Paper>
          </div>
          <div>
            <Paper radius="lg" p={40} className={classes.paper}>
              <Timeline bulletSize={27} fz="lg" fw={500}>
                <Timeline.Item
                  bullet={<Avatar src="/s2_logo.png" size={37} />}
                  title="Seneca Polytechnic"
                  lineVariant="dashed">
                  <Text c="dimmed" size="md" fw={500}>
                    North York, ON
                  </Text>
                  <Text c="dimmed" size="md" fw={500}>
                    Computer Programming and Analysis
                  </Text>
                  <Text size="md" fw={500} mt={4}>
                    2022 - Present
                  </Text>
                </Timeline.Item>
                <Timeline.Item
                  bullet={<Avatar src="/mich_logo.jpg" size={35} />}
                  title="The Michener Institute of Education at UHN ">
                  <Text c="dimmed" size="md" fw={500}>
                    Toronto, ON
                  </Text>
                  <Text c="dimmed" size="md" fw={500}>
                    Advanced Diploma in Medical Laboratory Sciences
                  </Text>
                  <Text size="md" mt={4} fw={500}>
                    2017 - 2020
                  </Text>
                </Timeline.Item>
                <Timeline.Item
                  bullet={<Avatar src="/uw_logo.png" size={35} />}
                  title="University of Waterloo"
                  lineVariant="dashed">
                  <Text c="dimmed" size="md" fw={500}>
                    Waterloo, ON
                  </Text>
                  <Text c="dimmed" size="md" fw={500}>
                    Bachelor of Science in Biomedical Sciences
                  </Text>
                  <Text size="md" mt={4} fw={500}>
                    2012 - 2016
                  </Text>
                </Timeline.Item>
              </Timeline>
            </Paper>
          </div>
        </div>

        <div>
          <div>
            <Paper radius="lg" p={40} mb={30} className={classes.paper}>
              <Timeline bulletSize={27} fz="lg">
                <Timeline.Item
                  bullet={<Avatar src="/gov_on.png" size={35} />}
                  title="Government of Ontario">
                  <Text c="dimmed" size="md" fw={500}>
                    Toronto, ON
                  </Text>
                  <Text c="dimmed" size="md" fw={500}>
                    Web Application Developer
                  </Text>
                  <Text size="md" mt={4} fw={500}>
                    2023
                  </Text>
                </Timeline.Item>
                <Timeline.Item
                  bullet={<Avatar src="/health_on.png" size={35} />}
                  title="Public Health Ontario Laboratory">
                  <Text c="dimmed" size="md" fw={500}>
                    Toronto, ON
                  </Text>
                  <Text c="dimmed" size="md" fw={500}>
                    Medical Laboratory Technologist
                  </Text>
                  <Text size="md" mt={4} fw={500}>
                    2021 - Present
                  </Text>
                </Timeline.Item>
                <Timeline.Item
                  bullet={<Avatar src="/mh_logo.jpg" size={35} />}
                  title="Mackenzie Health Hospital">
                  <Text c="dimmed" size="md" fw={500}>
                    Vaughan, ON
                  </Text>
                  <Text c="dimmed" size="md" fw={500}>
                    Medical Laboratory Technologist
                  </Text>
                  <Text size="md" mt={4} fw={500}>
                    2019 - Present
                  </Text>
                </Timeline.Item>
              </Timeline>
            </Paper>
          </div>
          <div>
            <Paper radius="lg" p={40} className={classes.paper}>
              <Highlight
                mb={20}
                fw={700}
                highlight="From healthcare to computer programming.">
                From healthcare to computer programming.
              </Highlight>
              <Group wrap="nowrap">
                <Avatar variant="default" radius="xl" size="md">
                  <FaGraduationCap size={18} />
                </Avatar>
                <Highlight fz="lg" fw={500} mb={20} highlight="Bsc.">
                  I graduated from the University of Waterloo with a Bachelor of
                  Science (BSc.) in Biomedical Sciences, then earned an Advanced
                  Diploma in Laboratory Science at the Michener Institute.
                </Highlight>
              </Group>
              <Group wrap="nowrap">
                <Avatar variant="default" radius="xl" size="md">
                  <FaFileCode size={15} />
                </Avatar>
                <Highlight
                  fz="lg"
                  fw={500}
                  mb={20}
                  highlight="Computer Programming and Analysis">
                  I am now continuing my education at Seneca Polytechnic for
                  Computer Programming and Analysis.
                </Highlight>
              </Group>
              <Group wrap="nowrap">
                <Avatar variant="default" radius="xl" size="md">
                  <FaBook size={13} />
                </Avatar>
                <Highlight
                  span
                  fz="lg"
                  fw={500}
                  mb={20}
                  highlight="C/C++, Python, Java, JavaScript, SQL/NoSQL databases, data structures, and algorithms">
                  My coursework covers a wide range of languages and
                  technologies, including C/C++, Python, Java, JavaScript,
                  SQL/NoSQL databases, data structures, and algorithms.
                </Highlight>
              </Group>
              <Group wrap="nowrap">
                <Avatar variant="default" radius="xl" size="md">
                  <FaGear size={14} />
                </Avatar>
                <Highlight fz="lg" fw={500} highlight={["React", "Azure"]}>
                  During my first internship with the Government of Ontario, I
                  enhanced their client portal site using React and gained
                  experience with emerging technologies such as Azure.
                </Highlight>
              </Group>
            </Paper>
          </div>
        </div>
      </SimpleGrid>
    </Container>
  );
};

export default About;
