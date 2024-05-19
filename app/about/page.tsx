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
              <Highlight mb={20} fz="lg" fw={700} highlight="About me.">
                About me.
              </Highlight>
              <Group wrap="nowrap" align="flex-start">
                <Avatar variant="default" radius="md" size={45} mr={10}>
                  <MdWavingHand size={18} />
                </Avatar>
                <Highlight
                  fz={18}
                  fw={450}
                  mb={20}
                  highlight="Hello, I'm Gladwin">
                  Hello, I'm Gladwin, a computer programming & analysis student.
                </Highlight>
              </Group>
              <Group wrap="nowrap" align="flex-start">
                <Avatar variant="default" radius="md" size={45} mr={10}>
                  <FaMicroscope size={18} />
                </Avatar>
                <Highlight
                  fz={18}
                  fw={450}
                  mb={20}
                  highlight="medical laboratory technologist.">
                  I come from a healthcare background, working as a medical
                  laboratory technologist.
                </Highlight>
              </Group>
              <Group wrap="nowrap" align="flex-start">
                <Avatar variant="default" radius="md" size={45} mr={10}>
                  <MdScience size={23} />
                </Avatar>
                <Text fz={18} fw={450}>
                  I perform lab testing, including routine blood tests, and
                  specialized procedures for measles, COVID-19, Bartonella,
                  Blastomyces and much more.
                </Text>
              </Group>
            </Paper>
          </div>
          <div>
            <Paper radius="lg" p={40} className={classes.paper}>
              <Timeline reverseActive lineWidth={3} bulletSize={40} fw={400}>
                <Timeline.Item
                  fz="lg"
                  bullet={
                    <Avatar src="/seneca_logo.png" radius="md" size={40} />
                  }
                  title={
                    <span style={{ lineHeight: "1.3" }}>
                      Advanced Diploma in Computer Programming and Analysis
                    </span>
                  }
                  lineVariant="dashed">
                  <Text size="lg" lh={1.2} fw={400}>
                    Seneca College
                  </Text>
                  <Text c="dimmed" size="md" fw={450}>
                    North York, ON
                  </Text>
                  <Text size="md" fw={450} mt={4}>
                    2022 - Present
                  </Text>
                </Timeline.Item>
                <Timeline.Item
                  fz="lg"
                  bullet={<Avatar src="/mich_logo.jpg" radius="md" size={40} />}
                  title={
                    <span style={{ lineHeight: "1.3" }}>
                      Advanced Diploma in Medical Laboratory Sciences
                    </span>
                  }>
                  <Text size="lg" lh={1.2} fw={400}>
                    The Michener Institute of Education at UHN
                  </Text>
                  <Text c="dimmed" size="md" fw={450}>
                    Toronto, ON
                  </Text>
                  <Text size="md" mt={4} fw={450}>
                    2017 - 2020
                  </Text>
                </Timeline.Item>
                <Timeline.Item
                  fz="lg"
                  bullet={<Avatar src="/uw_logo.jpg" radius="md" size={40} />}
                  title={
                    <span style={{ lineHeight: "1.3" }}>
                      Bachelor of Science (BSc) in Biomedical Sciences
                    </span>
                  }
                  lineVariant="dashed">
                  <Text size="lg" fw={400} lh={1.2}>
                    University of Waterloo
                  </Text>
                  <Text c="dimmed" size="md" fw={450}>
                    Waterloo, ON
                  </Text>
                  <Text size="md" mt={4} fw={450}>
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
              <Timeline lineWidth={3} bulletSize={40}>
                <Timeline.Item
                  fz="lg"
                  bullet={<Avatar src="/gov_logo.png" radius="sm" size={40} />}
                  title={
                    <span style={{ lineHeight: "1.3" }}>
                      Web Application Developer
                    </span>
                  }>
                  <Text size="lg" lh={1.2} fw={400}>
                    Government of Ontario
                  </Text>
                  <Text c="dimmed" size="md" fw={450}>
                    Toronto, ON
                  </Text>
                  <Text size="md" mt={4} fw={450}>
                    2023
                  </Text>
                </Timeline.Item>
                <Timeline.Item
                  fz="lg"
                  bullet={<Avatar src="/ph_logo.jpg" radius="md" size={40} />}
                  title={
                    <span style={{ lineHeight: "1.3" }}>
                      Medical Laboratory Technologist
                    </span>
                  }>
                  <Text size="lg" lh={1.2} fw={400}>
                    Public Health Ontario Laboratory
                  </Text>
                  <Text c="dimmed" size="md" fw={450}>
                    Toronto, ON
                  </Text>
                  <Text size="md" mt={4} fw={450}>
                    2021 - Present
                  </Text>
                </Timeline.Item>
                <Timeline.Item
                  fz="lg"
                  bullet={<Avatar src="/mh_logo.jpg" radius="md" size={40} />}
                  title={
                    <span style={{ lineHeight: "1.3" }}>
                      Medical Laboratory Technologist
                    </span>
                  }>
                  <Text size="lg" lh={1.2} fw={400}>
                    Mackenzie Health Hospital
                  </Text>
                  <Text c="dimmed" size="md" fw={450}>
                    Vaughan, ON
                  </Text>
                  <Text size="md" mt={4} fw={450}>
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
                fz="lg"
                highlight="From healthcare to computer programming.">
                From healthcare to computer programming.
              </Highlight>
              <Group wrap="nowrap" align="flex-start">
                <Avatar variant="default" radius="md" size={45} mr={10}>
                  <FaGraduationCap size={21} />
                </Avatar>
                <Highlight fz={18} fw={450} mb={20} highlight="Bsc.">
                  I graduated from the University of Waterloo with a Bachelor of
                  Science (BSc.) in Biomedical Sciences, then earned an Advanced
                  Diploma in Laboratory Science at the Michener Institute.
                </Highlight>
              </Group>
              <Group wrap="nowrap" align="flex-start">
                <Avatar variant="default" radius="md" size={45} mr={10}>
                  <FaFileCode size={17} />
                </Avatar>
                <Highlight
                  fz={18}
                  fw={450}
                  mb={20}
                  highlight="Computer Programming and Analysis">
                  I am now continuing my education at Seneca Polytechnic for
                  Computer Programming and Analysis.
                </Highlight>
              </Group>
              <Group wrap="nowrap" align="flex-start">
                <Avatar variant="default" radius="md" size={45} mr={10}>
                  <FaBook size={15} />
                </Avatar>
                <Highlight
                  span
                  fz={18}
                  fw={450}
                  mb={20}
                  highlight="C/C++, Python, Java, JavaScript, SQL/NoSQL databases, data structures, and algorithms">
                  My coursework covers a wide range of languages and
                  technologies, including C/C++, Python, Java, JavaScript,
                  SQL/NoSQL databases, data structures, and algorithms.
                </Highlight>
              </Group>
              <Group wrap="nowrap" align="flex-start">
                <Avatar variant="default" radius="md" size={45} mr={10}>
                  <FaGear size={17} />
                </Avatar>
                <Highlight fz={18} fw={450} highlight={["React", "Azure"]}>
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
