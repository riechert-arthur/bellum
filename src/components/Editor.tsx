import { type FC } from "react"
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"
import { ContentEditable } from "@lexical/react/LexicalContentEditable"
import { RichTextPluginErrorBoundary } from "./ErrorBoundary" 

interface EditorProps {}

export const Editor: FC<EditorProps> = () => {
  return (
    <>
      <RichTextPlugin
        contentEditable={<ContentEditable />}
        ErrorBoundary={RichTextPluginErrorBoundary}
      />
    </>
  )
}
