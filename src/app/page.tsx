import Header from "./components/header";
import Image from "next/image";
import profilePic from "@/app/uzair_pic.png"


export default function Home() {
  return (
    <div>
      <Header />
      <div className="mainContainer-of-Home-Page">
        <div className="descriptionAboutMe">
        Hi, <br /> <br /> I'm <span className="uzair-zia">Uzair Zia </span> from Karachi, Pakistan, with a Master's in Business Administration and 4+ years of experience in Human Resource Management. <br /><br />Passionate about web development and coding, I'm currently pursuing a course in Artificial Intelligence, Web 3.0, and the Metaverse at GIAIC, where I've mastered TypeScript and am now exploring Next.js.
        </div>

        <div className="homePageImage">
          <Image src={profilePic} alt="Profile Pic" />
        </div>
      </div>
    </div>
  );
}
