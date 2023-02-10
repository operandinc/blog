import {
  Bars3Icon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { Inter } from "@next/font/google";
import * as React from "react";
import { cookies } from "next/headers";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import "./globals.css";
import { Logo } from "./logo";

const inter = Inter({
  subsets: ["latin"],
  // default, can also use "swap" to ensure custom font always shows
  display: "swap",
});

// Root layout for the regular website
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {/*  @ts-expect-error Server Component */}
        <Header />
        <main className="p-8 min-h-screen ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

async function Header() {
  const navigationItems = [
    { name: "All", href: "/" },
    { name: "Changelog", href: "/changelog" },
    { name: "Company", href: "/company" },
    { name: "Engineering", href: "/engineering" },
    { name: "Philosophy", href: "/philosophy" },
  ];
  return (
    <>
      <nav className="navbar container mx-auto pt-4">
        <div className="block lg:hidden navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-sm w-40 justify-start"
            >
              <Bars3Icon className="h-4 mr-2" />
              <Logo className="h-8 w-auto" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
              <li>
                <Link href="https://beta.operand.ai" aria-label="Home">
                  Back to Main Site
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:block navbar-start">
          <ul className="menu menu-horizontal">
            <li>
              <Link href="https://beta.operand.ai" aria-label="Home">
                <Logo className="h-10 w-auto" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-center hidden lg:block">
          <ul className="menu menu-horizontal px-1">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <input
            type="text"
            placeholder="Search"
            className="input input-sm lg:input-md input-bordered"
          />
        </div>
      </nav>
    </>
  );
}

function Footer() {
  const navigation = {
    // Keep multiples of 4
    // TODO add one more
    main: [
      { name: "Home", href: "/" },
      { name: "Docs", href: "/developers" },
      { name: "Blog", href: "/blog" },
      { name: "About", href: "/about" },
      { name: "Support", href: "mailto:support@operand.ai" },
      { name: "Terms", href: "/terms" },
      { name: "Privacy", href: "/privacy" },
    ],
  };
  return (
    <footer className="footer footer-center p-10 text-base-content rounded bg-base-100">
      <div className="grid grid-cols-4 gap-4">
        {navigation.main.map((item) => (
          <Link key={item.name} href={item.href} className="link link-hover">
            {item.name}
          </Link>
        ))}
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <SocialIcon url="https://twitter.com/OperandAI" />
          <SocialIcon url="https://github.com/operandinc" />
          <SocialIcon url="https://operand.ai/discord" network="discord" />
        </div>
      </div>
      <div>
        <p>
          {" "}
          Copyright &copy; {new Date().getFullYear()} Operand, Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
