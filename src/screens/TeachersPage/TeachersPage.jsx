import {React , useState , useEffect} from "react";
import TeachersTitle from "./TeachersTitle";
import TeachersContainer from "./TeachersContainer";
import Footer from "../../components/common/footer/Footer";
import { getAllTeachers } from "../../core/services/api/AllTeachers";

const TeachersPage = () => {
  

  const [allTeacherList , setAllTeacherList] = useState([]);
  const getList = async () => {
    const courses = await getAllTeachers();
    setAllTeacherList(courses.slice())  
  } 
  useEffect(() =>{
      getList();
  },[]);
  return (
    <>
      <div data-aos="fade-up">
      <TeachersTitle />
        {allTeacherList.map((item , index) => {
            return(
              <TeachersContainer 
              Name={item.fullName}
              key={index}
         />
            )
        })}

      </div>
      <Footer />
    </>
  );
};

export default TeachersPage;
