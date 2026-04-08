import Questionnaire from "./Questionnaire";
import questionsData from "../data/questions-basic.json";
import { Question } from "../types";

export default function QuestionnaireBasic() {
  const questions = questionsData as Question[];

  return (
    <Questionnaire
      questions={questions}
      title="Ma première kinklist hypnotique"
      description="Tu viens de découvrir et tu as envie de tester. Mais tu ne sais pas encore comment donner les contours à ton hypnotiseur. J'ai la solution ! Ce formulaire, avec quelques peu de questions simples et directes, t'aidera à imaginer les contours pour tes premières sessions. Tu vas simplement Répondre aux questions en évaluant chacune de 0 à 5."
      downloadFilename="mes-preferences-hypnotiques.png"
    />
  );
}
