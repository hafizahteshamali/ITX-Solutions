import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogListData } from '../../assets/ConstantData';

const BlogDetail = () => {
    // ✅ CORRECTED: Use slug instead of id
    const { slug } = useParams();
    
    // ✅ CORRECTED: Find by slug
    const blogPost = BlogListData.find(blog => blog.slug === slug);

    // Debugging logs
    console.log("Slug from URL:", slug);
    console.log("Available slugs:", BlogListData.map(blog => blog.slug));
    console.log("Found blog post:", blogPost);

    // If blog post not found
    if (!blogPost) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1>
                    <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
                    <Link 
                        to="/blog" 
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">

            {/* Blog Content */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Featured Badge */}
                {blogPost.feature && (
                    <div className="mb-4">
                        <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded text-sm font-semibold">
                            {blogPost.feature}
                        </span>
                    </div>
                )}

                {/* Blog Image */}
                <div className="mb-8">
                    <img 
                        src={blogPost.imgUrl} 
                        alt={blogPost.title}
                        className="w-full h-[100vh] object-cover shadow-lg"
                    />
                </div>

                {/* Blog Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#03278D] mb-6 leading-tight">
                    {blogPost.title}
                </h1>

                {/* Update Date */}
                {blogPost.updateShow && blogPost.updateDate && (
                    <div className="mb-8">
                        <p className="text-[#03278D] text-sm font-medium">
                            {blogPost.updateDate}
                        </p>
                    </div>
                )}

                {/* Blog Description */}
                <div className="prose prose-lg max-w-none mb-8">
                    <p className="text-[#03278D] text-xl leading-relaxed">
                        {blogPost.description}
                    </p>
                </div>
            </article>
        </div>
    );
};

export default BlogDetail;