 /* eslint-disable no-alert, no-console */
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';


const Layout = ({ children, title = 'Next.js App' }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
     
      <nav className="bg-black ">
        
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-20">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:2ing-2 focus:ring-md italicset foboldng-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div> /* eslint-disable no-alert, no-console */
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link legacyBehavior href="/">
              <div className="flex-shrink-0">
             
                <img className="h-10 w-10 rounded-full" src="https://yt3.googleusercontent.com/a4ixgygIQbqBdk1jhWg-wwhY1YQnTEA26k2Bd8peqET3Q7jtYYVcN0YqvoY22HHk85_7Q4lBPQ=s176-c-k-c0x00ffffff-no-rj" alt="Logo" />
              </div>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
              <Link legacyBehavior href="/">
                  <a className="text-white hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-md italic font-bold">
                Home
                  </a>
                </Link>
                <Link legacyBehavior href="/about">
                  <a className="text-white hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-md italic font-bold">
                    About
                  </a>
                </Link>
                <Link legacyBehavior href="/playlist">
                  <a className="text-white hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-md italic font-bold">
                    PlayList
                  </a>
                </Link>
                <Link legacyBehavior href="/contact">
                  <a className="text-white hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-md italic font-bold">
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
  className={`${
    isOpen ? 'block' : 'hidden'
  } sm:hidden`}
  id="mobile-menu"
>
  <div className="px-2 pt-2 pb-3 space-y-1">
    <a
      href="/index"
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
    >
      Home
    </a>
    <a
      href="/about"
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
    >
      About
    </a>
    <a
      href="/playlist"
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
    >
      PlayList
    </a>
    <a
      href="contact"
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
    >
      Contact
    </a>
  </div>
</div>
</nav>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
