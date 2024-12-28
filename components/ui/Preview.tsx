import React from "react"
import { FC } from "react"
import { Maximize2 } from "lucide-react"
import { LiveProvider, LivePreview, LiveError } from "react-live"

import { PreviewProps } from "@/types"

const Preview: FC<PreviewProps> = ({ code, props }) => {
  // const [Component, setComponent] = useState<ComponentType | null>(null)
  // const [error, setError] = useState<string | null>(null)

  const scope = { React, ...props }

  return (
    <div className="z-30 h-1/2 flex-1 border-b border-gray-200 bg-black md:h-4/6">
      <div className="flex h-8 items-center justify-between border-b border-gray-200 bg-gray-100 px-4">
        <span className="text-sm font-medium text-black">Preview</span>
        <button className="hover:bg-gray rounded-md p-1">
          <Maximize2 className="h-4 w-4" color="black" />
          {/* Run code */}
        </button>
      </div>
      <div className="p-4">
        <LiveProvider code={code} scope={scope}>
          <LivePreview />
          <LiveError />
        </LiveProvider>
      </div>
    </div>
  )
}

export default Preview
