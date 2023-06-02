import { Inter } from "next/font/google";
import Provider from "./components/common/Provider";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description: "Next js Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
