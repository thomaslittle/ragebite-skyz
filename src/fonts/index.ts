import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const Blender = localFont({
  src: [
    {
      path: "../fonts/BlenderPro-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/BlenderPro-Book.woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../fonts/BlenderPro-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/BlenderPro-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../fonts/BlenderPro-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});
