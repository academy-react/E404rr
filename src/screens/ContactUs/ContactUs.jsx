import React from "react";
import ContactUsForm from "./ContactUsForm";
import ContactInfo from "./ContactInfo";

const ContactUs = () => {
  return (
    <div className="container max-w-[1250px] mx-auto flex justify-between items-center text-[#323E73]">
      <ContactUsForm />
      <ContactInfo />
    </div>
  );
};

export default ContactUs;
