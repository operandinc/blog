import { Inter } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "optional",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head />
      <body className="container mx-auto px-4">
        <header>
          <nav className="flex justify-between items-center p-4 border-b border-gray-200">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Operand Logo"
                width={50}
                height={50}
              />
              <h1 className="text-xl font-medium ml-2">Operand Blog</h1>
            </div>
            <Link href="https://operand.ai" className="text-gray-600">
              Go to Homepage
            </Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p className="text-center text-gray-500 py-4">
            © {new Date().getFullYear()} Operand, Inc.
          </p>
        </footer>
      </body>
    </html>
  );
}
