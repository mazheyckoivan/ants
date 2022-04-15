import {
  AppBar,
  Card,
  CardContent,
  CardMedia,
  Container,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Quiz1, Quiz2, Quiz3, Quiz4 } from "../../assets";

const Quiz = () => {
  return (
    <Container maxWidth="lg" id="quiz">
      <Card
        sx={{
          minHeight: "50vh",
          marginY: "1rem",
          display: "flex",
        }}
      >
        <Box>
          <CardContent>
            <Typography variant="h5" textAlign="center">
              Анкетирование сверстников
            </Typography>

            <Box padding={3} sx={{}}>
              <Typography variant="body1">
                Когда в школе мы изучали насекомых на уроке человек и мир, меня
                очень заинтересовали муравьи. Я не знал, что бывают садовые
                муравьи, а тем более не мог предположить, что муравьи могут жить
                дома. Я стал изучать информацию в интернет источниках и узнал,
                что продаются муравьиные фермы. Я попросил маму купить мне
                муравьиную ферму. Мы долго искали, где же можно приобрести
                муравьиную ферму и колонию муравьев. Нашли специальный магазин и
                купили формикарий и колонию муравьев. Я выбрал именно этот вид,
                потому что они считаются гипоаллергенными и простыми в уходе. Из
                разных источников я узнал, как ухаживать за муравьями.
                Необходимо выполнять следующие правила: непрерывно увлажнять
                муравьиную ферму, правильно кормить, оградить от стресса. После
                покупки муравьиной фермы, я решил поделиться этим событием со
                своими одноклассниками. Многие из них не знали, что можно
                содержать дома муравьев. Тогда мне стало интересно, сколько моих
                сверстников знают о том, что можно выращивать муравьев в
                домашних условиях. С помощью моей учительницы мы разработали
                анкету, которая состояла из восьми вопросов и провели
                анкетирование во всех 2-х класса. В анкетировании приняли
                участие 72 учащихся.
              </Typography>
            </Box>

            <ImageList cols={3} rowHeight={250} sx={{ margin: 0 }}>
              <ImageListItem>
                <img
                  style={{ borderRadius: 2 }}
                  src={Quiz1}
                  alt="quiz"
                  loading="lazy"
                />
              </ImageListItem>

              <ImageListItem>
                <img
                  style={{ borderRadius: 2 }}
                  src={Quiz2}
                  alt="quiz"
                  loading="lazy"
                />
              </ImageListItem>

              <ImageListItem>
                <img
                  style={{ borderRadius: 2 }}
                  src={Quiz3}
                  alt="quiz"
                  loading="lazy"
                />
              </ImageListItem>
            </ImageList>
          </CardContent>
        </Box>

        <CardMedia
          component="img"
          sx={{ maxWidth: "30%", objectFit: "fill" }}
          image={Quiz4}
          alt="boy"
        />
      </Card>
    </Container>
  );
};

export default Quiz;
