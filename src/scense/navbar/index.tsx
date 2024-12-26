import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import logo from '@/assets/Logo.png'
import Link from "./Link"
import { SelectedSection } from "@/shared/types"
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from "@/shared/UI/buttons/ActionButton"
import useScroll from '@/hooks/useScroll';

type Props = {
    selectedSection: SelectedSection;
    setSelectedSection: (value: SelectedSection) => void
}
const Navbar = ({selectedSection, setSelectedSection}: Props) => {
  const flexBetween = "flex items-center justify-between"
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
   const isScrolling = useScroll()
  const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false);

  return (
   <nav >
      <div
       className={`${flexBetween} fixed top-0 z-30 w-full py-6 ${isScrolling ? 'bg-[#fedcdb] drop-shadow transition' : 'bg-transparent transition'}` }
      >
        
        <div className={`${flexBetween} mx-auto w-5/6 `}>
           <div className={`${flexBetween} w-full gap-16`}>
              <img src={logo} alt="logo"/>
               {isAboveMediumScreens ? <div className={`${flexBetween} w-full `}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link 
                    section="Home" 
                    selectedSection={selectedSection}
                    setSelectedSection={setSelectedSection}
                  />
                  <Link  
                    section="About"   
                    selectedSection={selectedSection}
                    setSelectedSection={setSelectedSection} />
                  <Link  
                    section="Services" 
                    selectedSection={selectedSection}
                    setSelectedSection={setSelectedSection}/>
                  <Link  
                    section="Portfolio" 
                    selectedSection={selectedSection}
                    setSelectedSection={setSelectedSection}/>
                  <Link  
                    section="Contact" 
                    selectedSection={selectedSection}
                    setSelectedSection={setSelectedSection}/>
                </div>
                <div  className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedSection={setSelectedSection}>Become a Swin</ActionButton>
                </div> 
              </div>
              :
              (
                <button
                className="rounded-full bg-secondary-500 p-2 f"
                onClick={() => setIsMenuToggle(!isMenuToggle)}
                >
                  <Bars3Icon className="h-6 w-6 text-white"/>
                </button>
              )}
           </div>
        </div>
      </div>
      {!isAboveMediumScreens && isMenuToggle && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button className=""  onClick={() => setIsMenuToggle(!isMenuToggle)}>
              <XMarkIcon className="h-6 w-6 text-gray-400"/>
            </button>
          </div>
          <div className='ml-[33%] flex flex-col gap-10 text-2xl'>
                  <Link 
                    section="Home" 
                    selectedSection={selectedSection}
                    setSelectedSection={setSelectedSection}
                  />
                  <Link  
                    section="About"   
                    selectedSection={selectedSection}
                    setSelectedSection={setSelectedSection} />
                  <Link  
                    section="Services" 
                    selectedSection={selectedSection}
                    setSelectedSection={setSelectedSection}/>
                  <Link  
                    section="Portfolio" 
                    selectedSection={selectedSection}
                    setSelectedSection={setSelectedSection}/>
                  <Link  
                    section="Contact" 
                    selectedSection={selectedSection}
                    setSelectedSection={setSelectedSection}/>
                </div>
        </div>
      )}
    </nav>
  )
}
export default Navbar