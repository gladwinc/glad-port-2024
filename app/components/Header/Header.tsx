import { Anchor, Group } from "@mantine/core";
import { FaHome } from "react-icons/fa";
import classes from "./Header.module.css";

const links = [
  { link: "/", label: <FaHome size={24} /> },
  { link: "/#projects-section", label: "Projects" },
  { link: "/about", label: "About" },
  { link: "mailto:iamgladwin@gmail.com", label: "Contact" },
];

const Header = () => {
  const items = links.map((link) => (
    <Anchor
      href={link.link}
      key={link.link}
      fz={"lg"}
      fw={900}
      c="black"
      className={classes.link}>
      {link.label}
    </Anchor>
  ));

  return (
    <header className={classes.header}>
      <Group mt={30} gap={40} justify="center">
        {items}
      </Group>
    </header>
  );
};

export default Header;
