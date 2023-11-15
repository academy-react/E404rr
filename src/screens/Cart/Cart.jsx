import React from "react";
import Footer from "../../components/common/footer/Footer";
import img from "../../assets/img/Landing/02.png";

const Cart = () => {
  return (
    <>
      <div className="container max-w-[1250px] mx-auto mb-20 flex justify-between items-start ">
        <div className="w-[60%] border-2 px-12 py-10 rounded-3xl bg-[#bbdecf7e]">
          <div className="flex justify-between items-center  pb-4 mt-4 text-[#323E73] bg-[#f3fcf8] px-6 py-4 rounded-3xl text-lg font-bold">
            <div className=" rounded-lg w-40">
              <img className="rounded-lg w-full" src={img} alt="" />
            </div>
            <p>آموزش صفر تا صد django</p>
            <p>1,250,000</p>
            <div className="w-6 cursor-pointer">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M5.16565 10.1534C5.07629 8.99181 5.99473 8 7.15975 8H16.8402C18.0053 8 18.9237 8.9918 18.8344 10.1534L18.142 19.1534C18.0619 20.1954 17.193 21 16.1479 21H7.85206C6.80699 21 5.93811 20.1954 5.85795 19.1534L5.16565 10.1534Z"
                    stroke="#000000"
                    stroke-width="2"
                  ></path>{" "}
                  <path
                    d="M19.5 5H4.5"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M10 3C10 2.44772 10.4477 2 11 2H13C13.5523 2 14 2.44772 14 3V5H10V3Z"
                    stroke="#000000"
                    stroke-width="2"
                  ></path>{" "}
                  <path
                    d="M14 12V17"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M10 12V17"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
          <div className="flex justify-between items-center   pb-4 mt-4 text-[#323E73] bg-[#f3fcf8] px-6 py-4 rounded-3xl text-lg font-bold">
            <div className=" rounded-lg w-40">
              <img className="rounded-lg w-full" src={img} alt="" />
            </div>
            <p>آموزش صفر تا صد django</p>
            <p>1,250,000</p>
            <div className="w-6 cursor-pointer">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M5.16565 10.1534C5.07629 8.99181 5.99473 8 7.15975 8H16.8402C18.0053 8 18.9237 8.9918 18.8344 10.1534L18.142 19.1534C18.0619 20.1954 17.193 21 16.1479 21H7.85206C6.80699 21 5.93811 20.1954 5.85795 19.1534L5.16565 10.1534Z"
                    stroke="#000000"
                    stroke-width="2"
                  ></path>{" "}
                  <path
                    d="M19.5 5H4.5"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M10 3C10 2.44772 10.4477 2 11 2H13C13.5523 2 14 2.44772 14 3V5H10V3Z"
                    stroke="#000000"
                    stroke-width="2"
                  ></path>{" "}
                  <path
                    d="M14 12V17"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M10 12V17"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-[35%]  rounded-3xl px-10 py-8 text-[#323E73] font-semibold bg-[#bbdecf7e]">
          <div className="flex items-center justify-between  rounded-3xl px-4 py-6 my-3 bg-[#f3fcf8]">
            <p>قیمت دوره ها (2عدد):</p>
            <p>5,000,000 تومان</p>
          </div>
          <div className="flex items-center justify-between  rounded-3xl px-4 py-6 my-3 ">
            <p>سود شما از خرید :</p>
            <p>400,000 تومان</p>
          </div>
          <div className="flex items-center justify-between rounded-3xl px-4 py-6 my-3 bg-[#f3fcf8]">
            <p>قیمت نهایی :</p>
            <p>4,000,000</p>
          </div>
          <div className="flex items-center justify-center text-center my-8  rounded-3xl py-4 mx-6 bg-[#323e73] text-white cursor-pointer">
            ثبت سفارش و پرداخت
          </div>
        </div>
      </div>

    </>
  );
};

export default Cart;
