import react from "react";
import Image from "next/image";
import heroImage from "../public/images/heroimage.jpg";
function homePage() {
  return (
    <div>
      <div className="flex justify-between text-center md:mx-20 md:pt-32 pt-28">
        <div className="w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block">
          <Image
            src={heroImage}
            alt="heroImage"
            layout="fill"
            objectFit="cover"
            className="rounded-full cursor-pointer hidden md:block"
          />
        </div>
        <div className="flex flex-col md:ml-20 mx-10 mt-10">
          <h1 className="font-bold text-7xl text-left mb-5">
            Hello, I am <span className="text-indigo-900">Maurice</span>
          </h1>
          <p className="text-left font-normal mb-5 flex-wrap">
            Ullamco sit irure est eiusmod magna ex ullamco Lorem officia
            deserunt enim culpa velit esse. Esse ea irure fugiat proident
            proident reprehenderit esse amet mollit quis aliqua. Nostrud enim
            deserunt labore commodo ut sunt elit reprehenderit.
          </p>
          <a
            href="#"
            className="font-semibold 
            text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16 text-lg hover:bg-black"
          >
            See my portfolio!
          </a>
        </div>
      </div>
    </div>
  );
}
export default homePage;
