import React from "react";
import NormalButton from "../../../components/NormalButton";
import { useNavigate } from "react-router-dom";

const BlogList = ({ BlogListData }) => {
    const navigate = useNavigate();
    
    return (
        <div className="flex flex-wrap justify-between items-center mb-[50px] p-2">
            {BlogListData.map((blog) => {
                return (
                    <div
                        key={blog.slug}
                        className={
                            blog.width
                                ? "w-full lg:h-[1000px]"
                                : "w-full lg:w-[48%] h-[650px] my-5"
                        }
                    >
                        <div className="h-[50%]">
                            <img
                                src={blog.imgUrl}
                                alt=""
                                className="h-[100%] w-[100%] object-cover"
                            />
                        </div>
                        <div className="w-full flex flex-col justify-between items-center gap-3 p-5">
                            <span
                                className="text-[#0043FF] text-[13px] font-[500] relative 
                                before:absolute before:h-[2px] before:w-[90%] before:-left-[100px] before:bg-[#0043FF] before:top-[50%]
                                after:absolute after:h-[2px] after:w-[90%] after:-right-[100px] after:bg-[#0043FF] after:top-[50%]"
                            >
                                {blog.feature}
                            </span>
                            <h1 className={blog.width ? "text-2xl lg:text-4xl lg:leading-12 w-[90%] mx-auto font-[500] text-[#03278D] text-center" : "text-2xl w-[100%] mx-auto font-[500] text-[#03278D] text-center"}>{blog.title}</h1>
                            <p className="text-[14px] text-center text-[#03278D] mt-5">{blog.width ? blog.description : blog.description.slice(0, 150)}...</p>
                            {/* ✅ CORRECTED: Remove extra colon */}
                            <NormalButton 
                                onClick={() => navigate(`/blog/${blog.slug}`)} 
                                text={blog.btnText} 
                                className="h-[50px] min-w-[150px] bg-[#03278D] text-[var(--white-color)] rounded-none" 
                            />
                        </div>
                    </div>
                );
            })}

            <NormalButton text="More" className="h-[50px] w-full text-xl bg-[#03278D] text-[var(--white-color)] rounded-none" />
        </div>
    );
};

export default BlogList