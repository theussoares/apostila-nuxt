// types/index.ts

export interface QuestionAnswer {
  question: string
  portuguese: string
  answer: string
  portuguese_answer: string
}

export interface Word {
  english: string
  portuguese: string
  questions: string[]
}

export interface StructureExample {
  english: string
  portuguese: string
}

export interface StructureSection {
  title: string
  content: StructureExample[]
}

export interface Structure {
  title: string
  sections: StructureSection[]
  examples: StructureExample[]
}

export interface Module {
  id: number
  title: string
  words: Word[]
  structures_and_examples: Structure[] | { [key: string]: any }
  questions_and_answers: QuestionAnswer[]
}

export interface Book {
  id: number
  title: string
  modules: Module[]
  teacher_tips: string[]
  final_notes: string
}

export interface Data {
  book: Book[]
}
