
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DrawingCursor from "./components/DrawingCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BigTopSocial Digital Marketing Agency | Nagpur",
  description: "BigTopSocial Digital Marketing Agency | Best in Nagpur to Grow your Business ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DrawingCursor  color="59,130,246" // blue-500 rgb
          maxPoints={30}
          minRadius={1}
          maxRadius={5}/>
   {children}
      </body>
    </html>
  );
}
