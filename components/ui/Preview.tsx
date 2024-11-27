import { useState, useEffect } from "react"
import { Maximize2 } from "lucide-react"

import { transpileCode } from "@/utils/transpiler"
import { PreviewProps, ComponentProps } from "@/types"

const Preview = () => {
    return (
        <div className="border-b border-gray-200 flex-1 h-4/6">
            <div className="h-8 bg-gray-100 border-b border-gray-200 px-4 flex items-center justify-between">
               <span className="text-sm font-medium text-black">Preview</span>
               <button className="p-1 hover:bg-gray-200 rounded-md">
                 <Maximize2 className="w-4 h-4" color="black" />
               </button>
            </div>
            <div className="p-4">
               {/* Preview content will go here */}
               <div className="border-2 border-dashed border-gray-300 rounded-lg h-64 flex items-center justify-center text-gray-200">
                 Preview Area
               </div>
            </div>
        </div>
    )
}

export default Preview