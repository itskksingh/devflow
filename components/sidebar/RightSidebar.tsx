import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TagCard from "../cards/TagCard";

const RightSidebar = () => {
  const hotQuestions = [
    {
      _id: 1,
      title: "What is the best way to learn React?",
    },
    {
      _id: 2,
      title: "How to use useState hook in React?",
    },
    {
      _id: 3,
      title: "What is the difference between props and state in React?",
    },
  ];

  const popularTags = [
    { _id: "1", name: "React", quesions: 100 },
    { _id: "2", name: "JavaScript", quesions: 200 },
    { _id: "3", name: "CSS", quesions: 150 },
    { _id: "4", name: "HTML", quesions: 120 },
    { _id: "5", name: "Node.js", quesions: 80 },
    { _id: "6", name: "Tailwind", quesions: 90 },
  ];

  return (
    <section className='pt-30 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden'>
      <div>
        <h3 className='h3-bold text-dark200_light900'>Top Questions</h3>
        <div className='mt-7 flex w-full flex-col gap-[30px]'>
          {hotQuestions.map(({ _id, title }) => (
            <Link
              href={ROUTES.PROFILE(_id)}
              key={_id}
              className='flex cursor-pointer items-center justify-between gap-7 '>
              <p className='body-medium text-dark500_light700'>{title}</p>
              <Image src='/icons/chevron-right.svg' alt='chevron' width={20} height={20} className='invert-colors' />
            </Link>
          ))}
        </div>
      </div>
      <div className='mt-16 '>
        <h3 className='h3-bold text-dark200_light900'>Popular Tags</h3>
        <div className='mt-7 flex flex-col gap-4'>
          {popularTags.map(({ _id, name, quesions }) => (
            <TagCard key={_id} _id={_id} name={name} quesions={quesions} showcount compact />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
