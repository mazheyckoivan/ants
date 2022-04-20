import {
  Card,
  CardMedia,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { SRLWrapper } from "simple-react-lightbox";
import { SummaryPhoto } from "./assets";
import AdditionalSources from "./components/AdditionalSources";
import AntSpecies from "./components/AntSpecies";
import Background from "./components/Background";
import Finally from "./components/Finally";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Practice from "./components/Practice";
import Quiz from "./components/Quiz";
import QuizResult from "./components/QuizResult";
import Summary from "./components/Summary/Summary";
import Theory from "./components/Theory";

const App = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="App">
      <SRLWrapper>
        <Background />

        <Header />

        {matches && (
          <Container
            maxWidth="lg"
            disableGutters={matches}
            id="additional-sources"
          >
            <Card
              sx={{
                marginY: "1rem",
                borderRadius: "unset",
              }}
            >
              <CardMedia
                component="img"
                sx={{ objectFit: "cover", flex: 1 }}
                src={SummaryPhoto}
                width={"100%"}
                alt="Вступление"
              />
            </Card>
          </Container>
        )}

        <Summary />

        <Quiz />

        <QuizResult />

        <Theory />

        <AntSpecies />

        <Practice />

        <Finally />

        <AdditionalSources />

        <Footer />
      </SRLWrapper>
    </div>
  );
};

export default App;
