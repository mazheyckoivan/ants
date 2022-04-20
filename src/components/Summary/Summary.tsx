import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import SummaryPhoto from "../../assets/summary-photo.png";

const Summary = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg" disableGutters={matches} id="summary">
      <Card
        sx={{
          display: "flex",

          gap: "1rem",
          minHeight: "50vh",
          marginY: "1rem",
          borderRadius: `${matches ? "unset" : theme.shape.borderRadius}`,
        }}
      >
        {!matches && (
          <CardMedia
            component="img"
            sx={{ maxWidth: "30%", objectFit: "cover", flex: 1 }}
            src={SummaryPhoto}
            alt="boy"
          />
        )}

        <Box sx={{ flex: 5 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Проект: «Муравьи-жнецы. Жизнь в домашних условиях»
            </Typography>

            <Typography variant="subtitle1">
              Практическая значимость моей работы заключается в ознакомлении
              сверстников с особенностями жизни муравьев в целом, и с
              малоизвестным видом муравьев (муравей-жнец).
            </Typography>

            <List disablePadding>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText>
                    <Link
                      href="#quiz"
                      color="inherit"
                      sx={{ display: "block", width: "100%" }}
                    >
                      Анкетирование сверстников
                    </Link>
                  </ListItemText>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText>
                    <Link
                      href="#quiz-result"
                      color="inherit"
                      sx={{ display: "block", width: "100%" }}
                    >
                      Результаты анкетирования
                    </Link>
                  </ListItemText>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText>
                    <Link
                      href="#theory"
                      color="inherit"
                      sx={{ display: "block", width: "100%" }}
                    >
                      Теоретическая часть
                    </Link>
                  </ListItemText>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText>
                    <Link
                      href="#ant-species"
                      color="inherit"
                      sx={{ display: "block", width: "100%" }}
                    >
                      Вид «Муравьи-жнецы»
                    </Link>
                  </ListItemText>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText>
                    <Link
                      href="#practice"
                      color="inherit"
                      sx={{ display: "block", width: "100%" }}
                    >
                      Практическая часть
                    </Link>
                  </ListItemText>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText>
                    <Link
                      href="#practice1"
                      color="inherit"
                      sx={{ display: "block", width: "100%" }}
                    >
                      Эксперимент 1. Заселение муравьев в муравьиную ферму.
                    </Link>
                  </ListItemText>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText>
                    <Link
                      href="#practice2"
                      color="inherit"
                      sx={{ display: "block", width: "100%" }}
                    >
                      Эксперимент 2. Предпочтения в питании и развитие муравьев.
                    </Link>
                  </ListItemText>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText>
                    <Link
                      href="#practice3"
                      color="inherit"
                      sx={{ display: "block", width: "100%" }}
                    >
                      Эксперимент 3. Влияние температуры воздуха на поведение
                      муравьев.
                    </Link>
                  </ListItemText>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText>
                    <Link
                      href="#practice4"
                      color="inherit"
                      sx={{ display: "block", width: "100%" }}
                    >
                      Эксперимент 4. Влияние яркого света на поведение муравьев.
                    </Link>
                  </ListItemText>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText>
                    <Link
                      href="#finally"
                      color="inherit"
                      sx={{ display: "block", width: "100%" }}
                    >
                      Заключение
                    </Link>
                  </ListItemText>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText>
                    <Link
                      href="#additional-sources"
                      color="inherit"
                      sx={{ display: "block", width: "100%" }}
                    >
                      Интересные сведения о муравьях.
                    </Link>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </CardContent>
        </Box>
      </Card>
    </Container>
  );
};

export default Summary;
