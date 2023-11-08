import React, { useRef, useEffect, useState } from "react";

const CourseCollapse = () => {
  const data = [
    {
      title: "سرفصل1",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .",
    },
    {
      title: "سرفصل2",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .",
    },
    {
      title: "سرفصل3",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .",
    },
    {
      title: "سرفصل4",
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
    <section className="wrapper bg-[#1c543b] text-white px-6 py-4 rounded-3xl my-2 text-lg cursor-pointer ">
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

export default CourseCollapse;
