import Footer from "./components/Footer";
import RouterMounting from "./components/RouterMounting";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: "Airbnb",
  description: "Cynthia's Airbnb Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={font.className}>
        <RouterMounting>
          <Navbar />
          <>{children}</>
          <Footer />
        </RouterMounting>
      </body>
    </html>
  );
}
