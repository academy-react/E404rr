import React from 'react'
import { useState } from 'react';
import { Tab } from '../../components/Tab/Tab';
import { Tab3 } from '../../components/Tab/Tab3';
import MyCourses from './MyCourses';
import { FaiverCourses } from './FaiverCourses';
import AllCourses from './AllCourses';

const PanelCourses = () => {


    const [activeTab, setActiveTab] = useState('tab1');

    const openTab = (tabName) => {
      setActiveTab(tabName);
    };
  
  return (
        <>

<div className="flex items-center   gap-10 border mt-10 mr-10 border-transparent ">
          <Tab3 label="   کل دوره ها" active={activeTab === "tab1"} onClick={() => openTab("tab1")}/>
          <Tab3 label="  دوره های ذخیره شده" active={activeTab === "tab2"} onClick={() => openTab("tab2")}/>
          <Tab3 label="  دوره های من" active={activeTab === "tab3"} onClick={() => openTab("tab3")}/>
      
      </div>




      <div id="tab1" className={`tab-content ${activeTab === 'tab1' ? 'block' : 'hidden'}`}>
                   <AllCourses/>
        </div>


        <div id="tab2" className={`tab-content ${activeTab === 'tab2' ? 'block' : 'hidden'}`}>
        <FaiverCourses/>
        </div>
        
        <div id="tab3" className={`tab-content ${activeTab === 'tab3' ? 'block' : 'hidden'}`}>
            

                <MyCourses/>
        </div>

        </>
  )
}

export  {PanelCourses}