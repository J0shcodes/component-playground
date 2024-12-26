'use client'

import { useState } from "react"
import { usePathname } from "next/navigation"

import { 
    WhatsappShareButton, 
    WhatsappIcon, 
    LinkedinShareButton, 
    LinkedinIcon, 
    FacebookIcon, 
    FacebookShareButton, 
    TwitterShareButton,
    TwitterIcon
} from "next-share"

import { encodeState } from "@/utils/urlState"

const ShareModal = () => {
    const [isCopied, setIsCopied] = useState<boolean>(false)

    const codeUrl = window.location.href

    const handleCopy = async () => {
        await navigator.clipboard.writeText(codeUrl)
        setIsCopied(true)
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-1/2 h-1/4 flex flex-col justify-center items-center rounded text-black space-y-5">
            <h1 className="text-xl font-bold">Share code</h1>
            <div className="flex gap-2">
                <input 
                  value={codeUrl}
                  type="text" 
                  className="border border-solid rounded p-1"
                />
                <button 
                  className="bg-blue-500 p-2 text-white rounded"
                  onClick={handleCopy}
                >  
                  {isCopied ? "Copied!" : "Copy"}
                </button>
            </div>
            <div className="">
                <h2 className="text-center mb-2.5 text-lg">Or share to:</h2>
              <div className="space-x-3">
                <WhatsappShareButton url={codeUrl}>
                    <WhatsappIcon size={32} round/>
                </WhatsappShareButton>
                <LinkedinShareButton url={codeUrl}>
                    <LinkedinIcon size={32} round/>
                </LinkedinShareButton>
                <FacebookShareButton url={codeUrl}>
                    <FacebookIcon size={32} round/>
                </FacebookShareButton>
                <TwitterShareButton url={codeUrl}>
                    <TwitterIcon size={32} round/>
                </TwitterShareButton>
              </div>
            </div>
          </div>
        </div>
        
    )
}

export default ShareModal