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
      <head>
        {/* <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" /> */}
        <link rel="icon" href="favicon.svg" type="image/svg+xml" />
        <link rel="robots" href="robots.txt" />
        {/* <!-- HTML Meta Tags --> */}
          <title>Begin Token: Let's Begin Learning!</title>
          <meta name="description" content="Learn about cryptocurrency the easy way with our educational platform and welcoming community."/>

          {/* <!-- Facebook Meta Tags --> */}
          <meta property="og:url" content="https://begintoken.com"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="Begin Token: Learn Crypto for Free!"/>
          <meta property="og:description" content="Empowering the crypto community with free and accessible education. Let's $BEGIN !"/>
          <meta property="og:image" content="https://opengraph.b-cdn.net/production/documents/a8709d29-3562-43e5-b6b4-fb48b07ed7f1.png?token=_HwKlQyEUhltWzn1RgKCMyCak2m7wId3FpCN7gRlo74&height=675&width=1200&expires=33249174717"/>

          {/* <!-- Twitter Meta Tags --> */}
          <meta name="twitter:card" content="summary_large_image"/>
          <meta property="twitter:domain" content="begintoken.com"/>
          <meta property="twitter:url" content="https://begintoken.com"/>
          <meta name="twitter:title" content="Begin Token: Let's Begin Learning!"/>
          <meta name="twitter:description" content="Learn about cryptocurrency the easy way with our educational platform and welcoming community."/>
          <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/documents/a8709d29-3562-43e5-b6b4-fb48b07ed7f1.png?token=_HwKlQyEUhltWzn1RgKCMyCak2m7wId3FpCN7gRlo74&height=675&width=1200&expires=33249174717"/>

          {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --></meta> */}
      </head>
      <body className={inter.className}>
        {/* <Header/> */}
        <header className="text-white py-4 sm:px-4 lg:px-12 bg-base-200">
          <nav className="flex items-center justify-between">
            <div className="flex items-center pl-4">
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
        {children}
      </body>
    </html>
  );
}
