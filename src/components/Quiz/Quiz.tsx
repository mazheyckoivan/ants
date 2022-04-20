import {
  AppBar,
  Card,
  CardContent,
  CardMedia,
  Container,
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { SRLWrapper } from "simple-react-lightbox";
import { Quiz1, Quiz2, Quiz3, Quiz4 } from "../../assets";

const Quiz = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg" disableGutters={matches} id="quiz">
      <Card
        sx={{
          minHeight: "50vh",
          marginY: "1rem",
          display: "flex",
          borderRadius: `${matches ? "unset" : theme.shape.borderRadius}`,
        }}
      >
        <Box>
          <CardContent>
            <Typography variant="h5" textAlign="center">
              Анкетирование сверстников
            </Typography>

            <Box padding={matches ? 2 : 3} sx={{}}>
              <Typography variant="body1">
                Когда в школе мы изучали насекомых на уроке человек и мир, меня
                очень заинтересовали муравьи. Я не знал, что бывают садовые
                муравьи, а тем более не мог предположить, что муравьи могут жить
                дома. Я стал изучать информацию в интернет источниках и узнал,
                что продаются муравьиные фермы. Я попросил маму купить мне
                муравьиную ферму. Мы долго искали, где же можно приобрести
                муравьиную ферму и колонию муравьев. Нашли специальный магазин и
                купили формикарий и колонию муравьев. Я выбрал именно этот вид,
                потому что они считаются гипоаллергенными и простыми в уходе.
              </Typography>

              <br />

              <Typography variant="body1">
                Из разных источников я узнал, как ухаживать за муравьями.
                Необходимо выполнять следующие правила: непрерывно увлажнять
                муравьиную ферму, правильно кормить, оградить от стресса.
              </Typography>

              <br />

              <Typography variant="body1">
                После покупки муравьиной фермы, я решил поделиться этим событием
                со своими одноклассниками. Многие из них не знали, что можно
                содержать дома муравьев. Тогда мне стало интересно, сколько моих
                сверстников знают о том, что можно выращивать муравьев в
                домашних условиях. С помощью моей учительницы мы разработали
                анкету, которая состояла из восьми вопросов и провели
                анкетирование во всех 2-х класса. В анкетировании приняли
                участие 72 учащихся.
              </Typography>
            </Box>

            <ImageList
              cols={matches ? 2 : 3}
              rowHeight={250}
              sx={{ margin: 0 }}
            >
              <ImageListItem>
                <img
                  style={{ borderRadius: 2 }}
                  src={Quiz1}
                  alt="Анкетирование сверстников"
                  loading="lazy"
                />
              </ImageListItem>

              <ImageListItem>
                <img
                  style={{ borderRadius: 2 }}
                  src={Quiz2}
                  alt="Анкетирование сверстников"
                  loading="lazy"
                />
              </ImageListItem>

              <ImageListItem>
                <img
                  style={{ borderRadius: 2 }}
                  src={Quiz3}
                  alt="Анкетирование сверстников"
                  loading="lazy"
                />
              </ImageListItem>

              {matches && (
                <ImageListItem>
                  <img
                    style={{ borderRadius: 2 }}
                    src={Quiz4}
                    alt="Анкетирование сверстников"
                    loading="lazy"
                  />
                </ImageListItem>
              )}
            </ImageList>
          </CardContent>
        </Box>

        {!matches && (
          <CardMedia
            component="img"
            sx={{ maxWidth: "30%", objectFit: "fill" }}
            image={Quiz4}
            alt="Анкетирование сверстников"
          />
        )}
      </Card>
    </Container>
  );
};

export default Quiz;
