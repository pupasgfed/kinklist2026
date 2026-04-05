import Questionnaire from './Questionnaire';
import questionsData from '../data/questions.json';
import { Question } from '../types';

export default function QuestionnaireAdvanced() {
  const questions = questionsData as Question[];

  return (
    <Questionnaire
      questions={questions}
      title="Mes préférences hypnotiques"
      description="Découvrez et partagez vos préférences en matière d'hypnose. Répondez aux questions en évaluant chaque pratique de 0 à 5."
      downloadFilename="mes-preferences-hypnotiques.png"
    />
  );
}
