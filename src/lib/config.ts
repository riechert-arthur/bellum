import { type InitialConfigType } from "@lexical/react/LexicalComposer"
import { onLexicalError } from "./errors"
import { type Metadata } from "next"
import { type EditorThemeClasses } from "lexical"

export interface SiteTheme {}

export const siteTheme: SiteTheme = {}

export const lexicalTheme: EditorThemeClasses = {}

export const initialLexicalConfig: InitialConfigType = {
  namespace: "Bellum Editor",
  onError: onLexicalError,
  theme: lexicalTheme,
}

export const nextMetadata: Metadata = {
  title: "Bellum Editor",
  description: "A powerful editor for all your writing needs",
};
