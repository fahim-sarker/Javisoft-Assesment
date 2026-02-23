import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/shared/Navbar";
import Footer from "./_components/shared/Footer";
import Providers from "@/providers/QueryClient";
import ReduxProvider from "@/providers/ReduxProvider";
import ToastProvider from "@/providers/ToastProvider";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kicks",
  description: "Do It Right",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} antialiased bg-background  pt-8`}>
        <ReduxProvider>
          <Providers>
            <div className="min-h-[calc(100vh-96px)]">
              <Navbar />
              {children}
            </div>
            <Footer />
            <ToastProvider />
          </Providers>
        </ReduxProvider>
      </body>
    </html>
  );
}
