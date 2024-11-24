import { type InitialConfigType } from "@lexical/react/LexicalComposer"
import { onLexicalError } from "./errors"
import { type Metadata } from "next"
import {
  type EditorThemeClasses,
  type LexicalEditor,
  type SerializedElementNode,
  type SerializedEditorState,
  type SerializedTextNode,
} from "lexical"

export interface SiteTheme {}

export const siteTheme: SiteTheme = {}

export const lexicalTheme: EditorThemeClasses = {}

export type InitialEditorState = (editor: LexicalEditor) => void

export const initialEditorState: InitialEditorState = (editor) => {
  editor.setEditorState(
    editor.parseEditorState({
      root: {
        type: "root",
        children: [
          {
            type: "paragraph",
            version: 1,
            format: "left",
            indent: 0,
            children: [
              {
                type: "text",
                text: "Start typing here...", 
              },
            ]
          },
        ],
      },
    } as SerializedEditorState<SerializedElementNode<SerializedTextNode>>)
  )
}

export const initialLexicalConfig: InitialConfigType = {
  namespace: "Bellum Editor",
  onError: onLexicalError,
  theme: lexicalTheme,
}

export const nextMetadata: Metadata = {
  title: "Bellum Editor",
  description: "A powerful editor for all your writing needs",
}
