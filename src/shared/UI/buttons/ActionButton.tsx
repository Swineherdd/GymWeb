import { SelectedSection } from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll"


type Props = 
{
    children: string,
    setSelectedSection: (value: SelectedSection) => void,
}

const ActionButton = ({children, setSelectedSection}: Props) => {
  return (
    <AnchorLink 
        className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white transition  cursor-pointer"
        onClick={() => setSelectedSection(SelectedSection.Contact)}
        href={`#${SelectedSection.Contact}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton