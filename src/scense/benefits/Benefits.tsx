import { BenefitType, SelectedSection } from '@/shared/types';
import Benefit from '@/shared/UI/benefit/Benefit';
import HText from '@/shared/UI/htext/HText';
import { DATA_BENEFIT } from '@/shared/data/dataBenefit/index.tsx';
import { motion } from 'framer-motion';
import ActionButton from '@/shared/UI/buttons/ActionButton';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

type Props = {
   selectedSection: SelectedSection;
   setSelectedSection: (value: SelectedSection) => void
}

const container  = {
  hidden: {},
  visibel:{
    transition: {staggerChildren: 0.2}
  }
}
const Benefits = ({setSelectedSection}: Props) => {
  return (
    <section id='benefits' className='mx-auto min-h-full w-5/6 py-20'>
      <motion.div
       onViewportEnter={() => setSelectedSection(SelectedSection.Benefits)}
      >
        <motion.div 
         className='md:my-5 md:w-3/5'
          initial="hidden"
            whileInView='visible'
            viewport={{once: true, amount: 0.5}}
            transition={{delay: 0.2, duration: 0.5}}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 }
            }}
        >
          <HText>
            More than just a gym
          </HText>
          <p className='my-5 text-sm '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloribus iusto perspiciatis dolore in est beatae accusantium error quaerat
          </p>
        </motion.div >
        <motion.div 
         className='items-center justify-between gap-8 mt-5 md:flex'
         initial="hidden"
         whileInView='visible'
         viewport={{once:true, amount:0.5}}
         variants={container}
        >
          {DATA_BENEFIT.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedSection={setSelectedSection}
            />
          ))}
        </motion.div>
        <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
          <motion.img
           initial="hidden"
            whileInView='visible'
            viewport={{once:true, amount:0.5}}
             transition={{delay: 0.1, duration: .8}} 
             variants={{
              hidden: { opacity: 0, scale: 0},
              visible: { opacity: 1, scale: 1 }}}
           className='mx-auto '
           src={BenefitsPageGraphic}
           alt='SomeImg'
          />
          <motion.div
          initial="hidden"
            whileInView='visible'
            viewport={{once: true, amount: 0.5}}
            transition={{delay: 0.2, duration: 0.5}}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 }}}
          >
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves'>
                <div>
                  <HText>
                    MILLONS OF HAPPY MEMBERS GETTING{' '}
                    <span className='text-primary-500'>FIT</span>.
                  </HText>
                </div>
              </div>
            </div>
            <div>
              <p className='my-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas officiis voluptatum est, quod animi eligendi sed fugiat asperiores possimus error reiciendis alias ratione, adipisci quidem soluta ducimus. Numquam, optio culpa.</p>
              <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas officiis voluptatum est, quod animi eligendi sed fugiat asperiores possimus</p>
            </div>
            <div className='relative mt-16'>
              <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                <ActionButton setSelectedSection={setSelectedSection}>
                  Join Now!
                </ActionButton>
              </div>
            </div>
          </motion.div>
      </div>
      </motion.div>
    </section>
  )
}

export default Benefits