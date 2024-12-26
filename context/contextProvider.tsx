import { useEffect, useState } from "react";

import { ComponentPlaygroundContext } from "./context";
import { ComponentProps } from "@/types";



export const ContextProvider = ({children}: {children: React.ReactNode}) => {
  const defaultComponent = `
const ExampleComponent = ({ text = 'Hello, World!' }) => {
  return React.createElement('div', {
    className: "p-4 bg-blue-100 rounded"
  }, text);
};
`;
    const [code, setCode] = useState(defaultComponent)
    const [props, setProps] = useState<ComponentProps>({})

    // useEffect(() => {
      
    // })

    const contextValue = {code, setCode, props, setProps}

    return <ComponentPlaygroundContext.Provider value={contextValue}>{children}</ComponentPlaygroundContext.Provider>
}
