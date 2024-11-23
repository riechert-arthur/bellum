import { type LexicalEditor } from "lexical"

export function onLexicalError(error: Error, editor: LexicalEditor): void {
  console.error("LEXICAL ERROR: ", error)
}
