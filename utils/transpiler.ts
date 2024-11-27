import {transform} from "@babel/standalone"

import { TranspilationResult } from "@/types"

export const transpileCode = async (code: string): Promise<TranspilationResult> => {
    try {
        const result = transform(code, {
            presets: ['react', 'typescript'], 
            filename: "component.tsx"
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