import { AppBar, Container, Toolbar, Typography } from "@mui/material";

import Logo from "../../assets/logo.png";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar className={styles.header}>
          <img src={Logo} alt="app logo" />

          <div className={styles.titleContainer}>
            <Typography variant="h4" noWrap component="div">
              "Эти удивительные муравьи..."
            </Typography>

            <Typography variant="h6" noWrap component="div">
              Замкнутые экосистемы и муравьиные фермы
            </Typography>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
