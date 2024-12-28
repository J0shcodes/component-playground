"use client"

import { FC, useRef } from "react"
import { Editor, loader } from "@monaco-editor/react"

import { CodeEditorProps } from "@/types"

loader.config({
  paths: {
    vs: "/monaco-editor/min/vs",
  },
})

if (typeof window !== "undefined") {
  ;(window as any).MonacoEnvironment = {
    getWorkerUrl: function (moduleId: any, label: string) {
      if (label === "typescript" || label === "javascript") {
        return "/monaco-editor/min/vs/language/typescript/tsWorker.js"
      }
      if (label === "json") {
        return "/monaco-editor/min/vs/language/json/jsonWorker.js"
      }
      if (label === "css") {
        return "/monaco-editor/min/vs/language/css/cssWorker.js"
      }
      if (label === "html") {
        return "/monaco-editor/min/vs/language/html/htmlWorker.js"
      }
      if (label === "editorWorkerService") {
        return "/monaco-editor/min/vs/editor/editorWorker.js"
      }
      return "/monaco-editor/min/vs/editor/editorWorker.js"
    },
  }
}

const CodeEditor: FC<CodeEditorProps> = ({
  code,
  onChange,
  language = "typescript",
}) => {
  const editorRef = useRef()

  const onMount = (editor: any) => {
    editorRef.current = editor
    editor.focus()
  }

  const handleEditorChange = (value: string | undefined) => {
    onChange(value)
  }

  return (
    <div className="flex h-1/3 flex-1 flex-col border-r md:h-full md:w-1/2">
      <div className="flex h-8 items-center border-b border-gray-200 bg-gray-100 px-4">
        <span className="text-sm font-medium text-black">Component.tsx</span>
      </div>
      <div className="flex-1 bg-gray-900">
        <Editor
          height="100%"
          defaultLanguage={language}
          defaultValue={code?.trim()}
          value={code}
          onChange={handleEditorChange}
          theme="vs-dark"
          loading={<div className="text-white">Initializing Editor...</div>}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            tabSize: 2,
            wordWrap: "on",
          }}
          onMount={onMount}
        />
      </div>
    </div>
  )
}

export default CodeEditor
