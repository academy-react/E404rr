const CourseInfo = ({title , teacherName , }) => {
  return (
    <div className="mx-3 mt-3 mb-1 text-right">
      {/* عنوان */}
      <h3 className="text-[#323E73] text-[15px] mb-4 font-medium		">
               {title}
      </h3>
      <p className="flex items-center">
        <svg
          className="w-4 h-4"
          version="1.1"
          id="_x32_"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xml:space="preserve"
          fill="#acacac"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <style type="text/css"> </style>
            <g>
              <path
                class="st0"
                d="M458.159,404.216c-18.93-33.65-49.934-71.764-100.409-93.431c-28.868,20.196-63.938,32.087-101.745,32.087 c-37.828,0-72.898-11.89-101.767-32.087c-50.474,21.667-81.479,59.782-100.398,93.431C28.731,448.848,48.417,512,91.842,512 c43.426,0,164.164,0,164.164,0s120.726,0,164.153,0C463.583,512,483.269,448.848,458.159,404.216z"
              ></path>{" "}
              <path
                class="st0"
                d="M256.005,300.641c74.144,0,134.231-60.108,134.231-134.242v-32.158C390.236,60.108,330.149,0,256.005,0 c-74.155,0-134.252,60.108-134.252,134.242V166.4C121.753,240.533,181.851,300.641,256.005,300.641z"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>

        {/* // اسم معلم */}
        <span className="inline-block m-1 text-[#323E73] font-extralight text-[13px]	">
          {teacherName}
        </span>
      </p>
      <div className=" flex my-3 flex-row-reverse gap-1 items-center">


        {/* نمره ستاره */}
        <p className="text-sm">4.7</p>
        <div>
          <svg
            className="w-[22px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#fcc419"
            stroke="#fcc419"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>

        {/* تعداد رای دهندگان */}
        <div className="text-xs text-gray-500">(22,000)</div>
      </div>
    </div>
  );
};

export default CourseInfo;
