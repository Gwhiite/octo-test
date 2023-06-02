import React from "react";
import footer from "../public/footer.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="shadow-md fixed bg-violet-700 text-white inset-x-0 bottom-0 text-md py-4 md:px-10 px-7 flex justify-between items-center">
      <p>© Octo, todos os direitos reservados.</p>
      <Image src={footer} alt="footer" className="w-10 h-10" />
    </footer>
  );
};

export default Footer;
