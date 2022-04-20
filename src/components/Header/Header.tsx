import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import Logo from "../../assets/logo.png";

import styles from "./Header.module.css";

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="static">
      <Container maxWidth="xl" disableGutters>
        <Toolbar className={styles.header} disableGutters>
          {!matches && <img src={Logo} alt="app logo" />}

          <div className={styles.titleContainer}>
            <Typography variant={`${matches ? "h5" : "h4"}`} component="div">
              "Эти удивительные муравьи..."
            </Typography>

            <Typography variant={`${matches ? "h6" : "h5"}`} component="div">
              Замкнутые экосистемы и муравьиные фермы
            </Typography>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
