import {
  useState,
  type FC,
  type ReactNode,
} from "react"
import { type OnErrorType } from "@/lib/errors"

interface RichPluginErrorBoundaryProps {
  children: JSX.Element
  onError: OnErrorType
}

export const RichTextPluginErrorBoundary: FC<RichPluginErrorBoundaryProps> = ({ children, onError }) => {
  const [hasError, setHasError] = useState(false) 

  function handleError(error: Error): void {
    setHasError(true)

    if (onError) {
      onError(error)
    }
  }

  if (hasError) {
    return <div>Something went wrong!</div>
  }

  try {
    return <>{children}</>
  } catch (error) {
    handleError(error as Error)
    return null 
  }

}
