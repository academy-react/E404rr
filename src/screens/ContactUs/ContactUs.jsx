import React from "react";
import ContactUsForm from "./ContactUsForm";
import ContactInfo from "./ContactInfo";
import Footer from "../../components/common/footer/Footer";

const ContactUs = () => {
  return (
    <>
      <div   data-aos="fade-up"  className="container max-w-[1250px] mx-auto flex flex-col-reverse xl:flex-row justify-between items-center mb-20 text-[#323E73]">
        <ContactUsForm />
        <ContactInfo />
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
