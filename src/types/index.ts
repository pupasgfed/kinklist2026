export interface Question {
  id: string;
  label: string;
  nsfw: boolean;
  hidden?: boolean;
}

export interface Response {
  questionId: string;
  rating: number;
}

export type Rating = 0 | 1 | 2 | 3 | 4 | 5;
