import {React , useState} from "react";
import CourseSummary from "./CourseSummary";
import TeacherSummary from "./TeacherSummary";
import CourseTopics from "./CourseTopics";
import CourseOpinions from "./CourseOpinions";
import { NavLink, Outlet } from "react-router-dom";
import { Tab } from "../../components/Tab/Tab";



const CourseDetailBody = () => {

  const [activeTab, setActiveTab] = useState('tab1');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className=" bg-gradient-to-bl from-[#f3fcf8] text-[#323E73] to-white rounded-3xl px-10 py-8 mt-10" data-aos="fade-up">
      <div className="flex items-center   gap-10 ">
          <Tab label="درباره دوره" active={activeTab === "tab1"} onClick={() => openTab("tab1")}/>
          <Tab label=" مدرس دوره" active={activeTab === "tab2"} onClick={() => openTab("tab2")}/>
          <Tab label="سرفصل های دوره" active={activeTab === "tab3"} onClick={() => openTab("tab3")}/>
          <Tab label="نظرات دوره" active={activeTab === "tab4"} onClick={() => openTab("tab4")}/>
      
      </div>
      <div className="">


      <div id="tab1" className={`tab-content ${activeTab === 'tab1' ? 'block' : 'hidden'}`}>
      <CourseSummary />
        </div>


        <div id="tab2" className={`tab-content ${activeTab === 'tab2' ? 'block' : 'hidden'}`}>
        <TeacherSummary/> 
        </div>
        
        <div id="tab3" className={`tab-content ${activeTab === 'tab3' ? 'block' : 'hidden'}`}>
          <CourseTopics/>
        </div>
        
        <div id="tab4" className={`tab-content ${activeTab === 'tab4' ? 'block' : 'hidden'}`}>
            <CourseOpinions/>
        </div>
        
        
    
   
    

    
      </div>
    </div>
  );
};

export default CourseDetailBody;
