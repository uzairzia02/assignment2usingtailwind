import Image from "next/image";
import profilePic from "@/app/uzair_pic.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-400">
      {/* Main Container */}
      <div className="mainContainer-of-Home-Page flex flex-col lg:flex-row items-center justify-center w-full h-full p-6 lg:p-12">
        {/* Description Section */}
        <div className="descriptionAboutMe text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl p-4 lg:p-8 text-justify italic flex-1">
          Hi, <br /> <br /> I am{" "}
          <span className="uzair-zia text-green-500 font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
            Uzair Zia
          </span>{" "}
          from Karachi, Pakistan, with a Masters in Business Administration and
          4+ years of experience in Human Resource Management. <br />
          <br />
          Passionate about web development and coding, I am currently pursuing a
          course in Artificial Intelligence, Web 3.0, and the Metaverse at GIAIC,
          where I have mastered TypeScript and am now exploring Next.js.
        </div>

        {/* Image Section */}
        <div className="homePageImage w-full lg:w-1/2 flex justify-center p-4 lg:p-8">
          <Image
            src={profilePic}
            alt="Profile Pic"
            className="rounded-full w-full lg:w-3/4 xl:w-1/2 h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
