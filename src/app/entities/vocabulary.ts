export type Term = {
    _id?: string;
    term: string;
    vocabularyId?: string;
    explanation: string;
    langFrom?: string;
    langTo?: string;
    word?: string;
}

export type Vocabulary = {
  _id: string;
  name?: string;
  description?: string;
  terms: Term[];
}

