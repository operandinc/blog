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
import SearchDialog from "@/components/client/search";
import Analytics from "./analytics";

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
        <main className="p-4 min-h-screen ">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

async function Header() {
  const navigationItems = [
    { name: "All", href: "/" },
    { name: "Operator Logs", href: "/log" },
    { name: "Philosophy", href: "/philosophy" },
    { name: "Company", href: "/company" },
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
          <SearchDialog />
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
      { name: "Home", href: "https://beta.operand.ai" },
      { name: "Developers", href: "https://beta.operand.ai/developers" },
      { name: "Docs", href: "https://docs.operand.ai" },
      { name: "Blog", href: "/" },
      { name: "About", href: "https://beta.operand.ai/about" },
      { name: "Support", href: "mailto:support@operand.ai" },
      { name: "Terms", href: "https://beta.operand.ai/terms" },
      { name: "Privacy", href: "https://beta.operand.ai/privacy" },
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
