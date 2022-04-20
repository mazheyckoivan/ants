import { AppBar, Container, Typography } from "@mui/material";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <AppBar position="static" className={styles.footer}>
      <Container maxWidth="xl">
        <Typography variant="h5">
          Пойдём вместе исследовать этот увлекательный мир!!!
        </Typography>
      </Container>
    </AppBar>
  );
};

export default Footer;
