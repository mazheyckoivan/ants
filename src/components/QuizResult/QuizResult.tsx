import {
  AppBar,
  Card,
  CardContent,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const chartOptions: ChartOptions = {
  responsive: true,
};

const chartLabels = [
  "1. Кто такие муравьи?",
  "2. Где живут муравьи",
  "3. Назовите состав муравьиной семьи",
  "4. Что едят муравьи",
  "5. Какую пользу приносят муравьи человеку",
  "6. Можно ли вырастить муравьев в домашних условиях",
  "7. Знаете ли вы, как ухаживать за муравьями в домашних условиях",
  "8. Хотели бы вы получить памятку, по уходу за муравьями в домашних условиях",
];

const chartData = {
  labels: chartLabels,
  datasets: [
    {
      label: "",
      data: [100, 100, 100, 85, 65, 55, 25, 95],
      backgroundColor: "rgba(241, 178, 75, 1)",
    },
  ],
};

const QuizResult = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg" disableGutters={matches} id="quiz-result">
      <Card
        sx={{
          minHeight: "50vh",
          marginY: "1rem",
          borderRadius: `${matches ? "unset" : theme.shape.borderRadius}`,
        }}
      >
        <AppBar position="relative" sx={{ padding: "1rem" }}>
          <Typography variant="h5" textAlign="center">
            Результаты анкетирования
          </Typography>
        </AppBar>

        <Box>
          <CardContent>
            <Typography variant="body1">
              По результатам анкетирования стало известно, что многие мои
              сверстники не знают о том, что можно вырастить муравьев дома.
              Большое количество моих сверстников хотели бы получить памятку по
              уходу за муравьями в домашних условиях.
            </Typography>

            <Box padding={2}>
              <Bar options={chartOptions} data={chartData} />
            </Box>

            <Typography variant="body1">
              Вывод: результаты анкетирования показали, что многие ребята имеют
              представление о жизни муравьев. Неверных ответов также было много,
              так, например некоторые учащиеся не смогли ответить на вопросы
              «Что едят муравьи», «Какую пользу приносят муравьи человеку»,
              «Можно ли вырастить муравьев в домашних условиях». Многие мои
              сверстники сошлись в том, что хотели бы получить памятку, по уходу
              за муравьями в домашних условиях. Гипотеза 1. С помощью
              анкетирования мы доказали первую гипотезу, жизнь муравьев-жнецов в
              домашних условиях плохо изучена не только мной, но и моими
              сверстниками.
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Container>
  );
};

export default QuizResult;
