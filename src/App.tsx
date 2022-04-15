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
  return (
    <div className="App">
      <Background />

      <Header />

      <Summary />

      <Quiz />

      <QuizResult />

      <Theory />

      <AntSpecies />

      <Practice />

      <Finally />

      <AdditionalSources />

      <Footer />
    </div>
  );
};

export default App;
