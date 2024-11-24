import { type LexicalEditor } from "lexical"

export type OnErrorType = (error: Error) => void
export type OnLexicalErrorType = (error: Error, editor: LexicalEditor) => void

export const onError: OnErrorType = (error) => {
  console.error("LEXICAL ERROR: ", error)
}

export const onLexicalError: OnLexicalErrorType = (error, editor) => {
  onError(error)
}
