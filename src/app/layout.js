import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@@/Navbar/Navbar";
import Footer from "@@/Footer/Footer";
import LeftSidebar from "@@/LeftSidebar/LeftSidebar";
import RightSidebar from "@@/RightSidebar/RightSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Advance Next Blog Website",
  description: "Enjoy your journey with Arun Kumar Rout.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.className} bg-base-100` }>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
