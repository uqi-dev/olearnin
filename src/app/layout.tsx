import { Rajdhani } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const font = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title:
    "Olearnin: Empowering Your Programming Journey through Open-Source Learning",
  description:
    "Discover the power of open-source learning with Olearnin. Dive into a vast collection of programming resources, tutorials, and interactive exercises to enhance your coding skills. Unlock your full potential and join our community of passionate learners on a journey of innovation and mastery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
