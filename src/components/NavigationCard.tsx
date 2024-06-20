import Link from "next/link";
import React from "react";

type LinkArr = {
  title: string;
  link: string;
  description: string;
};

type props = {
  arr: LinkArr[];
};

const NavigationCard = (props: props) => {
  return (
    <div className="flex flex-wrap gap-6">
      {props.arr.map((el, i) => {
        return (
          <div
            key={`el_${i}`}
            className="py-2 px-6 m-auto shadow-primary/10 shadow-xl rounded-3xl transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 duration-200"
          >
            <Link
              href={el.link}
              className="text-primary text-nowrap font-light"
            >
              {el.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NavigationCard;
