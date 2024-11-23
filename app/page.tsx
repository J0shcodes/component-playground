import Image from "next/image";

import Editor from "@/components/ui/Editor";
import Preview from "@/components/ui/Preview";
import Props from "@/components/ui/Props";

export default function Home() {
  return (
    <section className="flex flex-col">
      <Editor/>
      <Preview/>
      <Props/>
    </section>
  );
}
