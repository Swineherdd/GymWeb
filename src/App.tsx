import { useState } from 'react';
import './index.css'
import Navbar from '@/scense/navbar';
import { SelectedSection } from '@/shared/types';
import Home from '@/scense/home/Home';
import Benefits from './scense/benefits/Benefits';
import OurClasses from './scense/ourclasses/OurClasses';
import ContactUs from './scense/contactUs/ContactUs';
import Footer from './scense/footer/Footer';


function App() {
  const [selectedSection, setSelectedSection] = useState<SelectedSection>(SelectedSection.Home)
  return (
		<div className="app bg-gray-20 ">
      <Navbar
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
      />
      <Home selectedSection={selectedSection} setSelectedSection={setSelectedSection}/>
      <Benefits selectedSection={selectedSection} setSelectedSection={setSelectedSection}/>    
      <OurClasses selectedSection={selectedSection} setSelectedSection={setSelectedSection}/>  
      <ContactUs selectedSection={selectedSection} setSelectedSection={setSelectedSection}/>
      <Footer/>
    </div>
	)
}

export default App
