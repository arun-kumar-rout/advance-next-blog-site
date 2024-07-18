import { Inter } from "next/font/google";
import "../globals.css";
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
    <div className="md:flex p-2">
          <div className="hidden lg:block lg:w-2/12 h-screen sticky top-20 bg-base-300 shadow-md rounded-xl">
            <LeftSidebar/>
          </div>
          <div className="lg:w-7/12 md:w-2/3 m-2">{children}</div>
          <div className="lg:w-3/12 md:w-1/3 md:h-screen md:sticky md:top-20 bg-base-300 shadow-md rounded-xl">
            <RightSidebar/>
          </div>
        </div>
  );
}
