import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Cursor from "@/components/Cursor/Cursor";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Gen Alpha Digitals",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Cursor />

        <Navbar />
        {children}
      </body>
    </html>
  );
}
