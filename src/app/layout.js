import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header.jsx";
import Providers from "./Providers";
import Navbar from "../components/Navbar.jsx";
import SearchBar from "../components/SearchBar.jsx";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMBD App",
  description: "IMBD Clone Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          <SearchBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
