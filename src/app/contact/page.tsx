
export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-400">
      <h1 className="Professional-Summary-Heading text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-center p-6 lg:p-12">
        CONTACT INFORMATION
      </h1>

      <ul className="contact-info-list text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl p-6 lg:p-12 text-center">
        <li className="mb-4">Call: +923343543884</li>
        <li className="mb-4">WhatsApp: +923343543884</li>
        <li className="mb-4">Email: Uzair9900@hotmail.com</li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/uzair-zia-67730790/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-700"
          >
            Uzair Zia
          </a>
        </li>
      </ul>
    </div>
  );
}
