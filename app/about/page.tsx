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
  Indicator,
} from "@mantine/core";
import { MdWavingHand } from "react-icons/md";
import { FaMicroscope, FaGraduationCap, FaSchool } from "react-icons/fa";
import { FaUserGear, FaBookOpenReader } from "react-icons/fa6";
import { PiCodeFill } from "react-icons/pi";
import classes from "./About.module.css";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({ subsets: ["latin"] });

const About = () => {
  return (
    <Container pt={80} pb={60} mt={20}>
      <div>
        <Paper radius="lg" p={20} mb={20}>
          <Text ta="center" fw={700} fz="50px">
            <span
              className={classes.highlight}
              style={{ fontFamily: fredoka.style.fontFamily }}>
              About
            </span>
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
                  Hello, I'm Gladwin, a software developer based in Toronto.
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
                  highlight="medical laboratory technologist">
                  I come from a healthcare background, working as a medical
                  laboratory technologist performing lab tests and specialized
                  procedures for measles, COVID-19, Bartonella, Blastomyces, and
                  more.
                </Highlight>
              </Group>
              <Group wrap="nowrap" align="flex-start">
                <Avatar variant="default" radius="md" size={45} mr={10}>
                  <PiCodeFill size={23} />
                </Avatar>
                <Highlight
                  fz={18}
                  fw={450}
                  highlight={"Junior Systems Developer"}>
                  I am currently working as a Junior Systems Developer,
                  utilizing AWS to support legacy systems migration and
                  developing interactive maps for data visualization.
                </Highlight>
              </Group>
            </Paper>
          </div>
          <div>
            <Paper radius="lg" p={40} className={classes.paper}>
              <Text mb={20} fz="lg" td="underline" fw={700}>
                Education
              </Text>
              <Timeline reverseActive lineWidth={3} bulletSize={40} fw={400}>
                <Timeline.Item
                  fz="lg"
                  bullet={
                    <Indicator withBorder processing size={13} color="green">
                      <Avatar src="/seneca_logo.png" radius="md" size={40} />
                    </Indicator>
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
                    2022 - 2024
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
              <Text mb={20} fz="lg" td="underline" fw={700}>
                Work Experience
              </Text>
              <Timeline lineWidth={3} bulletSize={40}>
                <Timeline.Item
                  fz="lg"
                  bullet={
                    <Indicator withBorder processing size={13} color="green">
                      <Avatar src="/mpac_logo.png" radius="sm" size={40} />{" "}
                    </Indicator>
                  }
                  title={
                    <span style={{ lineHeight: "1.3" }}>
                      Junior Systems Developer
                    </span>
                  }>
                  <Text size="lg" lh={1.2} fw={400}>
                    Municipal Property Assessment Corporation (MPAC)
                  </Text>
                  <Text c="dimmed" size="md" fw={450}>
                    Pickering, ON
                  </Text>
                  <Text size="md" mt={4} fw={450}>
                    2024 - Present
                  </Text>
                </Timeline.Item>
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
                    2019 - 2024
                  </Text>
                </Timeline.Item>
              </Timeline>
            </Paper>
          </div>
          <div>
            <Paper radius="lg" p={40} mb={30} className={classes.paper}>
              <Text mb={20} fz="lg" td="underline" fw={700}>
                Certifications
              </Text>
              <Group wrap="nowrap" align="flex-start">
                <Avatar src="/microsoft_logo.png" radius="md" size={40} />
                <div>
                  <Text fz={18} fw={500}>
                    Microsoft Azure Fundamentals
                  </Text>
                  <Text size="lg" fw={400}>
                    Microsoft
                  </Text>
                  <Text c="dimmed" size="md" fw={450}>
                    Credential ID A08411DC245203C4
                  </Text>
                  <Text size="md" mt={4} fw={450}>
                    Issued September 2024
                  </Text>
                </div>
              </Group>
            </Paper>
          </div>
        </div>
      </SimpleGrid>
    </Container>
  );
};

export default About;
