import { Clipboard, Share2, Settings } from "lucide-react"

const Header = () => {
    return (
        <header className="flex h-14 items-center justify-between px-4">
            <section>
                <h1 className="text-xl">Component Playground</h1>
            </section>
            <section className="flex justify-between w-[120px]">
                <button title="Share code"><Share2/></button>
                <button title="Copy code"><Clipboard/></button>
                <button title="Settings"><Settings/></button>
            </section>
        </header>
    )
}

export default Header