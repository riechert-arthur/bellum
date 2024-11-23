"use client"

import {
  createContext,
  type FC,
  type ReactNode,
} from "react"
import { LexicalComposer } from "@lexical/react/LexicalComposer"
import {
  initialLexicalConfig,
  siteTheme,
  type SiteTheme,
} from "@/lib/config"

interface ProvidersProps {
  children: ReactNode
}

const ThemeContext = createContext<SiteTheme | null>(null)

export const Providers: FC<ProvidersProps> = ({ children }) => {

  return (
    <ThemeContext.Provider value={siteTheme} >
      <LexicalComposer initialConfig={initialLexicalConfig}>
        {children}
      </LexicalComposer>
    </ThemeContext.Provider>
  )
} 
