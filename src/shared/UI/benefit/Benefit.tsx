import { SelectedSection } from "@/shared/types"
import { motion } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll"
type Props = 
{
  icon: JSX.Element,
  title: string,
  description: string,
  setSelectedSection: (value: SelectedSection) => void,
}

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1,  },
}
const Benefit = ({icon, title, description, setSelectedSection}: Props) => {
  return (
    <motion.div 
     className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center md:w-full"
     variants={childVariant}
     transition={{delay: 0.2, duration: 0.5}}
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
            {icon}
        </div>
      </div>
      <h4 className="font-bold">
        {title}
      </h4>
      <p className="my-3">
        {description}
      </p>
       <AnchorLink
        className='text-sm font-bold text-primary-500 underline hover:text-secondary-500 transition'
        onClick={() => setSelectedSection(SelectedSection.Benefits)}
        href={`#${SelectedSection.Benefits}`}
       >
        <p>Learn More</p>
       </AnchorLink>
    </motion.div >
  )
}

export default Benefit