'use client'

import { useState } from "react";
import Image from "next/image";
import Split from "@uiw/react-split";

import CodeEditor from "@/components/ui/Editor";
import Preview from "@/components/ui/Preview";
import Props from "@/components/ui/Props";

import { Clipboard, Share2, Settings, Menu, Maximize2 } from "lucide-react"

export default function Home() {
  const [code, setCode] = useState<string | undefined>("// Paste code")
  const [props, setProps] = useState<string | undefined>()
  return (
    <section className="flex-1 flex">
      <Split mode="horizontal" style={{width: "100%"}}>
        <CodeEditor code={code} onChange={value => setCode(value)}/>
        <Split mode="vertical" style={{width: "50%"}}>
          {/* <div className="w-1/2"> */}
            <Preview/>
            <Props/>
          {/* </div> */}
        </Split>       
      </Split>
    </section>
  );
}