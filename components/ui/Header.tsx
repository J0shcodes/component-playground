'use client'

import { useState } from "react"
import { Clipboard, Share2, Settings } from "lucide-react"
import ShareModal from "@/components/modal/ShareModal"

const Header = () => {
    const [showShareModal, setShowShareModal] = useState<boolean>(false)
    return (
        <header className="flex h-14 items-center justify-between px-4 relative">
            <section>
                <h1 className="text-xl">Component Playground</h1>
            </section>
            <section className="flex justify-between w-[120px]">
                <button 
                  title="Share code" 
                  onClick={() => setShowShareModal(true)}
                >
                  <Share2/>
                </button>
                <button title="Copy code"><Clipboard/></button>
                <button title="Settings"><Settings/></button>
            </section>
            {showShareModal ? <ShareModal/> : null}
        </header>
    )
}

export default Header