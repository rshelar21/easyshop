import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const twitterLink = "https://x.com/RoHaN_SheLar_";
const githubLink = "https://github.com/rshelar21";
const portfolioLink = "https://rohan-portfolio-nu.vercel.app/";
const linkedinLink = "https://www.linkedin.com/in/rohan-shelar-826631218/";

const Footer : React.FC = () => {
  return (
    <div className="bg-amazon_blue w-full relative py-8  px-10 max-w-[450px]:px-16">
      <div className="flex gap-4 text-white flex-col md:flex-row">
        {/*  */}
        <div className="w-full">
          <div className="w-28 ">
            <Link to="/">
              <img
                src="/assets/logo.svg"
                alt=""
                className="w-full h-full object-contain"
              />
            </Link>
          </div>
          <div className=" pt-4 font-normal text-sm text-gray-300">
            <p>Mumbai, Maharashtra, India</p>
            <p className="pt-[2px]">easyshophelp@gmail.com</p>
          </div>
        </div>
        {/*  */}
        <div className="w-full">
          <div className="grid w-full gap-y-4 grid-cols-1  mobile:grid-cols-2">
            <div className="grid-cols-1">
              <h3 className="font-semibold text-lg">Category</h3>
              <ul className="list-disc text-gray-300 list-inside">
                <li>
                  <Link to="/">Men</Link>
                </li>
                <li>
                  <Link to="/">Women</Link>
                </li>
                <li>
                  <Link to="/">Eletronics</Link>
                </li>
                <li>
                  <Link to="/">Jewelery</Link>
                </li>
              </ul>
            </div>

            <div className="grid-cols-1">
              <h3 className="font-semibold text-lg">Follow Us</h3>
              <div className="flex gap-2 items-center pt-4">
                <FaFacebookSquare className="text-3xl hover:rotate-6 transition-all cursor-pointer " />
                <FaWhatsapp className="text-3xl hover:-rotate-6 transition-all cursor-pointer" />
                <FaInstagram className="text-3xl hover:rotate-6 transition-all cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8">
        <div className="text-white flex flex-col  items-center">
          <div>
            <div className="flex gap-4 items-center pt-4">
              <Link to={linkedinLink}  target="_blank">
                <FaLinkedin className="text-2xl hover:rotate-6 transition-all cursor-pointer " />
              </Link>
              <Link to={githubLink}  target="_blank">
                <FaGithub className="text-2xl hover:-rotate-6 transition-all cursor-pointer" />
              </Link>
              <Link to={twitterLink}  target="_blank">
                <FaSquareXTwitter className="text-2xl hover:rotate-6 transition-all cursor-pointer" />
              </Link>
            </div>
          </div>
          <p className="text-sm font-normal pt-2">
            Created by <Link to={portfolioLink} className="underline" target="_blank">@Rohan Shelar</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
