import blogPosts from "@/constants/blogPosts";
import React from "react";

const BlogSection = () => {
  return (
    <div className="bg-blue-700-gradient">
      <div className="px-6 mx-auto my-16 max-w-7xl lg:px-8">
        <div className="flex flex-col items-center justify-center mt-16">
          <h2 className="mb-10 text-white xl-bold !font-bold font-kumbh">Blogs</h2>
          <p className="max-w-screen-md text-center text-medium text-skyblue-900">
            Our mission: to offer a secure, flexible, chain-agnostic, user-friendly platform for decentralised app
            development and deployment.
          </p>
        </div>
        <div className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between bg-skyblue-800">
              <div className="relative w-full">
                <img
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl p-5 mt-4">
                <div className="relative flex items-center text-xs gap-x-4">
                  <h3 className="text-2xl font-bold leading-6 text-white group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                </div>
                <div className="relative mt-3 group">
                  <time dateTime={post.datetime} className="text-sm text-skyblue-500 font-manrope">
                    {post.date}
                  </time>
                  <p className="mt-5 text-base font-normal text-skyblue-900 line-clamp-3">{post.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
