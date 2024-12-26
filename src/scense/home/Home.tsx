import { SelectedSection } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/UI/buttons/ActionButton'
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'
type Props = {
   selectedSection: SelectedSection;
    setSelectedSection: (value: SelectedSection) => void
}

const Home = ({ setSelectedSection}: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  
  return (
    <section
      id='home'
      className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'
    >
      <motion.div 
        className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
        onViewportEnter={() => setSelectedSection(SelectedSection.Home)}  
      >
        <div className='z-10 mt-32 md:basis-3/5'>
          <motion.div 
            className='md:-mt-20'
            initial="hidden"
            whileInView='visible'
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                <img src={HomePageText} alt="homePageText" />
              </div>
            </div>
              <p className='mt-5 text-sm '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Distinctio saepe asperiores magni quia similique id corporis neque blanditiis facilis.
              </p>
          </motion.div>
          <motion.div 
            className='mt-8 flex items-center gap-8'
            initial="hidden"
            whileInView='visible'
            viewport={{once: true, amount: 0.5}}
            transition={{delay: 0.2, duration: 0.5}}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <ActionButton setSelectedSection={setSelectedSection}>
              Join us!
            </ActionButton>
            <AnchorLink
             className='text-sm font-bold text-primary-500 underline hover:text-secondary-500 transition'
             onClick={() => setSelectedSection(SelectedSection.Contact)}
             href={`#${SelectedSection.Contact}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
          <img src={HomePageGraphic} alt="hpagegr" />
        </div>
      </motion.div>
      {isAboveMediumScreens && (
        <div className='h-[150px] w-full bg-primary-100 py-10'>
          <div className='mx-auto w-5/6'>
            <div className='flex w-3/5 items-center gap-8 justify-between'>
              <img src={SponsorRedBull} alt="smth" />
              <img src={SponsorForbes} alt="smth" />
              <img src={SponsorFortune} alt="smth" />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Home