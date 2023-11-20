/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import "./Accoridian.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

const AppItems = () => {
  return (
    <div>
      <Accoridian data={faqs} />
    </div>
  );
};

export default AppItems;

const Accoridian = ({ data }: any) => {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accoridian">
      {data.map((el: any, i: any) => (
        <AccordianItems
          curOpen={curOpen}
          onClickOpen={setCurOpen}
          title={el.title}
          num={i}
          key={i}
        >
          {el.text}
        </AccordianItems>
      ))}
      <AccordianItems
        curOpen={curOpen}
        onClickOpen={setCurOpen}
        title="Test 1"
        num={22}
        key="test 1"
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusuable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordianItems>
    </div>
  );
};

const AccordianItems = ({
  num,
  title,
  children,
  curOpen,
  onClickOpen,
}: any) => {
  const isOpen = num === curOpen;
  const handleToggle = () => {
    onClickOpen(isOpen ? null : num);
  };

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="numbers">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
};
