import {
  AppBar,
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  P11,
  P13,
  P12,
  P14,
  P15,
  P16,
  P17,
  P21,
  P22,
  P23,
  P24,
  P25,
  P26,
  P31,
  P32,
  P33,
  P34,
  P41,
  P42,
} from "../../assets";

const Practice = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg" disableGutters={matches} id="practice">
      <Card
        sx={{
          marginY: "1rem",
          borderRadius: `${matches ? "unset" : theme.shape.borderRadius}`,
        }}
      >
        <AppBar position="relative" sx={{ padding: "1rem" }}>
          <Typography variant="h5" textAlign="center">
            Практическая часть
          </Typography>
        </AppBar>

        <CardContent>
          <Box padding={matches ? 0 : 2}>
            <Typography variant="body1">
              Для того, чтобы создать памятку по уходу за муравьями-жнецами в
              домашних условиях, мне необходимо было провести эксперименты. На
              основе полученных результатов я смогу разработать для своих
              сверстников подробную памятку по уходу за муравьями и муравьиной
              фермой.
            </Typography>

            <br />
            <Divider variant="middle" sx={{ whiteSpace: "pre-wrap" }}>
              <Typography variant="h5" textAlign="center" id="practice1">
                <span style={{ whiteSpace: "nowrap" }}>Эксперимент 1:</span>{" "}
                Заселение муравьев в муравьиную ферму.
              </Typography>
            </Divider>
            <br />

            <Typography variant="body1">
              Колония была маленькая, она находилась в пробирке и состояла из
              матки и 20 рабочих муравьев. Так же в колбе был корм и вода.
            </Typography>

            <Typography variant="body1">
              Я выбрал место для фермы, с учетом того, что там нет прямого
              солнечного света и сквозняка. Для переселения муравьев необходимо
              увлажнить ферму с помощью автоматической поилки. Присоединить
              пробирку с муравьями к формикарию с помощью пластиковой трубочки.
            </Typography>

            <ImageList cols={4} variant="masonry">
              <ImageListItem>
                <img
                  style={{ borderRadius: 2 }}
                  src={P11}
                  alt="quiz"
                  loading="lazy"
                />
              </ImageListItem>

              <ImageListItem>
                <img
                  style={{ borderRadius: 2 }}
                  src={P15}
                  alt="quiz"
                  loading="lazy"
                />
              </ImageListItem>

              <ImageListItem>
                <img
                  style={{ borderRadius: 2 }}
                  src={P12}
                  alt="quiz"
                  loading="lazy"
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  style={{ borderRadius: 2 }}
                  src={P13}
                  alt="quiz"
                  loading="lazy"
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  style={{ borderRadius: 2 }}
                  src={P14}
                  alt="quiz"
                  loading="lazy"
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  style={{ borderRadius: 2 }}
                  src={P16}
                  alt="quiz"
                  loading="lazy"
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  style={{ borderRadius: 2 }}
                  src={P17}
                  alt="quiz"
                  loading="lazy"
                />
              </ImageListItem>
            </ImageList>

            <Typography variant="body1">
              Далее необходимо дождаться самостоятельного переселения муравьев.
            </Typography>
            <br />
            <Typography variant="body1">
              Мы с родителями стали наблюдать. На этом этапе, я познакомился с
              муравьями-разведчиками и рабочими муравьями. Два
              муравья-разведчика осторожно заглянули в гипсовую часть жилища и
              вернулись к колонии. Спустя несколько минут муравьи-рабочие стали
              осваивать новую территорию. После изучения нового дома,
              муравьи-рабочие вернулись к матке. Было видно, как они общаются
              между собой с помощью усиков.
            </Typography>
            <br />
            <Typography variant="body1">
              Мы оставили их на ночь, чтобы муравьи могли спокойно переселиться
              из пробирки, без лишнего стресса. Утром мы увидели, что муравьи
              переселились и перенесли свою королеву-мать. Весь корм, который
              находился в пробирке, рабочие муравьи перенесли на арену и сложили
              все в одном месте. Также они поступили и с яйцами.
            </Typography>
            <br />
            <Typography variant="body1">
              Муравьиная семья стала осваивать свой новый дом. Первое, что я
              увидел, это рабочие муравьи стали делать уборку. Они выбрали место
              и снесли туда весь образовавшийся мусор. Вторая часть муравье
              следили за яйцами и маткой (Приложение 3).
            </Typography>
            <br />
            <Typography variant="body1">
              Вывод: у всех муравьев свои обязанности, поэтому им удается
              прекрасно вести свое хозяйство, четко выполняя все действия.
              Переселение - это стресс для муравьев, но не один муравей моей
              фермы не пострадал, я строго следовал инструкции. Задача по
              переселению выполнена успешно. 
            </Typography>

            <br />
            <Divider
              variant="middle"
              id="practice2"
              sx={{ whiteSpace: "pre-wrap" }}
            >
              <Typography variant="h5" textAlign="center">
                <span style={{ whiteSpace: "nowrap" }}>Эксперимент 2:</span>{" "}
                Предпочтения в питании и развитие муравьев.
              </Typography>
            </Divider>
            <br />

            <Typography variant="body1">
              Следующим этапом нужно было накормить подопечных. В рекомендации
              по уходу было написано: для того, чтобы колония быстро
              развивалась, необходимо их правильно кормить. Есть много
              ограничений. Чтобы не погубить колонию, я следую данным правилам.
            </Typography>
            <br />
            <Typography variant="body1">
              Кроме сухого корма, который входил в комплект к муравьям и
              муравьиной ферме (зерна мака, клевера, горчицы, рапса), можно
              давать белковую пищу (мясо, печень курицы, сваренные без соли). В
              первые две недели я кормил муравьев только зернами. Семена легко
              усваиваются организмом, а муравьи получают энергию для
              жизнедеятельности. Я насыпал корм на арену. Муравьи сразу же
              принимались за работу. Часть зерен перенесли в одну из камер
              (кладовку), другая часть оставалась на арене. Они быстро очищают
              зерна от скорлупы и дружно их едят.
            </Typography>
            <br />
            <Typography variant="body1">
              В течении следующих двух месяцев, я добавил в их меню небольшой
              кусочек курицы (важно не перекармливать). Для них это лакомство.
              Едят охотно. Даю свежий огурец. Поели и попили одновременно с
              удовольствием. В это время, я заметил, что матка активнее стала
              нести яйца, а численность колонии увеличивалась почти в 2 раза.
            </Typography>

            <ImageList cols={3} sx={{ height: 450 }} variant="standard">
              <ImageListItem>
                <img
                  style={{ borderRadius: 2 }}
                  src={P21}
                  alt="quiz"
                  loading="lazy"
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  style={{ borderRadius: 2 }}
                  src={P22}
                  alt="quiz"
                  loading="lazy"
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  style={{ borderRadius: 2 }}
                  src={P23}
                  alt="quiz"
                  loading="lazy"
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  style={{ borderRadius: 2 }}
                  src={P25}
                  alt="quiz"
                  loading="lazy"
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  style={{ borderRadius: 2 }}
                  src={P26}
                  alt="quiz"
                  loading="lazy"
                />
              </ImageListItem>
            </ImageList>

            <Typography variant="body1">
              Вывод: рацион питания влияет на размножение муравьев. Резко
              увеличилось количество особей.
            </Typography>

            <br />
            <Divider
              variant="middle"
              id="practice3"
              sx={{ whiteSpace: "pre-wrap" }}
            >
              <Typography variant="h5" textAlign="center">
                <span style={{ whiteSpace: "nowrap" }}>Эксперимент 3:</span>{" "}
                Влияние температуры воздуха на поведение муравьев.
              </Typography>
            </Divider>
            <br />

            <Typography variant="body1">
              Мы с родителями обратили внимание на то, что, когда мама открывала
              окно для проветривания моей комнаты (в комнате было меньше 16°C),
              муравьи уходили в более тёмный угол и старались держаться группой.
              Мне стало интересно, что будет, если в моей комнате будет больше
              30°C. Мама принесла обогреватель и мы прогрели комнату до 31°C.
              Муравьи сосредоточились около источника влаги и начали искать
              новые хо ды и выходы.
            </Typography>

            <ImageList cols={4}>
              <ImageListItem>
                <img
                  style={{ borderRadius: 2 }}
                  src={P31}
                  alt="quiz"
                  loading="lazy"
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  style={{ borderRadius: 2 }}
                  src={P32}
                  alt="quiz"
                  loading="lazy"
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  style={{ borderRadius: 2 }}
                  src={P33}
                  alt="quiz"
                  loading="lazy"
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  style={{ borderRadius: 2 }}
                  src={P34}
                  alt="quiz"
                  loading="lazy"
                />
              </ImageListItem>
            </ImageList>

            <Typography variant="body1">
              Вывод: оптимальная температура для формикария - от +16°C до +30°C.
            </Typography>

            <br />
            <Divider
              variant="middle"
              id="practice3"
              sx={{ whiteSpace: "pre-wrap" }}
            >
              <Typography variant="h5" textAlign="center">
                <span style={{ whiteSpace: "nowrap" }}>Эксперимент 4:</span>{" "}
                Влияние яркого света на поведение муравьев.
              </Typography>
            </Divider>
            <br />

            <Typography variant="body1">
              Я решил убедиться в том, что яркий свет негативно влияет на
              муравьев. Я взял настольную лампу и увидел, что при наведении
              яркого света, муравьи начинают быстро бегать, по арене, по
              лабиринту. При выключении света, муравьи становятся более
              спокойные и начинают работать, перетаскивают мусор, пищу.
            </Typography>

            <ImageList cols={2} sx={{ height: 450 }} rowHeight={450}>
              <ImageListItem>
                <img
                  style={{ borderRadius: 2 }}
                  src={P41}
                  alt="quiz"
                  loading="lazy"
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  style={{ borderRadius: 2 }}
                  src={P42}
                  alt="quiz"
                  loading="lazy"
                />
              </ImageListItem>
            </ImageList>

            <Typography variant="body1">
              Вывод: муравьи не любят яркий свет, предпочитают затемнение,
              бурную жизнь ведут в ночное время.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Practice;
