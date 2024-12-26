import {  SelectedSection, ClassType } from "@/shared/types"
import { motion } from "framer-motion"
import HText from "@/shared/UI/htext/HText"
import Class from "@/shared/UI/class/Class"
import { CLASSES } from "@/shared/data/dataClasses"
import  '@/index.css'

type Props = { selectedSection: SelectedSection, setSelectedSection: (value: SelectedSection) => void}

const OurClasses = ({setSelectedSection}: Props) => {
  return (
    <section className="w-full bg-primary-100 py-14" id='ourclasses'>
      <motion.div
       className=""
       onViewportEnter={() => setSelectedSection(SelectedSection.OurClasses)}
      >
        <motion.div
         className="mx-auto w-5/6"
         initial="hidden"
          whileInView='visible'
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 }
          }}
        >
          <div className="md:w-3/5">
          <HText>
            OUR CLASSES
          </HText>
          <p className="py-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia itaque dignissimos velit illo? Velit ex explicabo, dolor error facilis magni rem unde eaque enim. Aut odio enim optio suscipit!
          </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[355px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {CLASSES.map((item:ClassType, index) =>(
              <Class
              title={item.title} 
              img={item.img}
              key={`${item.title}-${index}`}
              description={item.description}
              setSelectedSection={setSelectedSection}/>
            ))}
          </ul>
        </div>  
      </motion.div>
    </section>
  )
}

export default OurClasses