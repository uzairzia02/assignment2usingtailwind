import Link from "next/link";

export default function Header () {
    return (
        <div className="mainContainer-of-Header-Page">
            <div className="navbar">
                <ul className="navbar-items">
                    <Link href={"/"}>
                    <li>Home</li>
                    </Link>

                    <Link href={"/professional-summary"}>
                    <li>Professional Summary</li>
                    </Link>
                    
                    <Link href={"/educational-summary"}>
                    <li>Education</li>
                    </Link>

                    <Link href={"/experience"}>
                    <li>Experience</li>
                    </Link>

                    <Link href={"/contact"}>
                    <li>Contact</li>
                    </Link>

                </ul>
            </div>
        </div>
    )
}