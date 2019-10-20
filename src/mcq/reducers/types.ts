export interface MCQState {
  mcqs: { [key: string]: MCQ };
}

export interface MCQChoise {
  label: string;
  value: string;
  checked: boolean;
}

export interface MCQ {
  question: string;
  id: string;
  choises: { [key: string]: MCQChoise };
}
