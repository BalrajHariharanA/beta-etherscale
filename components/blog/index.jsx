import blogPosts from "@/constants/blogPosts";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogSection = () => {
  return (
    <div className="bg-blue-700-gradient">
      <div className="px-6 mx-auto my-16 max-w-7xl lg:px-8">
        <div className="flex flex-col items-center justify-center mt-16">
          <h2 className="mb-10 text-white heading-bold font-kumbh">Blogs</h2>
          <p className="max-w-screen-md text-center text-medium text-skyblue-900">
          Discover the latest updates, technical insights, explore innovative solutions, and connect with the EtherScale community.
          </p>
        </div>
        <div className="flex max-w-2xl flex-col mx-auto mt-16 gap-x-8 gap-20 lg:mx-0 lg:max-w-none lg:flex-row  justify-center">
          {blogPosts.map((post) => (
            <article key={post.id} className="flex flex-col md:h-1/2 items-start justify-between bg-skyblue-800 rounded-2xl lg:w-1/3">
              <div className="relative w-full">
                <Image
                  src={post.imageUrl}
                  alt=""
                  width={600}
                  height={240}
                  className="aspect-[16/9] w-full rounded-t-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[4/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl p-5 mt-4">
                <div className="relative flex items-top text-xs gap-x-4">
                  <h3 className="text-2xl font-bold leading-6 text-white group-hover:text-gray-600">
                    <Link target="_blank" href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
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
