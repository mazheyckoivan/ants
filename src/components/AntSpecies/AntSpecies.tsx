import {
  AppBar,
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const AntSpecies = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg" disableGutters={matches} id="ant-species">
      <Card
        sx={{
          marginY: "1rem",
          borderRadius: `${matches ? "unset" : theme.shape.borderRadius}`,
        }}
      >
        <AppBar position="relative" sx={{ padding: "1rem" }}>
          <Typography variant="h5" textAlign="center">
            Вид «Муравьи-жнецы»
          </Typography>
        </AppBar>

        <CardContent>
          <Box padding={2}>
            <Typography variant="body1">
              Вид «Муравьи-жнецы» так назвали, потому что они питаются зернами
              растений. Обитает такой вид в пустынях и степях, что является их
              особенностью-плодиться весной, чтобы к лету была возможность
              создавать новые колонии. Муравей-жнец самый крупный представитель
              семейства.
            </Typography>

            <br />

            <Typography variant="body1">
              Размеры муравья варьируются в зависимости от вида от 1 до 50 мм.
              Их ближайшие родственники-пчелы и осы. Отличительная особенность
              этих муравьев-их коленчатые усики. С их помощью муравьи распознают
              предметы, с которыми контактируют, а также «общаются» прикасаясь.
              Сложные глаза моментально реагируют на любое движение, но сами
              объекты муравьи различают плохо. В природе этот вид муравьев
              впадает в зимнюю спячку, прячась в подземных комнатах своего
              жилища.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AntSpecies;
