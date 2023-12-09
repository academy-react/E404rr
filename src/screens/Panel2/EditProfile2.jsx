// import { Formik, Form, Field, ErrorMessage } from "formik";
// import React, { useEffect, useState } from "react";
// import emptyprofile from "../../assets/img/emptyprofile.png";
// import { GetProfileInfo } from "../../core/services/api/UserPanel/GetProfileInfo";
// import { AddProfileImage } from "../../core/services/api/UserPanel/PostAddProfileImage";
// import { PutProfileInfo } from "../../core/services/api/UserPanel/PutUpdateProfileInfo";
// const EditProfile2 = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isModalOpen2, setIsModalOpen2] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const openModal2 = () => {
//     setIsModalOpen2(true);
//   };

//   const closeModal2 = () => {
//     setIsModalOpen2(false);
//   };

//   const [data, setData] = useState([]);
//   const getList = async () => {
//     const item = await GetProfileInfo();
//     setData(item);
//   };
//   useEffect(() => {
//     getList();
//   }, []);

//   // const [profile, setProfile] = useState([]);

//   // const PostProfile = async (values) => {
//   //   console.log(values);
//   //   const profile = {
//   //     profile: values.profile,
//   //   };

//   //   const user = await AddProfileImage(profile);
//   // };

//   const PutProfile = async (values) => {
//     console.log(values);
//     // const profile = {
//     //   lName: values.lName,
//     // };

//     const formdata = new FormData();
//     formdata.append("LName", values.LName);
//     formdata.append("FName", values.FName);
//     formdata.append("UserAbout", values.UserAbout);
//     formdata.append("LinkdinProfile", values.LinkdinProfile);
//     formdata.append("TelegramLink", values.TelegramLink);
//     formdata.append("ReceiveMessageEvent", true);
//     formdata.append("HomeAdderess", values.HomeAdderess);
//     formdata.append("NationalCode", values.NationalCode);
//     formdata.append("Gender", values.Gender);
//     formdata.append("BirthDay", values.BirthDay);
//     formdata.append("Latitude", values.Latitude);
//     formdata.append("Longitude", values.Longitude);

//     const imgData = new FormData();
//     imgData.append("formFile", values.userImg);
//     console.log("values", values.userImg);
//     const postImg = await AddProfileImage(imgData ? imgData : null);
//     console.log(postImg, "postImg");
//     const user = await PutProfileInfo(formdata);
//   };
//   // const SelectImg = async (values) => {

//   // }
//   return (
//     <>
//       {/* <Formik>
//                         <Form>
                           
//                             <Field placeholder="نام کاربری خود را وارد کنید..." className="outline-none border rounded pr-3 focus:placeholder:opacity-0 border-[#DEC9E9] hover:border-green-600 xl:w-[380px] lg:w-[300px] h-[50px] mt-[46px] xl:mr-[30px] lg:mr-[30px] md:mr-[30px] sm:mr-1"/>
//                             <Field type="email" placeholder=" ایمیل خود را وارد کنید..." className="outline-none border rounded pr-3 focus:placeholder:opacity-0 border-[#DEC9E9] hover:border-green-600 xl:w-[380px] lg:w-[300px] h-[50px] mt-[46px] xl:mr-[60px] lg:mr-[30px] md:mr-[30px] sm:mr-1"/>
//                             <Field placeholder=" شماره تلفن خود را وارد کنید..." className="outline-none border rounded pr-3 focus:placeholder:opacity-0 border-[#DEC9E9] hover:border-green-600 xl:w-[380px] lg:w-[300px] h-[50px] mt-[46px] xl:mr-[30px] lg:mr-[30px] md:mr-[30px] sm:mr-1"/>
//                             <Field placeholder=" کد ملی خود را وارد کنید..." className="outline-none border rounded pr-3 focus:placeholder:opacity-0 border-[#DEC9E9] hover:border-green-600 xl:w-[380px] lg:w-[300px] h-[50px] mt-[46px] xl:mr-[60px] lg:mr-[30px] md:mr-[30px] sm:mr-1"/>  
//                         </Form>
//                     </Formik> */}
//       <div
//         className="flex flex-wrap border border-transparent pb-5"
//         data-aos="fade-up"
//       >
//         <Formik
//           onSubmit={PutProfile}
//           initialValues={{ profile: "" }}
//           className="flex w-[80%] h-auto border mx-auto mt-[50px] border-"
//         >
//           {({ setFieldValue }) => {
//             return (
//               <>
//                 <Form>
//                   <div className="mr-[20px]">
//                     <div className="border border-transparent rounded-full w-[120px] h-[120px] mr-[60px] ">
//                       <img
//                         src={data.currentPictureAddress}
//                         alt=""
//                         className="rounded-full w-full h-full"
//                       />

//                       {/* <img
//                         src={emptyprofile}
//                         alt=""
//                         className="rounded-full w-full h-full"
//                       /> */}
//                     </div>
//                     <div className="border border-transparent  p-3">
//                       <Field
//                         type="file"
//                         name="profile"
//                         onChange={(e) =>
//                           setFieldValue("userImg", e.target.files[0])
//                         }
//                         id="file-profile-edit"
//                         className="hidden"
//                         accept=".jpg , .jpeg , .png"
//                       />
//                       <label
//                         name="profile"
//                         className="border  flex items-center bg-white justify-center  px-[20px] py-[7px] rounded-xl"
//                         htmlFor="file-profile-edit"
//                       >
//                         <p className="">عکس جدید خود را اضافه کنید</p>
//                       </label>
//                       <div className="flex justify-center items-center text-center border mt-[10px] border-transparent">
//                         <p className="text-[12px]">
//                           لطفا عکس واضح و با کیفیت انتخاب کنید <br />{" "}
//                           <span className="text-[10px]">
//                             تنها فرمت های jpg و png قابل استفاده اند
//                           </span>{" "}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   <button type="submit" className="mr-[120px]">
//                     submit
//                   </button>
//                 </Form>
//               </>
//             );
//           }}
//         </Formik>

//         <div className="border w-[80%]  bg-white mt-[30px] pb-10 mx-auto border-transparent rounded-xl">
//           <Formik
//             onSubmit={PutProfile}
//             initialValues={{
//               LName: "",
//               FName: "",
//               UserAbout: "",
//               LinkdinProfile: "",
//               TelegramLink: "",
//               ReceiveMessageEvent: "",
//               HomeAdderess: "",
//               NationalCode: "",
//               Gender: "",
//               BirthDay: "",
//               Latitude: "",
//               Longitude: "",
//             }}
//           >
//             <Form>
//               <div>
//                 <div className="flex">
//                   <div className="basis-1/2">
//                     <h3 className="text-[18px] mr-5 mt-5">اطلاعات شخصی</h3>
//                     {/* openMOdal1 */}
//                   </div>
//                 </div>

//                 <div className="flex flex-wrap min-w-[70%]  border border-transparent mx-auto mt-5">
//                   <div className="border border-transparent mr-10 w-[30%] ">
//                     <p> نام خانوادگی </p>
//                     {data.lName ? (
//                       <>
//                         <Field
//                           placeholder={data.lName}
//                           name="LName"
//                           className="outline-none  placeholder:text-black"
//                         />
//                       </>
//                     ) : (
//                       <>
//                         {" "}
//                         <Field
//                           className="outline-none placeholder:text-black"
//                           placeholder={"هنوز اسمی ثبت نکردید"}
//                           name="LName"
//                         />
//                       </>
//                     )}
//                   </div>

//                   <div className="border border-transparent  w-[30%] ">
//                     <div className="border border-transparent w-[30%] mr-10">
//                       <p>نام </p>
//                       <p className="mt-2">
//                         {data.fName ? (
//                           <>
//                             <Field
//                               placeholder={data.fName}
//                               className="outline-none  placeholder:text-black"
//                               name="FName"
//                             />
//                           </>
//                         ) : (
//                           <>
//                             {" "}
//                             <Field
//                               className=" placeholder:text-black"
//                               placeholder={"هنوز اسمی ثبت نکردید"}
//                               name="FName"
//                             />{" "}
//                           </>
//                         )}
//                       </p>
//                     </div>
//                     {/* 
//               <p> ایمیل</p>
//               {data.email ? <>{data.email}</> : <>هنوز ایمیلی ثبت نکردید</>} */}
//                   </div>

//                   <div className="border border-transparent  w-[30%] ">
//                     {/* <p> شماره تلفن </p>
//               <p className="mt-2">{data.phoneNumber}</p> */}

//                     <p> درباره </p>

//                     {data.userAbout ? (
//                       <>
//                         <Field
//                           className="outline-none  placeholder:text-black"
//                           placeholder={data.userAbout}
//                           name="UserAbout"
//                         />
//                       </>
//                     ) : (
//                       <>
//                         <Field
//                           className="outline-none  placeholder:text-black"
//                           placeholder={"هنوز درباره ای ثبت نکردید"}
//                           name="UserAbout"
//                         />
//                       </>
//                     )}
//                   </div>
//                 </div>

//                 <div className="flex flex-wrap min-w-[70%]  border border-transparent mx-auto mt-5">
//                   <div className="border border-transparent mr-10 w-[35%] mt-10 ">
//                     <p> پروفایل لینکدین </p>
//                     {data.linkdinProfile ? (
//                       <>
//                         <Field
//                           className="outline-none  placeholder:text-black"
//                           placeholder={data.linkdinProfile}
//                           name="LinkdinProfile"
//                         />
//                       </>
//                     ) : (
//                       <>
//                         <Field
//                           className="outline-none  placeholder:text-black"
//                           placeholder={"ثبت نشد"}
//                           name="LinkdinProfile"
//                         />
//                       </>
//                     )}
//                   </div>

//                   <div className="border border-transparent w-[25%] mt-10 ">
//                     <p> پروفایل تلگرام </p>
//                     {data.telegramLink ? (
//                       <>
//                         <Field
//                           className="outline-none  placeholder:text-black"
//                           placeholder={data.telegramLink}
//                           name="TelegramLink"
//                         />
//                       </>
//                     ) : (
//                       <>
//                         <Field
//                           className="outline-none  placeholder:text-black"
//                           placeholder={"ثبت نکردید"}
//                           name="TelegramLink"
//                         />
//                       </>
//                     )}
//                   </div>

//                   <div className="border border-transparent w-[30%] mt-10 ">
//                     <p> رویداد پیام را دریافت کنید </p>
//                     {data.receiveMessageEvent ? (
//                       <>
//                         {" "}
//                         <Field
//                           className="outline-none  placeholder:text-black"
//                           placeholder={data.receiveMessageEvent}
//                           name="ReceiveMessageEvent"
//                         />
//                       </>
//                     ) : (
//                       <>
//                         <Field
//                           className="outline-none  placeholder:text-black"
//                           placeholder={"ثبت نکردید"}
//                           name="ReceiveMessageEvent"
//                         />
//                       </>
//                     )}
//                   </div>
//                 </div>

//                 <div className="flex flex-wrap min-w-[70%]  border border-transparent mx-auto mt-5">
//                   <div className="border border-transparent mr-10 w-[35%] mt-10 ">
//                     <p> آدرس خانه </p>
//                     {data.homeAdderess ? (
//                       <>
//                         {" "}
//                         <Field
//                           className="outline-none  placeholder:text-black"
//                           placeholder={data.homeAdderess}
//                           name="HomeAdderess"
//                         />
//                       </>
//                     ) : (
//                       <Field
//                         className="outline-none  placeholder:text-black"
//                         placeholder={"ثبت نکردید"}
//                         name="HomeAdderess"
//                       />
//                     )}
//                   </div>

//                   <div className="border border-transparent w-[25%] mt-10 ">
//                     <p> کد ملی </p>
//                     {data.nationalCode ? (
//                       <>
//                         {" "}
//                         <Field
//                           className="outline-none  placeholder:text-black"
//                           placeholder={data.nationalCode}
//                           name="NationalCode"
//                         />
//                       </>
//                     ) : (
//                       <Field
//                         className="outline-none  placeholder:text-black"
//                         placeholder={"ثبت نکردید"}
//                         name="NationalCode"
//                       />
//                     )}
//                   </div>

//                   <div className="border border-transparent w-[30%] mt-10 ">
//                     <p> جنسیت </p>
//                     <Field type="radio" name="Gender" value="female"/> زن
//                     <Field type="radio" name="Gender" value="male" /> مرد
          
               


//                   </div>
//                 </div>

//                 <div className="flex flex-wrap min-w-[70%]  border border-transparent mx-auto mt-5">
//                   <div className="border border-transparent mr-10 w-[35%] mt-10 ">
//                     <p> روز تولد </p>
//                     {data.birthDay ? (
//                       <Field
//                         className="outline-none  placeholder:text-black"
//                         placeholder={data.birthDay}
//                         name="BirthDay"
//                       />
//                     ) : (
//                       <Field
//                         className="outline-none  placeholder:text-black"
//                         placeholder={"ثبت نکردید"}
//                         name="BirthDay"
//                       />
//                     )}
//                   </div>

//                   <div className="border border-transparent w-[25%] mt-10 ">
//                     <p> عرض جغرافیایی </p>
//                     {data.latitude ? (
//                       <>
//                         {" "}
//                         <Field
//                           className="outline-none  placeholder:text-black"
//                           placeholder={data.latitude}
//                           name="Latitude"
//                         />
//                       </>
//                     ) : (
//                       <Field
//                         className="outline-none  placeholder:text-black"
//                         placeholder={"ثبت نکردید"}
//                         name="Latitude"
//                       />
//                     )}
//                   </div>

//                   <div className="border border-transparent w-[30%] mt-10 ">
//                     <p> طول جغرافیایی </p>
//                     {data.longitude ? (
//                       <>
//                         <>
//                           {" "}
//                           <Field
//                             className="outline-none  placeholder:text-black"
//                             placeholder={data.longitude}
//                             name="Longitude"
//                           />
//                         </>{" "}
//                       </>
//                     ) : (
//                       <Field
//                         className="outline-none  placeholder:text-black"
//                         placeholder={"ثبت نکردید"}
//                         name="Longitude"
//                       />
//                     )}
//                   </div>
//                 </div>

//                 <div className="border flex items-center justify-center border-transparent mt-10">
//                   <button
//                     type="submit"
//                     className="border bg-green-600 py-3 text-white"
//                   >
//                     {" "}
//                     ثبت تغییرات
//                   </button>
//                 </div>
//               </div>
//             </Form>
//           </Formik>
//         </div>
//       </div>
//     </>
//   );
// };

// export { EditProfile2 };


import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import emptyprofile from "../../assets/img/emptyprofile.png";
import { GetProfileInfo } from "../../core/services/api/UserPanel/GetProfileInfo";
import { AddProfileImage } from "../../core/services/api/UserPanel/PostAddProfileImage";
import { PutProfileInfo } from "../../core/services/api/UserPanel/PutUpdateProfileInfo";

const EditProfile2 = () => {
  const [data, setdata] = useState([]);

  const getList = async () => {
    const item = await GetProfileInfo();
    setdata(item);
  };
  useEffect(() => {
    getList();
  }, []);

  const PutProfile = async (values) => {
    console.log(values);

    const formdata = new FormData();
    formdata.append("LName", values.LName);
    formdata.append("FName", values.FName);
    formdata.append("UserAbout", values.UserAbout);
    formdata.append("LinkdinProfile", values.LinkdinProfile);
    formdata.append("TelegramLink", values.TelegramLink);
    formdata.append("ReceiveMessageEvent", true);
    formdata.append("HomeAdderess", values.HomeAdderess);
    formdata.append("NationalCode", values.NationalCode);
    formdata.append("Gender", values.Gender);
    formdata.append("BirthDay", values.BirthDay);
    formdata.append("Latitude", values.Latitude);
    formdata.append("Longitude", values.Longitude);

    const user = await PutProfileInfo(formdata);

    const imgData = new FormData();
    imgData.append("formFile", values.userImg);
    console.log("values", values.userImg);
    const postImg = await AddProfileImage(imgData ? imgData : null);
    console.log(postImg, "postImg");
  };

  return (
    <>
      <div
        className="flex flex-wrap border border-transparent pb-5"
        data-aos="fade-up"
      >
        <div className="border w-[80%]  bg-white mt-[30px] pb-10 mx-auto border-transparent rounded-xl">
          <Formik
          
            initialValues={{
              userImg: null,
              LName: data.lName,
              FName: data.fName,
              UserAbout: data.userAbout,
              LinkdinProfile: data.linkdinProfile,
              TelegramLink: data.telegramLink,
              ReceiveMessageEvent: data.receiveMessageEvent,
              HomeAdderess: data.homeAdderess,
              NationalCode: data.nationalCode,
              Gender: data.gender,
              BirthDay: data.birthDay,
              Latitude: data.latitude,
              Longitude: data.longitude,
            }}
            enableReinitialize={true}
            onSubmit={(values) => {
              PutProfile(values);
            }}
          >
            {({ setFieldValue }) => {
              return (
                <Form>
                  <div className="mr-[20px]">
                    <div className="border border-transparent rounded-full w-[120px] h-[120px] mr-[60px] ">
                      <img
                        src={data.currentPictureAddress}
                        alt=""
                        className="rounded-full w-full h-full"
                      />

                      {/* <img
                        src={emptyprofile}
                        alt=""
                        className="rounded-full w-full h-full"
                      /> */}
                    </div>
                    <div className="border border-transparent  p-3">
                      <Field
                        type="file"
                        name="profile"
                        onChange={(e) => {
                          setFieldValue("userImg", e.target.files[0]);
                        }}
                        id="file-profile-edit"
                        className="hidden"
                        accept=".jpg , .jpeg , .png"
                      />
                      <label
                        name="profile"
                        className="border  flex items-center bg-white justify-center  px-[20px] py-[7px] rounded-xl"
                        htmlFor="file-profile-edit"
                      >
                        <p className="">عکس جدید خود را اضافه کنید</p>
                      </label>
                      <div className="flex justify-center items-center text-center border mt-[10px] border-transparent">
                        <p className="text-[12px]">
                          لطفا عکس واضح و با کیفیت انتخاب کنید <br />{" "}
                          <span className="text-[10px]">
                            تنها فرمت های jpg و png قابل استفاده اند
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="mr-[120px]">
                    submit
                  </button>
                  <div>
                    <div className="flex">
                      <div className="basis-1/2">
                        <h3 className="text-[18px] mr-5 mt-5">اطلاعات شخصی</h3>
                        {/* openMOdal1 */}
                      </div>
                    </div>

                    <div className="flex flex-wrap min-w-[70%]  border border-transparent mx-auto mt-5">
                      <div className="border border-transparent mr-10 w-[30%] ">
                        <p> نام خانوادگی </p>{" "}
                        <Field
                          className="outline-none placeholder:text-black"
                          placeholder={"هنوز اسمی ثبت نکردید"}
                          name="LName"
                        />
                      </div>

                      <div className="border border-transparent  w-[30%] ">
                        <div className="border border-transparent w-[30%] mr-10">
                          <p>نام </p>
                          <p className="mt-2">
                            {" "}
                            <Field
                              className=" placeholder:text-black"
                              placeholder={"هنوز اسمی ثبت نکردید"}
                              name="FName"
                            />{" "}
                          </p>
                        </div>
                        {/* 
              <p> ایمیل</p>
              {data.email ? <>{data.email}</> : <>هنوز ایمیلی ثبت نکردید</>} */}
                      </div>

                      <div className="border border-transparent  w-[30%] ">
                        {/* <p> شماره تلفن </p>
              <p className="mt-2">{data.phoneNumber}</p> */}

                        <p> درباره </p>

                        <Field
                          className="outline-none  placeholder:text-black"
                          placeholder={"هنوز درباره ای ثبت نکردید"}
                          name="UserAbout"
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap min-w-[70%]  border border-transparent mx-auto mt-5">
                      <div className="border border-transparent mr-10 w-[35%] mt-10 ">
                        <p> پروفایل لینکدین </p>

                        <Field
                          className="outline-none  placeholder:text-black"
                          placeholder={"ثبت نشد"}
                          name="LinkdinProfile"
                        />
                      </div>

                      <div className="border border-transparent w-[25%] mt-10 ">
                        <p> پروفایل تلگرام </p>

                        <Field
                          className="outline-none  placeholder:text-black"
                          placeholder={"ثبت نکردید"}
                          name="TelegramLink"
                        />
                      </div>

                      <div className="flex flex-col gap-4 ">
                        <div className="flex gap-x-2 items-center">
                          <span className="w-3 h-3 dark:bg-white rounded-full bg-gray-400"></span>
                          <h1 className="font-shabnamBold dark:text-white  text-gray-500 text-3xl">
                            دریافت پیامک
                          </h1>
                        </div>
                        <div className="items-center flex gap-4">
                          <label
                            htmlFor="ReceiveMessageEvent"
                            className="font-shabnamBold indent-3 dark:text-[rgba(209,215,226,1)] text-zinc-700"
                          >
                            فعال سازی
                          </label>
                          <Field
                            name="ReceiveMessageEvent"
                            type="checkBox"
                            className="w-5 h-5"
                            onChange={(e) => {
                              setFieldValue(
                                "ReceiveMessageEvent",
                                e.target.checked
                              );
                              console.log("e check", e.target);
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap min-w-[70%]  border border-transparent mx-auto mt-5">
                      <div className="border border-transparent mr-10 w-[35%] mt-10 ">
                        <p> آدرس خانه </p>

                        <Field
                          className="outline-none  placeholder:text-black"
                          placeholder={"ثبت نکردید"}
                          name="HomeAdderess"
                        />
                      </div>

                      <div className="border border-transparent w-[25%] mt-10 ">
                        <p> کد ملی </p>

                        <Field
                          className="outline-none  placeholder:text-black"
                          placeholder={"ثبت نکردید"}
                          name="NationalCode"
                        />
                      </div>

                      <div className="border border-transparent w-[30%] mt-10 ">
                        <p> جنسیت </p>
                        <div className="flex gap-2 items-center mt-2 indent-4 ">
                          <select
                            name="Gender"
                            id="gender"
                            className=""
                            onChange={(e) => {
                              setFieldValue("Gender", e.target.value);
                            }}
                          >
                            <option value="true">زن</option>
                            <option value="false">مرد</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap min-w-[70%]  border border-transparent mx-auto mt-5">
                      <div className="border border-transparent mr-10 w-[35%] mt-10 ">
                        <p> روز تولد </p>

                        <Field
                          className="outline-none  placeholder:text-black"
                          placeholder={"ثبت نکردید"}
                          name="BirthDay"
                        />
                      </div>

                      <div className="border border-transparent w-[25%] mt-10 ">
                        <p> عرض جغرافیایی </p>

                        <Field
                          className="outline-none  placeholder:text-black"
                          placeholder={"ثبت نکردید"}
                          name="Latitude"
                        />
                      </div>

                      <div className="border border-transparent w-[30%] mt-10 ">
                        <p> طول جغرافیایی </p>

                        <Field
                          className="outline-none  placeholder:text-black"
                          placeholder={"ثبت نکردید"}
                          name="Longitude"
                        />
                      </div>
                    </div>

                    <div className="border flex items-center justify-center border-transparent mt-10">
                      <button
                        type="submit"
                        className="border bg-green-600 py-3 text-white"
                      >
                        {" "}
                        ثبت تغییرات
                      </button>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export { EditProfile2 };
