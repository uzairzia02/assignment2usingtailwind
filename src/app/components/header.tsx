import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-black text-white">
      {/* Navbar */}
      <nav className="navbar container mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo or Header Title */}
        <div className="text-xl font-bold lg:text-2xl">
          <Link href={"/"}className="hover:text-green-500">My Portfolio
          </Link>
        </div>

        {/* Navbar Items */}
        <ul className="navbar-items flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-0 text-base md:text-lg lg:text-xl">
          <li>
            <Link href={"/"}className="hover:text-green-500">Home
            </Link>
          </li>
          <li>
            <Link href={"/professional-summary"}
              className="hover:text-green-500">Professional Summary
            </Link>
          </li>
          <li>
            <Link href={"/educational-summary"} className="hover:text-green-500">Education
            </Link>
          </li>
          <li>
            <Link href={"/experience"} className="hover:text-green-500">Experience
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className="hover:text-green-500">Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
