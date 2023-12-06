import Link from "next/link";
import React from "react";
import {
  FaApple,
  FaFacebookF,
  FaGooglePlay,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

type LinkItem = {
  name: string;
  link: string | any;
};

type LProps = {
  title: string;
  titleLinks: LinkItem[];
};

const footData: LProps[] = [
  {
    title: "Company",
    titleLinks: [
      { name: "About", link: "" },
      { name: "Contact us", link: "contact-us" },
      { name: "FAQs", link: "" },
    ],
  },
  {
    title: "Quick Links",
    titleLinks: [
      { name: "Find service", link: "#" },
      { name: "Prices & Plans", link: "pricing" },
      { name: "List your business", link: "" },
    ],
  },
  {
    title: "Resources",
    titleLinks: [
      { name: "Blog", link: "" },
      { name: "Affiliate program", link: "" },
    ],
  },
  {
    title: "More from Dutiful",
    titleLinks: [{ name: "Dutiful jobs", link: "#" }],
  },
];
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="h-[415px] bg-primary w-full">
      <div className="mx-[7rem] pt-[3.5rem] h-full">
        <div className="grid grid-cols-4 justifyItems-center">
          {footData.map((el, idx) => (
            <Link
              key={idx}
              href={el.titleLinks[0].link}
              className="col-span-1 flex flex-col"
            >
              <p className="text-white mb-[1rem] text-[1.5rem] font-[500]">
                {el.title}
              </p>
              <ul className="flex gap-2 flex-col">
                {el.titleLinks.map((link, linkIdx) => (
                  <li
                    key={linkIdx}
                    className="text-secondary_text font-[450] text-[1rem]"
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>

        <div
          className="py-8 my-8 border-y-[1px] border-y-[#63428E] text-[1.15rem] w-full
           flex items-center justify-between text-white "
        >
          {" "}
          <div className="flex items-center gap-10">
            <p className="font-[500]"> Follow us</p>
            <FaFacebookF /> <FaInstagram /> <FaTwitter /> <FaYoutube />
            <FaLinkedinIn />
          </div>
          <div className="flex items-center gap-6">
            <p className="font-[500]"> Download the app</p> <FaApple />{" "}
            <FaGooglePlay />
          </div>
        </div>

        <div className="flex items-center gap-16">
          <p className="font-[450] text-[1.15rem] text-white">
            {" "}
            &copy; {year} Dutiful &reg;
          </p>{" "}
          <ul className="text-secondary_text flex items-center gap-8 font-[450] text-[1rem]">
            <li>Term of service</li>
            <li>Privacy policy</li>
            <li>Disclaimer</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
