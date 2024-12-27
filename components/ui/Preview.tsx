import React from "react"
import { useState, useEffect, FC, ComponentType } from "react"
import { Maximize2 } from "lucide-react"
import { LiveProvider, LivePreview, LiveError } from "react-live"
import {transform} from "@babel/standalone"

import { transpileCode } from "@/utils/transpiler"
import { PreviewProps } from "@/types"
import TestComponent from "./TestComponet"

import axios from "axios"

const Preview: FC<PreviewProps> = ({ code, props }) => {
    const [Component, setComponent] = useState<ComponentType | null>(null)
    const [error, setError] = useState<string | null>(null)

    const scope = {React, ...props}

    console.log(scope)

    const API = axios.create({
      baseURL: "https://emkc.org/api/v2/piston"
    })

    const runCode = async (language: string, sourceCode: string) => {
      if(!code) return;
      try {
        const response = await API.post("/execute", {
          language: language,
          version: "18.15.0",
          files: [
              {
                content: "console.log('Hello World')"
              }
          ]
        })
        console.log("response", response.data)
      } catch (error) {
        console.log(error)
      }
    }

    return (
      <div className="border-b border-gray-200 flex-1 md:h-4/6 h-1/2 z-30 bg-black">
            <div className="h-8 bg-gray-100 border-b border-gray-200 px-4 flex items-center justify-between">
               <span className="text-sm font-medium text-black">Preview</span>
               <button className="p-1 hover:bg-gray rounded-md">
                 <Maximize2 className="w-4 h-4" color="black" />
                 {/* Run code */}
               </button>
            </div>
            <div className="p-4">
               <LiveProvider code={code} scope={scope}>
                 <LivePreview/>
                 <LiveError/>
               </LiveProvider>
            </div>
      </div>
    )
}

export default Preview