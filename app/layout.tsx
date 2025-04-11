import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/context/Theme";
import Navbar from "@/components/navigation/navbar";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { auth } from "@/auth";

const inter = Inter({
  subsets: ["latin"], // Or other subsets
  variable: "--font-inter", // CSS variable name
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Font weights
});

const SpaceGrotesk = Space_Grotesk({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevFlow",
  description: "Made by K K Singh.",
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  return (
    <html lang='en' suppressHydrationWarning>
      <SessionProvider session={session}>
        <body className={`${inter.variable} ${SpaceGrotesk.variable} antialiased`}>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
          <Toaster richColors />
        </body>
      </SessionProvider>
    </html>
  );
};

export default RootLayout;
