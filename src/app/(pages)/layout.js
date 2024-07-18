import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@@/Navbar/Navbar";
import Footer from "@@/Footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Advance Next Blog Website",
  description: "Enjoy your journey with Arun Kumar Rout.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.className} bg-gray-50` }>
        <Navbar/>
        <div className="lg:w-7/12 md:w-2/3 m-2">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
