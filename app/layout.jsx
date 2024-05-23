import { Manrope, Kumbh_Sans } from "next/font/google";
import "./globals.css";
import AppLayout from "./AppLayout";
import GoogleAnalytics from "@/components/shared/GoogleAnalytics";

const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-manrope",
});
const kumbh_Sans = Kumbh_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-kumbh-sans",
});

export const metadata = {
  title: "EtherScale : Chain-agnostic RAAS secured by an AVS .",
  description:
    "EtherScale is a Chain-agnostic Rollup-as-a-Service secured by the Eigen AVS ecosystem.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body
        className={`${manrope.variable} ${kumbh_Sans.variable} bg-blue-950 text-skyblue-900 `}
      >
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
