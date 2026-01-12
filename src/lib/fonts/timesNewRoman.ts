import localFont from "next/font/local";

export const timesNewRoman = localFont({
  src: [
    {
      path: "../../../public/fonts/times.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/times-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-times-new-roman",
});
