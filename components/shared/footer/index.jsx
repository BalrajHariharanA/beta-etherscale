"use client";
import React from "react";
import TwitterIcon from "@/public/svgs/twitter.svg";
import DiscordIcon from "@/public/svgs/discord.svg";
import TelegramIcon from "@/public/svgs/telegram.svg";
import MediumIcon from "@/public/svgs/medium.svg"
import Image from "next/image";
import Link from "next/link";
const socialLinks = [
  {
    name: "X",
    href: "https://x.com/Etherscaleapps",
    icon: TwitterIcon,
  },
  {
    name: "Discord",
    href: "https://discord.com/invite/ACZs8WrP",
    icon: DiscordIcon,
  },
  {
    name: "Telegram",
    href: "https://t.me/etherscaleapps",
    icon: TelegramIcon,
  },
  {
    name: "Medium",
    href: "https://blog.etherscale.xyz/",
    icon: MediumIcon,
  },
];
const acceptanceLinks = [
  // {
  //   name: "Privacy policy",
  //   href: "#",
  // },

  // {
  //   name: "Terms od Service",
  //   href: "#",
  // },
  // {
  //   name: "FAQs",
  //   href: "#",
  // },
];
export default function Footer() {
  return (
    <footer className="">
      <div className="px-6 py-12 mx-auto max-w-7xl lg:flex lg:items-center lg:justify-between lg:px-8 lg:space-x-12">
        <div className="flex justify-center space-x-6 lg:order-3">
          {socialLinks.map((item) => (
            <Link key={item.name} target="_blank" href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <Image src={item.icon} alt={item.name} />
            </Link>
          ))}
        </div>

        <nav
          className="flex items-center justify-center space-x-5 max-lg:mt-8 lg:!mr-auto lg:order-2"
          aria-label="Footer"
        >
          {acceptanceLinks.map((item, index) => (
            <div key={item.name} className="flex items-center justify-center">
              <a
                href={item.href}
                className="text-sm font-medium text-center transition-all duration-300 font-manrope text-skyblue-900 hover:text-skyblue-700"
              >
                {item.name}
              </a>
              {index != acceptanceLinks.length - 1 && (
                <span className="ml-5 border-[2px] rounded-full h-[2px] border-blue-300 block"></span>
              )}
            </div>
          ))}
        </nav>
        <div className="mt-8 lg:order-1 lg:mt-0">
          <p className="text-sm font-medium text-center font-manrope text-skyblue-700">
            &copy; Copyright EtherScale, 2024.
          </p>
        </div>
      </div>
    </footer>
  );
}
