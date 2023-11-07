import { inter } from "@/fonts/fonts";

export const metadata = {
  title: "Create your tasks",
  description: "Project management made easy.",
};

export default function NewTaskLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
