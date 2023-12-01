import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import emptyprofile from "../../assets/img/emptyprofile.png";
import { GetProfileInfo } from "../../core/services/api/UserPanel/GetProfileInfo";
import { AddProfileImage } from "../../core/services/api/UserPanel/PostAddProfileImage";
import { PutProfileInfo } from "../../core/services/api/UserPanel/PutUpdateProfileInfo";
const EditProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal2 = () => {
    setIsModalOpen2(true);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
  };

  const [data, setData] = useState([]);
  const getList = async () => {
    const item = await GetProfileInfo();
    setData(item);
  };
  useEffect(() => {
    getList();
  }, []);

  // const [profile, setProfile] = useState([]);

  // const PostProfile = async (values) => {
  //   console.log(values);
  //   const profile = {
  //     profile: values.profile,
  //   };

  //   const user = await AddProfileImage(profile);
  // };

  const PutProfile = async (values) => {
    console.log(values);
    const profile = {
      lName: values.lName,
    };

    const formdata = new FormData();
    formdata.append("LName", values.LName);
    formdata.append("FName", values.FName);
    formdata.append("UserAbout", values.UserAbout);
    formdata.append("LinkdinProfile", values.LinkdinProfile);
    formdata.append("TelegramLink", values.TelegramLink);
    // formdata.append("ReceiveMessageEvent", values.ReceiveMessageEvent);
    formdata.append("HomeAdderess", values.HomeAdderess);
    formdata.append("NationalCode", values.NationalCode);
    formdata.append("Gender", values.Gender);
    formdata.append("BirthDay", values.BirthDay);
    formdata.append("Latitude", values.Latitude);
    formdata.append("Longitude", values.Longitude);

    const imgData = new FormData();
    imgData.append("formFile", values.userImg);
    console.log("values", values.userImg);
    const postImg = await AddProfileImage(imgData ? imgData : null);
    console.log(postImg, "postImg");
    const user = await PutProfileInfo(formdata);
  };
  // const SelectImg = async (values) => {

  // }
  return (
    <>
      {/* <Formik>
                        <Form>
                           
                            <Field placeholder="نام کاربری خود را وارد کنید..." className="outline-none border rounded pr-3 focus:placeholder:opacity-0 border-[#DEC9E9] hover:border-green-600 xl:w-[380px] lg:w-[300px] h-[50px] mt-[46px] xl:mr-[30px] lg:mr-[30px] md:mr-[30px] sm:mr-1"/>
                            <Field type="email" placeholder=" ایمیل خود را وارد کنید..." className="outline-none border rounded pr-3 focus:placeholder:opacity-0 border-[#DEC9E9] hover:border-green-600 xl:w-[380px] lg:w-[300px] h-[50px] mt-[46px] xl:mr-[60px] lg:mr-[30px] md:mr-[30px] sm:mr-1"/>
                            <Field placeholder=" شماره تلفن خود را وارد کنید..." className="outline-none border rounded pr-3 focus:placeholder:opacity-0 border-[#DEC9E9] hover:border-green-600 xl:w-[380px] lg:w-[300px] h-[50px] mt-[46px] xl:mr-[30px] lg:mr-[30px] md:mr-[30px] sm:mr-1"/>
                            <Field placeholder=" کد ملی خود را وارد کنید..." className="outline-none border rounded pr-3 focus:placeholder:opacity-0 border-[#DEC9E9] hover:border-green-600 xl:w-[380px] lg:w-[300px] h-[50px] mt-[46px] xl:mr-[60px] lg:mr-[30px] md:mr-[30px] sm:mr-1"/>  
                        </Form>
                    </Formik> */}

      <div
        className="flex flex-wrap border border-transparent pb-5"
        data-aos="fade-up"
      >
        <Formik
          onSubmit={PutProfile}
          initialValues={{ profile: "" }}
          className="flex w-[80%] h-auto border mx-auto mt-[50px] border-"
        >
          {({ setFieldValue }) => {
            return (
              <>
                <Form>
                  <div className="mr-[20px]">
                    <div className="border border-transparent rounded-full w-[120px] h-[120px] mr-[60px] ">
                      {/* {data?.userImage?.map((img , index) => {
                          return(<>
                          
                          <img
                          src={emptyprofile}
                          alt=""
                          id={img.id}
                          className="rounded-full w-full h-full"
                        />

                          </>)
                      } )} */}

                      <img
                        src={emptyprofile}
                        alt=""
                        className="rounded-full w-full h-full"
                      />
                    </div>
                    <div className="border border-transparent  p-3">
                      <Field
                        type="file"
                        name="profile"
                        onChange={(e) =>
                          setFieldValue("userImg", e.target.files[0])
                        }
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
                </Form>
              </>
            );
          }}
        </Formik>

        <div className="border w-[80%]  bg-white mt-[30px] pb-10 mx-auto border-transparent rounded-xl">
          <div className="flex">
            <div className="basis-1/2">
              <h3 className="text-[18px] mr-5 mt-5">اطلاعات شخصی</h3>
              {/* openMOdal1 */}
              {isModalOpen && (
                <>
                  {/* <div className='fixed top-0 left-0 w-full h-full backdrop-blur-sm backdrop-filter  backdrop-grayscale-[0.5] bg-black bg-opacity-10   '></div> */}
                  <div className="absolute border w-[400px] rounded-xl h-auto pb-10 top-[0px] right-[300px] bg-white">
                    <div className="relative ">
                      <svg
                        onClick={closeModal}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 absolute left-5 top-2  text-gray-700"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <h3 className="text-[20px] mt-[10px] mr-[15px] pb-4">
                        {" "}
                        ویرایش پروفایل
                      </h3>
                      <div className="border-b w-[90%] mx-auto"></div>
                    </div>
                    <Formik onSubmit={PutProfile} initialValues={{ FName: "" }}>
                      <Form>
                        <div className="grid border border-transparent mt-5 ">
                          <p className="mr-5"> نام </p>
                          <Field
                            placeholder="نام خود را وارد کنید"
                            name="lName"
                            className="border border-transparent mt-3  outline-none w-[90%] h-[50px] mx-auto bg-[#f3fcf8]
                                                                focus:border-green-600 focus:placeholder:opacity-0 placeholder:text-green-600 pr-3
                                                                caret-green-600
                                                              "
                          />
                        </div>
                        <div className="grid border border-transparent mt-5">
                          <p className="mr-5"> ایمیل </p>
                          <Field
                            disabled
                            placeholder={data.email}
                            name="email"
                            className="border border-transparent mt-3  outline-none w-[90%] h-[50px] mx-auto bg-[#f3fcf8]
                                                                focus:border-green-600 focus:placeholder:opacity-0 placeholder:text-green-600 pr-3
                                                                caret-green-600
                                                              "
                          />
                        </div>

                        <div className="grid border border-transparent mt-5 ">
                          <p className="mr-5"> شماره تلفن </p>
                          <Field
                            type="number"
                            disabled
                            placeholder={data.phoneNumber}
                            name="phone"
                            className="border border-transparent mt-3  outline-none w-[90%] h-[50px] mx-auto bg-[#f3fcf8]
                                                                focus:border-green-600 focus:placeholder:opacity-0 placeholder:text-green-600 pr-3
                                                                caret-green-600
                                                              "
                          />
                        </div>

                        <button
                          className="block border bg-green-600 rounded py-2 px-2 mx-auto mt-5 text-white "
                          type="submit"
                        >
                          ثبت تغییرات
                        </button>
                      </Form>
                    </Formik>
                  </div>
                </>
              )}

              {/* openMOdal2 */}

              {isModalOpen2 && (
                <>
                  {/* <div className='fixed top-0 left-0 w-full h-full backdrop-blur-sm backdrop-filter  backdrop-grayscale-[0.5] bg-black bg-opacity-10   '></div> */}
                  <div className="absolute border w-[400px] rounded-xl h-auto pb-10 top-[0px] right-[300px] bg-white">
                    <div className="relative ">
                      <svg
                        onClick={closeModal2}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 absolute left-5 top-2  text-gray-700"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <h3 className="text-[20px] mt-[10px] mr-[15px] pb-4">
                        {" "}
                        ویرایش پروفایل
                      </h3>
                      <div className="border-b w-[90%] mx-auto"></div>
                    </div>
                    <Formik
                      onSubmit={PutProfile}
                      initialValues={{
                        lName: "",
                        UserAbout: "",
                        LinkdinProfile: "",
                        TelegramLink: "",
                        ReceiveMessageEvent: "",
                        HomeAdderess: "",
                        NationalCode: "",
                        Gender: "",
                        BirthDay: "",
                        Latitude: "",
                        Longitude: "",
                      }}
                    >
                      <Form>
                        <div className="grid border border-transparent mt-5 ">
                          <p className="mr-5"> نام خانوادگی </p>
                          <Field
                            placeholder=" نام خانوادگی خود را وارد کنید"
                            name="lName"
                            className="border border-transparent mt-3  outline-none w-[90%] h-[50px] mx-auto bg-[#f3fcf8]
                                                                focus:border-green-600 focus:placeholder:opacity-0 placeholder:text-green-600 pr-3
                                                                caret-green-600
                                                              "
                          />
                        </div>
                        <div className="grid border border-transparent mt-5">
                          <p className="mr-5"> کد ملی </p>
                          <Field
                            placeholder="کد ملی خود را وارد کنید"
                            name="email"
                            className="border border-transparent mt-3  outline-none w-[90%] h-[50px] mx-auto bg-[#f3fcf8]
                                                                focus:border-green-600 focus:placeholder:opacity-0 placeholder:text-green-600 pr-3
                                                                caret-green-600
                                                              "
                          />
                        </div>
                        <div className="grid border border-transparent mt-5 ">
                          <p className="mr-5"> درباره کاربر </p>
                          <Field
                            type="text"
                            placeholder="   درباره خودتان بنویسید"
                            name="UserAbout"
                            className="border border-transparent mt-3  outline-none w-[90%] h-[50px] mx-auto bg-[#f3fcf8]
                                                                focus:border-green-600 focus:placeholder:opacity-0 placeholder:text-green-600 pr-3
                                                                caret-green-600
                                                              "
                          />
                        </div>

                        <div className="grid border border-transparent mt-5 ">
                          <p className="mr-5"> درباره کاربر </p>
                          <Field
                            type="text"
                            placeholder="   درباره خودتان بنویسید"
                            name="LinkdinProfile"
                            className="border border-transparent mt-3  outline-none w-[90%] h-[50px] mx-auto bg-[#f3fcf8]
                                                                focus:border-green-600 focus:placeholder:opacity-0 placeholder:text-green-600 pr-3
                                                                caret-green-600
                                                              "
                          />
                        </div>
                        <div className="grid border border-transparent mt-5 ">
                          <p className="mr-5"> درباره کاربر </p>
                          <Field
                            type="text"
                            placeholder="   درباره خودتان بنویسید"
                            name="TelegramLink"
                            className="border border-transparent mt-3  outline-none w-[90%] h-[50px] mx-auto bg-[#f3fcf8]
                                                                focus:border-green-600 focus:placeholder:opacity-0 placeholder:text-green-600 pr-3
                                                                caret-green-600
                                                              "
                          />
                        </div>
                        <div className="grid border border-transparent mt-5 ">
                          <p className="mr-5"> درباره کاربر </p>
                          <Field
                            type="text"
                            placeholder="   درباره خودتان بنویسید"
                            name="TelegramLink"
                            className="border border-transparent mt-3  outline-none w-[90%] h-[50px] mx-auto bg-[#f3fcf8]
                                                                focus:border-green-600 focus:placeholder:opacity-0 placeholder:text-green-600 pr-3
                                                                caret-green-600
                                                              "
                          />
                        </div>
                        <div className="grid border border-transparent mt-5 ">
                          <p className="mr-5"> درباره کاربر </p>
                          <Field
                            type="text"
                            placeholder="   درباره خودتان بنویسید"
                            name="ReceiveMessageEvent"
                            className="border border-transparent mt-3  outline-none w-[90%] h-[50px] mx-auto bg-[#f3fcf8]
                                                                focus:border-green-600 focus:placeholder:opacity-0 placeholder:text-green-600 pr-3
                                                                caret-green-600
                                                              "
                          />
                        </div>
                        <div className="grid border border-transparent mt-5 ">
                          <p className="mr-5"> درباره کاربر </p>
                          <Field
                            type="text"
                            placeholder="   درباره خودتان بنویسید"
                            name="HomeAdderess"
                            className="border border-transparent mt-3  outline-none w-[90%] h-[50px] mx-auto bg-[#f3fcf8]
                                                                focus:border-green-600 focus:placeholder:opacity-0 placeholder:text-green-600 pr-3
                                                                caret-green-600
                                                              "
                          />
                        </div>

                        <div className="grid border border-transparent mt-5 ">
                          <p className="mr-5"> درباره کاربر </p>
                          <Field
                            type="text"
                            placeholder="   درباره خودتان بنویسید"
                            name="NationalCode"
                            className="border border-transparent mt-3  outline-none w-[90%] h-[50px] mx-auto bg-[#f3fcf8]
                                                                focus:border-green-600 focus:placeholder:opacity-0 placeholder:text-green-600 pr-3
                                                                caret-green-600
                                                              "
                          />
                        </div>
                        <div className="grid border border-transparent mt-5 ">
                          <p className="mr-5"> درباره کاربر </p>
                          <Field
                            type="text"
                            placeholder="   درباره خودتان بنویسید"
                            name="Gender"
                            className="border border-transparent mt-3  outline-none w-[90%] h-[50px] mx-auto bg-[#f3fcf8]
                                                                focus:border-green-600 focus:placeholder:opacity-0 placeholder:text-green-600 pr-3
                                                                caret-green-600
                                                              "
                          />
                        </div>
                        <div className="grid border border-transparent mt-5 ">
                          <p className="mr-5"> درباره کاربر </p>
                          <Field
                            type="text"
                            onChange={(e) =>
                              setFieldValue("BirthDay", e.target.values)
                            }
                            placeholder="   درباره خودتان بنویسید"
                            name="BirthDay"
                            className="border border-transparent mt-3  outline-none w-[90%] h-[50px] mx-auto bg-[#f3fcf8]
                                                                focus:border-green-600 focus:placeholder:opacity-0 placeholder:text-green-600 pr-3
                                                                caret-green-600
                                                              "
                          />
                        </div>
                        <div className="grid border border-transparent mt-5 ">
                          <p className="mr-5"> درباره کاربر </p>
                          <Field
                            type="text"
                            placeholder="   درباره خودتان بنویسید"
                            name="Latitude"
                            className="border border-transparent mt-3  outline-none w-[90%] h-[50px] mx-auto bg-[#f3fcf8]
                                                                focus:border-green-600 focus:placeholder:opacity-0 placeholder:text-green-600 pr-3
                                                                caret-green-600
                                                              "
                          />
                        </div>

                        <div className="grid border border-transparent mt-5 ">
                          <p className="mr-5"> درباره کاربر </p>
                          <Field
                            type="text"
                            placeholder="   درباره خودتان بنویسید"
                            name="Longitude"
                            className="border border-transparent mt-3  outline-none w-[90%] h-[50px] mx-auto bg-[#f3fcf8]
                                                                focus:border-green-600 focus:placeholder:opacity-0 placeholder:text-green-600 pr-3
                                                                caret-green-600
                                                              "
                          />
                        </div>
                        <button
                          className="block border bg-green-600 rounded py-2 px-2 mx-auto mt-5 text-white "
                          type="submit"
                        >
                          ثبت تغییرات
                        </button>
                      </Form>
                    </Formik>
                  </div>
                </>
              )}
            </div>
            <div className="basis-1/2 border border-transparent flex justify-end items-center">
              <button
                className="block border border-transparent  px-5 py-3 bg-[#f3fcf8] rounded mt-2 ml-2"
                onClick={openModal}
              >
                ویرایش کنید
              </button>
            </div>
          </div>

          <div className="flex flex-wrap min-w-[70%]  border border-transparent mx-auto mt-5">
            <div className="border border-transparent w-[30%] mr-10">
              <p>نام </p>
              <p className="mt-2">
                {data.fName ? <>{data.fName}</> : <>هنوز اسمی ثبت نکردید</>}
              </p>
            </div>

            <div className="border border-transparent  w-[30%] ">
              <p> ایمیل</p>
              <p className="mt-2">{data.email}</p>
            </div>

            <div className="border border-transparent  w-[30%] ">
              <p> شماره تلفن </p>
              <p className="mt-2">{data.phoneNumber}</p>
            </div>
          </div>

          <div className="flex flex-wrap min-w-[70%]  border border-transparent mx-auto mt-5">
            <div className="border border-transparent mr-10 w-[30%] mt-10 ">
              <p> نام خانوادگی </p>
              <p className="mt-2">نام خانوادگی کاربر</p>
            </div>

            <div className="border border-transparent w-[30%] mt-10 ">
              <p> کد ملی </p>
              <p className="mt-2">123456789011</p>
            </div>

            <div className="border border-transparent w-[30%] mt-10 ">
              <p> رمز عبور </p>
              <p className="mt-2">********</p>
            </div>

            <button
              className="block absolute left-[100px] border border-transparent  px-5 py-3 bg-[#f3fcf8] rounded mt-2 ml-2"
              onClick={openModal2}
            >
              ویرایش کنید
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { EditProfile };
