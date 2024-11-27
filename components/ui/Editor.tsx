'use client'

import { Editor, loader } from "@monaco-editor/react"
import { FC } from "react"

import { CodeEditorProps } from "@/types"

loader.config({
    paths: {
      vs: '/monaco-editor/min/vs',
    },
});

const CodeEditor: FC<CodeEditorProps> = ({code, onChange, language = 'typescript'}) => {
    const handleEditorChange = (value: string | undefined) => {
        onChange(value)
    }

    return (
        <div className="w-1/2 border-r flex-1 flex flex-col">
            <div className="h-8 bg-gray-100 border-b border-gray-200 px-4 flex items-center">
                <span className="text-sm font-medium text-black">Component.tsx</span>
            </div>
            <div className="flex-1 bg-gray-900">
                    <Editor
                        height="100%"
                        defaultLanguage={language}
                        value={code}
                        onChange={handleEditorChange}
                        theme="vs-dark"
                        loading={<div className="text-white">Initializing Editor...</div>}
                        options={{
                            minimap: { enabled: false },
                            fontSize: 14,
                            tabSize: 2,
                            wordWrap: 'on'
                        }}
                    />
            </div>  
        </div>
    )
}

export default CodeEditor