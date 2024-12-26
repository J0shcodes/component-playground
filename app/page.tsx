'use client'

import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Head from "next/head";
import Split from "@uiw/react-split";

import CodeEditor from "@/components/ui/Editor";
import Preview from "@/components/ui/Preview";
import PropsEditor from "@/components/ui/PropsEditor";
import { ComponentProps } from "@/types";
import { decodeState, encodeState } from "@/utils/urlState";
import { ComponentPlaygroundContext } from "@/context/context";

const defaultCode = `
function HelloWorld({ name }) {
  return <h1>Hello, {name}!</h1>;
}
`;

export default function Home() {
  const [code, setCode] = useState(defaultCode)
  const [props, setProps] = useState<ComponentProps>({})

  // const {code, setCode, props, setProps} = useContext(ComponentPlaygroundContext)

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const decodedState = decodeState(hash);
      if (decodedState) {
        setCode(decodedState.code);
        setProps(decodedState.props);
      }
    }
  }, []);

  useEffect(() => {
    const encodedState = encodeState(code, props);
    window.history.replaceState(null, '', `#${encodedState}`);
  }, [code, props]);

  return (
    <>
    <Head>
      <title>View my code</title>
    </Head>
    <section className="flex-1 flex">
      <Split mode="horizontal" style={{width: "100%"}}>
        <CodeEditor code={code} onChange={value => setCode(value || "")}/>
        <Split mode="vertical" style={{width: "50%"}}>
          {/* <div className="w-1/2"> */}
            <Preview code={code} props={props}/>
            <PropsEditor props={props} onChange={setProps}/>
          {/* </div> */}
        </Split>       
      </Split>
    </section>
    </>
  );
}