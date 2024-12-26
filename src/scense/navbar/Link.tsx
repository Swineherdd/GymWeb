import { SelectedSection } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = 
{
    section: string;
    selectedSection: SelectedSection;
    setSelectedSection: (value: SelectedSection) => void;
}

const Link = ({section, selectedSection, setSelectedSection}: Props) => {
  const lowerCaseSection = section.toLowerCase().replace(/ /g, '') as SelectedSection;
  
  return (
    <div>
      <AnchorLink 
       href={`#${lowerCaseSection}`}
       onClick={() => setSelectedSection(lowerCaseSection)}
       className={`${selectedSection == lowerCaseSection ? 'text-primary-800' : ''}
        transition duration-500 hover:text-primary-300 `}
      >
        {section}
      </AnchorLink> 
    </div>
  )
}

export default Link