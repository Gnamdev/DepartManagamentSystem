import { useState } from "react";
import bannerImage from "../assets/img4.avif";
const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Welcome to DepartMent Information System",
    desc1: `The Employee Management System is a comprehensive platform designed to streamline and optimize various aspects of workforce management within an organization. It serves as a centralized hub where employers can efficiently handle tasks related to employee administration, tracking, and communication. This system is equipped with features tailored to meet the diverse needs of modern businesses, ensuring seamless operations and enhanced productivity.`,
    desc2: ` 
`,
    actionButton: {
      title: "Read More..",
      link: "/readmore",
    },
  });
  return (
    <>
      <div className="main-container bg-gray-100 border py-16">
        <h1 className="text-center pb-16  text-5xl underline font-bold"></h1>

        <div className="flex items-center">
          {/* image container */}
          <div className="w-full flex justify-center">
            <img
              className="w-fit"
              src={data.image}
              alt="durgesh kumar tiwari"
            />
          </div>

          {/* text container  */}
          <div className="w-full  flex justify-center">
            <div className="space-y-5   w-2/3">
              <h1 className="text-5xl  font-semibold ">{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">
                {data.actionButton.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
