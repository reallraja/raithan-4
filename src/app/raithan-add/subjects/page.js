"use client";
import AddButton from "@/components/Basics/AddButton";
import AddSubject from "@/components/Dialogs/AddSubject";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const [confirmShowAdd, setConfirmShowAdd] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { subjects } = useSelector((state) => state.admin);

  // console.log(courses)

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="flex flex-col items-center">
        <AddButton
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          }
          runFunction={() => setConfirmShowAdd(true)}
          text={"Add Subject"}
        />

        <div className="w-full flex flex-wrap justify-center gap-5 p-4 my-4">
          {subjects && subjects.map((i,v)=>(
            <CoursesCard key={v} name={i.name} courses={i.for.length}  date={i.createdAt}  />
          ))}

          </div>

      </div>

      <AddSubject
        confirmState={confirmShowAdd}
        setConfirmState={setConfirmShowAdd}
      />
    </>
  );
};

export default Page;



const CoursesCard = ({name, courses, date}) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-64">
      <h1 className="text-3xl text-purple-600 font-bold mb-2 text-center">{name}</h1>
      <ul className="list-disc list-inside">
        <li className="mb-2">{courses} Courses</li>
      </ul>
      <span className="text-gray-400 text-right">Time : {moment(date).fromNow()}</span>
    </div>
  );
}
