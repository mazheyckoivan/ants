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
import { F1, F2, F3, F4 } from "../../assets";

const Finally = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg" disableGutters={matches} id="finally">
      <Card
        sx={{
          display: "flex",
          marginY: "1rem",
          borderRadius: `${matches ? "unset" : theme.shape.borderRadius}`,
        }}
      >
        <Box>
          <CardContent>
            <Typography variant="h5" textAlign="center">
              Заключение
            </Typography>

            <br />

            <Typography variant="body1">
              Мы с родителями постарались и посчитали наших муравьев. На момент
              покупки их было: 20 рабочих и одна матка. Сейчас их больше 50
              особей. Кроме того, в формикарии много яиц, куколок и личинок
            </Typography>

            <br />
            <Typography variant="body1">
              Теперь я знаю про муравьев-жнецов достаточно много и могу
              рассказать своим сверстникам про жизнь муравьев в домашних
              условиях. При изучении литературы я выяснил, как нужно ухаживать
              за муравьями в условиях фермы, а экспериментальным путем получил
              подтверждение данной информации. Наблюдение за муравьями
              увлекательно. Я с уважением стал относиться не только к муравьям,
              но и ко всем другим животным. Времени на содержание требуется
              очень мало. Быт этой семьи наполнен чередой интересных событий,
              которые в обычной жизни мы не увидим.
            </Typography>
            <br />
            <Typography variant="body1">
              Вывод: численность муравьев увеличилась, колония развивается.
              Значит, созданные мною условия благоприятны для жизни моих
              питомцев в неволе.
            </Typography>
            <br />
            <Typography variant="body1">
              Гипотеза 2 подтвердилась. Муравьи-жнецы могут жить в домашних
              условиях при правильном уходе и соблюдению правил питания.
            </Typography>
            <br />
            <Typography variant="h6" textAlign="center">
              Результат.
            </Typography>
            <br />
            <Typography variant="body1">
              Считаю, что я достиг поставленной цели. Моя колония успешно
              развивается, созданы все необходимые условия для жизни муравьев
              дома.
            </Typography>
            <br />
            <Typography variant="body1">
              Свои наблюдения и результаты экспериментов, я обобщил и разработал
              памятку по уходу за муравьями в домашних условиях, которая поможет
              тем, кто уже имеет формикарий или собирается его приобрести.
            </Typography>

            <ImageList cols={2} rowHeight={300}>
              <ImageListItem>
                <img
                  style={{ borderRadius: 2 }}
                  src={F1}
                  alt="quiz"
                  loading="lazy"
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  style={{ borderRadius: 2 }}
                  src={F2}
                  alt="quiz"
                  loading="lazy"
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  style={{ borderRadius: 2 }}
                  src={F3}
                  alt="quiz"
                  loading="lazy"
                />
              </ImageListItem>

              {matches && (
                <ImageListItem>
                  <img
                    style={{ borderRadius: 2 }}
                    src={F4}
                    alt="quiz"
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
            sx={{ objectFit: "cover" }}
            image={F4}
            alt="boy"
          />
        )}
      </Card>
    </Container>
  );
};

export default Finally;
