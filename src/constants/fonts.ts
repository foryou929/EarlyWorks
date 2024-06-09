import { Noto_Sans_JP, Barlow } from "next/font/google";

export const notoSansJP = Noto_Sans_JP({
    subsets: ["latin"]
});

export const notoSansJP400 = Noto_Sans_JP({
    subsets: ["latin"],
    weight: "400"
});

export const notoSansJP500 = Noto_Sans_JP({
    subsets: ["latin"],
    weight: "500"
});

export const notoSansJP700 = Noto_Sans_JP({
    subsets: ["latin"],
    weight: "700"
});

export const barlow400 = Barlow({
    subsets: ["latin"],
    weight: "400"
});

export const barlow500 = Barlow({
    subsets: ["latin"],
    weight: "500"
});