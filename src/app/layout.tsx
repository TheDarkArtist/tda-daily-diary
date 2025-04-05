import type { Metadata } from "next";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { geistMono, geistSans } from "@/lib/fonts";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "TDA Daily Diary",
  description: "A comprehensive journal taking for specific topics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          geistMono.className,
          geistSans.className,
          "antialiased dark:bg-zinc-950 dark:text-zinc-300",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Navbar />
          <main className="pt-12 h-full">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
