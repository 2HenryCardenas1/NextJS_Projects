import { inter } from "@/fonts/fonts";
import "./globals.css";

export const metadata = {
  title: "Tasks App",
  description: "Project management made easy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        {children}
      </body>
    </html>
  );
}
