"use client"

import { useState } from "react"

import {
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
} from "next-share"

const ShareModal = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false)

  const codeUrl = window.location.href

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeUrl)
    setIsCopied(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex h-1/4 w-1/2 flex-col items-center justify-center space-y-5 rounded bg-white text-black">
        <h1 className="text-xl font-bold">Share code</h1>
        <div className="flex gap-2">
          <input
            value={codeUrl}
            type="text"
            className="rounded border border-solid p-1"
          />
          <button
            className="rounded bg-blue-500 p-2 text-white"
            onClick={handleCopy}
          >
            {isCopied ? "Copied!" : "Copy"}
          </button>
        </div>
        <div className="">
          <h2 className="mb-2.5 text-center text-lg">Or share to:</h2>
          <div className="space-x-3">
            <WhatsappShareButton url={codeUrl}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <LinkedinShareButton url={codeUrl}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <FacebookShareButton url={codeUrl}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={codeUrl}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShareModal
