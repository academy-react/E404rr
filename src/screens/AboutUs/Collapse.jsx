import React, { useRef, useEffect, useState } from "react";

const Collapse = () => {
  const data = [
    {
      title: "اصالت و کیفیت دوره های رو E404rr از کجا تشخیص بدم؟",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .",
    },
    {
      title: "اصالت و کیفیت دوره های E404rr رو از کجا تشخیص بدم؟",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .",
    },
    {
      title: "اصالت و کیفیت دوره های E404rr رو از کجا تشخیص بدم؟",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .",
    },
    {
      title: "اصالت و کیفیت دوره های E404rr رو از کجا تشخیص بدم؟",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .",
    },
  ];

  return (
    data &&
    data.map((item, idx) => {
      return <Unit item={item} key={idx} />;
    })
  );
};

const Unit = (props) => {
  const { item } = props;
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.height = open
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [open]);

  const onClickHandler = () => {
    setOpen(!open);
  };
  // semantic !!!
  return (
    <section className="wrapper bg-[#3c6e71] text-white px-10 py-8 rounded-3xl my-2 text-lg cursor-pointer ">
      <h4 className="m-0 " onClick={onClickHandler}>
        {item.title}
      </h4>
      <article
        className="mt-4 text-sm h-0 overflow-hidden transition-[0.5s]  ease-in"
        ref={contentRef}
      >
        {item.desc}
      </article>
    </section>
  );
};

export default Collapse;
