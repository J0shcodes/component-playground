import { Dispatch, FC, SetStateAction } from "react"

interface PropsDropdownProps {
  setPropType: Dispatch<SetStateAction<string>>
}

const PropsDropdown: FC<PropsDropdownProps> = ({ setPropType }) => {
  return (
    <select
      className="border border-solid text-black outline-none"
      defaultValue="string"
      onChange={(e) => setPropType(e.target.value)}
    >
      <option disabled>Choose prop type</option>
      <option value="string">String</option>
      <option value="number">Number</option>
      <option value="boolean">Boolean</option>
      <option value="array">Array</option>
      <option value="object">Object</option>
    </select>
  )
}

export default PropsDropdown
