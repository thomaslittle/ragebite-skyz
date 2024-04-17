import "@/styles/globals.css";
import { Blender } from "@/fonts/";

export const metadata = {
  title: "SKYZ",
  description: "SKYZ Esports",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${Blender.className} overflow-x-hidden dark:bg-neutral-950`}
      >
        {children}
      </body>
    </html>
  );
}
