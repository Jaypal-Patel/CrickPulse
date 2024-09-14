import React from "react";
import { FaFacebook } from "react-icons/fa";
import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-4 pb-3">
      <div className="container mx-auto text-center">
        <div className="flex items-center ml-[44%] w-[110px] h-[110px]">
          <img src="/public/image/logo3.png" className="object-cover" />
        </div>
        <p className="mb-6">
          The Board of Control for Cricket in India (BCCI) is the governing body
          for cricket in India. It is responsible for
          <br /> the administration, promotion, and development of cricket in
          the country. Here is a detailed summary of the BCCI,
          <br /> including its structure, roles, and notable activities:
        </p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-white text-2xl">
            <FaFacebook />
          </a>
          <a href="#" className="text-white text-2xl">
            <FaTwitter />
          </a>
          <a href="#" className="text-white text-2xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-white text-2xl">
            <FaYoutube />
          </a>
          <a href="#" className="text-white text-2xl">
            <FaLinkedinIn />
          </a>
        </div>
        <p className="text-sm">
          Copyright &copy; 2024{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Jaypal Patel
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
