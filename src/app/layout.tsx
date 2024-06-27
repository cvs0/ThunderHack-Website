import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import ProgressBar from "@/components/progress-bar";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ThunderHack",
  description: "Player Assistance Mod",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
      >
        <body className={inter.className} suppressHydrationWarning>
          <ProgressBar />
          <NavBar />
          <main>{children}</main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
