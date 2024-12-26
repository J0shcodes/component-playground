import {transform} from "@babel/standalone"
// import presetReact from '@babel/preset-react';
// import presetTypescript from '@babel/preset-typescript';

import { TranspilationResult } from "@/types"

// transform.registerpreset()

export const transpileCode = async (code: string): Promise<TranspilationResult> => {
    try {
        const result = transform(code, {
            presets: ['typescript', 'react'], 
            filename: "component.tsx",
            plugins: [
                ["@babel/plugin-transform-runtime"], {
                    "helpers": false,
                    "regenerator": true
                }
            ]
        })
        return {
            code: result?.code || '',
            error: undefined
        }
    } catch (error) {
        return {
            code: "",
            error: error instanceof Error ? error.message : "Unknown transpilation error"
        }
    }
}