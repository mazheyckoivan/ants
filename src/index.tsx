import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f1b24b",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById("root")
);
