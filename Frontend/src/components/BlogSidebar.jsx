import React from "react";
import NormalButton from "./NormalButton";
import { useNavigate } from "react-router-dom";

const BlogSidebar = ({ SidebarBlogsData }) => {
  const navigate = useNavigate();
  
  console.log("Sidebar Blogs Data:", SidebarBlogsData); // Debugging ke liye

  return (
    <div className="">
      <div className="h-[400px] w-full bg-[#00000027] flex justify-center items-center">
        <img
          src="/assets/images/home/logo.png"
          className="h-[150px] w-[150px] object-contain"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-5 mt-[50px]">
        {SidebarBlogsData.map((item) => {
          // ✅ CORRECTED: Proper slug check karein
          const blogSlug = item.slug || item.id; // agar slug nahi hai toh id check karein

          return (
            <div
              key={blogSlug}
              className="w-full flex flex-col justify-start items-center gap-6 my-[30px]"
            >
              {item.topLine && (
                <div className="w-full h-[50px] border-t-2 border-[#004DB5] flex justify-center items-center">
                  <h3 className="text-2xl text-[#03278D] font-[500]">
                    {item.topText}
                  </h3>
                </div>
              )}

              <div className=" w-full">
                <img src={item.img} alt={item.title} />
              </div>

              <span
                className="text-[#004DB5] text-[16px] font-[500] relative 
                before:absolute before:h-[2px] before:w-[70%] before:-left-[100px] before:bg-[#0043FF] before:top-[50%]
                after:absolute after:h-[2px] after:w-[70%] after:-right-[100px] after:bg-[#0043FF] after:top-[50%]"
              >
                {item.feature}
              </span>

              <h1 className="text-2xl w-[100%] mx-auto font-[500] text-[#004DB5] text-center">
                {item.title}
              </h1>

              {/* ✅ CORRECTED: Proper slug pass karein */}
              <NormalButton
                onClick={() => navigate(`/blog/${blogSlug}`)}
                text={item.btnText}
                className="h-[50px] min-w-[150px] bg-[#004DB5] text-[var(--white-color)] rounded-none"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogSidebar;