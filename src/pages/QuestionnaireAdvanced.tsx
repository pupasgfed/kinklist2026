import Questionnaire from "./Questionnaire";
import questionsData from "../data/questions.json";
import { Question } from "../types";

export default function QuestionnaireAdvanced() {
  const questions = questionsData as Question[];

  return (
    <Questionnaire
      questions={questions}
      title="Mes préférences hypnotiques"
      description="Créer et partager sa kinklist hypnose. Un questionnaire en français avec plus de questions que tu ne pourrais imaginer. Elle peut servir à communiquer tes envies à un futur partenaire, ou bien à découvrir des choses nouvelles que tu ne savais même pas encore que tu avais envie de tester ! Tu vas répondre aux questions en évaluant chaque pratique de 0 à 5."
      downloadFilename="mes-preferences-hypnotiques.png"
    />
  );
}
