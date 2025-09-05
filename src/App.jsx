import './App.css'
import './index.css'
import Header from'./components/Header.jsx'
import WayToTeachSection from './components/WayToTeachSection.jsx'
import SectionButtons from './components/SectionButtons.jsx'
import TabsSection from './components/TabsSection.jsx'
import FeedbackSection from './components/FeedbackSection.jsx'
import { useState } from 'react'

export default function App() {
  const [tab, setTab] = useState('feedback');
  // Установите начальное значение как существующий ключ из differences
  return (
    <>
      <Header/>   
      <main>
        <h1>hi</h1>
        <TabsSection active={tab} onChange={(current)=>setTab(current)}/>
        {tab === 'main' && <>
          <WayToTeachSection/>
          <SectionButtons/>
          
        </>}
        {tab === 'feedback' && <>
          <FeedbackSection/>
        </>}
        
        
      </main>
      
    </>
  );
}