import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import { Link1, Link2, Link3, Link4 } from "../../assets";

const AdditionalSources = () => {
  return (
    <Container maxWidth="lg" id="additional-sources">
      <Stack
        direction="row"
        alignItems="stretch"
        justifyContent="space-between"
        spacing={2}
        sx={{ marginY: "1rem" }}
      >
        <Card>
          <CardActionArea target="_blank" href="https://7ants.ru/ants_book">
            <CardMedia
              component="img"
              height="140"
              sx={{ objectFit: "cover" }}
              image={Link1}
              alt="boy"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Из жизни муравьёв
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ maxWidth: 300 }}
              >
                Огромный, необыкновенный и загадочный мир окружает нас. Это мир
                муравьёв. А приходилось ли вам наблюдать за их жизнью? Скорее
                всего, да. Однажды в лесу вы наткнулись на их дом. Муравейник
                был высотой около метра. Поначалу...
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card>
          <CardActionArea target="_blank" href="https://7ants.ru/faq_2">
            <CardMedia
              component="img"
              height="140"
              sx={{ objectFit: "cover" }}
              image={Link2}
              alt="boy"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Маленькие фермеры
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ maxWidth: 300 }}
              >
                Трудно поверить, но муравьи в своём мире занимаются фермерским
                хозяйством.Так например муравьи-листорезы заготавливают листья
                деревьев. Но они им нужны вовсе не для непосредственного
                поедания. Эти насекомые не могут усваивать жесткие ...
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card>
          <CardActionArea target="_blank" href="https://7ants.ru/faq_5">
            <CardMedia
              component="img"
              height="140"
              sx={{ objectFit: "cover" }}
              image={Link3}
              alt="boy"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Другая вселенная
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ maxWidth: 300 }}
              >
                Большинство муравьёв живет в земле. Их гнёзда состоят из
                большого количества камер, соединённых между собой ходами. Часто
                имеется также вертикальный ход с небольшими камерами, идущий на
                большую глубину, иногда на несколько метров. Многие муравьи ...
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card>
          <CardActionArea target="_blank" href="https://7ants.ru/faq">
            <CardMedia
              component="img"
              height="140"
              sx={{ objectFit: "cover" }}
              image={Link4}
              alt="boy"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Простое решение
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ maxWidth: 300 }}
              >
                Наиболее интересная сторона жизни муравьёв скрыта от наши глаз и
                наблюдение за ними затруднено. Но не огорчайтесь. Есть простое
                решение - купить муравьиную ферму. Это искусственно созданный
                человеком небольшой муравьиный дом, который...
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
    </Container>
  );
};

export default AdditionalSources;
