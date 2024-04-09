import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

import logo from '../images/begintoken-logo.png'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Begin Token",
  description: "Learn about cryptocurrency the easy way with our educational platform and welcoming community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      {/* <Header/> */}
      <header className="text-white py-4 sm:px-4 lg:px-12 bg-base-200">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image src={logo} alt="Logo" width={60} height={60} className='rounded-full' />
            </Link>
          </div>
          <div className="flex items-center">
            <details className="dropdown dropdown-end">
              <summary className="m-2 btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </summary>
              <ul className="p-4 shadow menu dropdown-content z-[1] bg-black dark:bg-base-400 rounded-box text-lg">
                <li>
                  <Link href="/faq" className="hover:text-gray-300">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/principles" className="hover:text-gray-300">
                    Principles
                  </Link>
                </li>
                <li>
                  <Link href="/roadmap" className="hover:text-gray-300">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </details>
          </div>
        </nav>
      </header>

    </html>
  );
}
