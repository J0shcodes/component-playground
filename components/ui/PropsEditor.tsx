import {useState, FC, SyntheticEvent} from "react"
import { ComponentProps } from "@/types"

interface PropsEditorProps {
    props?: ComponentProps;
    onChange: (props: ComponentProps) => void;
}

const PropsEditor: FC<PropsEditorProps> = ({props = {}, onChange}) => {
    const [localProps, setLocalProps] = useState<ComponentProps>(props)
    const [propKey, setPropKey] = useState<string>("")
    const [propValue, setPropValue] = useState<any>()
    const [showPropForm, setShowPropForm] = useState<boolean>(false)

    const handlePropChange = (key: string, value: string) => {
        const newProps = {...localProps, [key]: value}
        setLocalProps(newProps)
        onChange(newProps)
    }

    const addNewProp = (e: SyntheticEvent) => {
      e.preventDefault()
        // const newKey = `prop${Object.keys(localProps).length + 1}`;
        const newKey = propKey
        const newProps = { ...localProps, [newKey]: propValue };
        setLocalProps(newProps);
        onChange(newProps);
        console.log("newProps:", newProps)
        console.log("localProps:", localProps)
        setShowPropForm(false)
    };

    return (
        <div className="h-1/3 min-h-[200px]">
            <div className="h-8 bg-gray-100 border-b border-gray-200 px-4 flex items-center">
               <span className="text-sm font-medium text-black">Props</span>
            </div>
            <div className="p-4">
            <div className="space-y-2">
                    {Object.keys(localProps).length > 0 ? (
                        Object.entries(localProps).map(([key, value]) => (
                            // <div key={key} className="flex space-x-2">
                            //     <input
                            //         type="text"
                            //         placeholder="Prop name"
                            //         value={key}
                            //         className="border p-1 rounded text-black"
                            //         readOnly
                            //     />
                            //     <input
                            //         type="text"
                            //         placeholder="Value"
                            //         value={String(value)}
                            //         onChange={(e) => handlePropChange(key, e.target.value)}
                            //         className="border p-1 rounded flex-1 text-black"
                            //     />
                            // </div>
                            <div className="flex justify-between w-[50%] border border-solid rounded p-1">
                              <div key={key}>{key}:</div>
                              <div>{String(value)}</div>
                            </div>
                        ))
                    ) : (
                        <div className="text-sm text-gray-500">No props defined</div>
                    )}
                    {showPropForm ? (
                      <form className="flex space-x-2" onSubmit={addNewProp}>
                        <input
                          type="text"
                          placeholder="Prop name"
                          // value={key}
                          className="border p-1 rounded text-black outline-none"
                          // readOnly
                          onChange={(e) => setPropKey(e.target.value)}
                        />
                        <input
                          type="text"
                          placeholder="Value"
                          // value={String(value)}
                          onChange={(e) => setPropValue(e.target.value)}
                          className="border p-1 rounded flex-1 text-black outline-none"
                        />
                        <button type="submit" className="bg-green-500 p-2 rounded">Save Prop</button>
                      </form>
                    ) : null}
                    {!showPropForm ? (<button 
                        onClick={() => setShowPropForm(true)}
                        className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                        Add a Prop
                    </button>) : null}
                </div>
                {/* {localProps ? (
                  <>
                    {
                      Object.entries(localProps).map(
                        ([key, value]) => (
                          <div key={key} className="flex space-x-2">
                            <input
                              type="text"
                              placeholder="Prop name"
                              value={key}
                              className="border p-1 rounded"
                              readOnly
                            />
                            <input
                              type="text"
                              placeholder="Value"
                              value={String(value)}
                              onChange={(e) => handlePropChange(key, e.target.value)}
                              className="border p-1 rounded flex-1"
                            />
                          </div>
                        )
                      )
                    }
                  </>
                ) : 
                  <div className="space-y-2">
                    <div className="text-sm text-gray-200">No props defined</div>
                  </div>
             }   */}               
            </div>
        </div>
    )
}

export default PropsEditor