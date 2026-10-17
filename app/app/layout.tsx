
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shaloms AI",
  description:
    "AI-powered learning, quizzes and practice for S2 and S3 students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
        }
