import { SelectedSection } from '@/shared/types';
import { motion } from 'framer-motion';
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import HText from '@/shared/UI/htext/HText';

type Props = {  selectedSection: SelectedSection, setSelectedSection: (value: SelectedSection) => void}

const ContactUs = ({setSelectedSection}: Props ) => {
      const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`;
  return (
    <section id='contactus' className='mx-auto w-5/6 pt-24 pb-32'>
        <motion.div
         onViewportEnter={() => setSelectedSection(SelectedSection.OurClasses)}
         initial="hidden"
         whileInView='visible'
         viewport={{once: true, amount: 0.5}}
         transition={{delay: 0.2, duration: 0.5}}
         variants={{
         hidden: { opacity: 0, x: -100 },
         visible: { opacity: 1, x: 0 }
         }}
        >
          <div className='md:w-3/5 '>
            <HText>
                <span className='text-primary-500'>JOIN NOW</span>{' '}
                TO GET IN SHAPE
            </HText>
            <p className='my-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consequuntur quae reprehenderit beatae quos dolorem ipsam assumenda incidunt velit. Cupiditate aperiam debitis eum assumenda nemo numquam labore ducimus totam quos.
            </p>
           
          </div>
           <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form onSubmit={e => { e.preventDefault()}}>
              <input className={inputStyles} type="text" placeholder="Name"/>
              <input className={inputStyles} type="text" placeholder="Email"/>
              <textarea className={inputStyles} placeholder="Message"/>
              <input type="submit" className="mt-5 cursor-pointer rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white" value='Send!'/>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                className="w-full"
                alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
        </motion.div>
       
    </section>
  )
}

export default ContactUs