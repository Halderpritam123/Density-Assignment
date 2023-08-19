import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-8">
      <hr />
      <br />
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center mb-4">
          <img
            style={{ borderRadius: "20%" }}
            src="https://halderpritam123.github.io/static/media/logo.5904bc079b08272c4700.png"
            alt="Logo"
            className="w-10 h-10 mr-2"
          />
          <span className="text-2xl font-semibold">VeloSys</span>
        </div>
        <div className="flex justify-center space-x-4 animate-fade-in-up">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-105"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Contact
          </a>
        </div>
        <br />
        <div className="flex justify-center space-x-4 mt-4">
          <button className="bg-black hover:bg-gray-900 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-110">
            <span className="flex items-center">
              <svg
                className="w-6 h-6 fill-current text-white mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.686c-5.408 0-9.797-4.39-9.797-9.79 0-5.4 4.39-9.79 9.797-9.79s9.79 4.39 9.79 9.79c0 5.4-4.39 9.79-9.79 9.79zm1.444-15.636L10.48 7.917l-4.92-3.867a.697.697 0 0 0-.85-.02.723.723 0 0 0-.35.785l.41 5.085-4.258 3.773a.728.728 0 0 0 .41 1.247.715.715 0 0 0 .312-.07l5.186-2.44 4.14 3.265a.698.698 0 0 0 .85-.022c.16-.13.26-.33.26-.55l-.376-4.665 4.245-3.764a.714.714 0 0 0-.422-1.24.698.698 0 0 0-.288.065z" />
              </svg>
              Download on Google Play
            </span>
          </button>
          <button className="bg-black hover:bg-gray-900 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-110 ml-4">
            <span className="flex items-center">
              <svg
                className="w-6 h-6 fill-current text-white mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M11.996 0C5.372 0 0 5.372 0 11.996c0 6.623 5.372 11.996 11.996 11.996 6.623 0 11.996-5.373 11.996-11.996C23.992 5.372 18.62 0 11.996 0zm0 21.4c-5.935 0-10.76-4.825-10.76-10.76S6.065 0 12 0s10.76 4.825 10.76 10.64c.001 5.936-4.826 10.76-10.76 10.76zm5.865-15.637c-.26-.295-.608-.44-1.05-.44H7.188c-.442 0-.79.146-1.05.44-.26.296-.39.652-.39 1.07v7.735c0 .435.123.78.37 1.036.245.257.592.386 1.04.386h.952v-2.125h-1.38c-.263 0-.475-.087-.636-.26-.16-.174-.24-.394-.24-.66V7.34c0-.258.08-.474.24-.65.16-.175.373-.263.636-.263h2.76c.263 0 .476.088.64.263.163.176.245.392.245.65v1.81h1.9c.448 0 .794-.13 1.04-.386.247-.256.37-.6.37-1.036V6.83c0-.417-.13-.773-.39-1.07z" />
              </svg>
              Download on the App Store
            </span>
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <a
            href="https://www.google.com/maps/place/Kolkata,+West+Bengal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-105 mx-2 flex items-center"
          >
            <svg
              className="w-6 h-6 fill-current text-gray-400 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 1C5.373 1 0 5.373 0 12s5.373 11 12 11 12-5.373 12-11S18.627 1 12 1zm0 20.4c-5.935 0-10.76-4.825-10.76-10.76S6.065 0 12 0s10.76 4.825 10.76 10.64c.001 5.936-4.826 10.76-10.76 10.76zm5.865-15.637c-.26-.295-.608-.44-1.05-.44H7.188c-.442 0-.79.146-1.05.44-.26.296-.39.652-.39 1.07v7.735c0 .435.123.78.37 1.036.245.257.592.386 1.04.386h.952v-2.125h-1.38c-.263 0-.475-.087-.636-.26-.16-.174-.24-.394-.24-.66V7.34c0-.258.08-.474.24-.65.16-.175.373-.263.636-.263h2.76c.263 0 .476.088.64.263.163.176.245.392.245.65v1.81h1.9c.448 0 .794-.13 1.04-.386.247-.256.37-.6.37-1.036V6.83c0-.417-.13-.773-.39-1.07z" />
            </svg>
            Kolkata, India
          </a>
          <a
            href="mailto:pritampritamhader@gmail.com"
            className="text-gray-400 hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-105 mx-2 flex items-center"
          >
            <svg
              className="w-6 h-6 fill-current text-gray-400 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 1C5.373 1 0 5.373 0 12s5.373 11 12 11 12-5.373 12-11S18.627 1 12 1zm0 20.4c-5.935 0-10.76-4.825-10.76-10.76S6.065 0 12 0s10.76 4.825 10.76 10.64c.001 5.936-4.826 10.76-10.76 10.76zm5.865-15.637c-.26-.295-.608-.44-1.05-.44H7.188c-.442 0-.79.146-1.05.44-.26.296-.39.652-.39 1.07v7.735c0 .435.123.78.37 1.036.245.257.592.386 1.04.386h.952v-2.125h-1.38c-.263 0-.475-.087-.636-.26-.16-.174-.24-.394-.24-.66V7.34c0-.258.08-.474.24-.65.16-.175.373-.263.636-.263h2.76c.263 0 .476.088.64.263.163.176.245.392.245.65v1.81h1.9c.448 0 .794-.13 1.04-.386.247-.256.37-.6.37-1.036V6.83c0-.417-.13-.773-.39-1.07z" />
            </svg>
            pritampritamhader@gmail.com
          </a>
        </div>
        <div className="text-gray-400 text-sm mt-4">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
