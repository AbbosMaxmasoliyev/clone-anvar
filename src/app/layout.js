import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Eng Yaxshi Onlayn Kurslar: Sarmoya Qiling va Kelajagingizni Qurish uchun O'rganing",
  description:
    "Onlayn kurslarimiz bilan kelajakka sarmoya qiling. Malakali murabbiylar tomonidan tayyorlangan darsliklar yordamida yangi ko'nikmalarni o'zlashtiring va mijozlarni jalb qilish strategiyalarini o'rganing. Hoziroq ro'yxatdan o'ting va o'rganishni boshlang!",
  keywords: [
    "onlayn kurslar",
    "mijozlarni jalb qilish",
    "marketing",
    "biznes strategiyalari",
    "sarmoya",
    "kelajakka sarmoya",
    "o'rganish",
    "ta'lim",
    "kurs sotuvi",
    "yangi ko'nikmalar",
  ],
  author: "Amirbek Bozorov",
  openGraph: {
    title: "Eng Yaxshi Onlayn Kurslar: Sarmoya Qiling va Kelajagingizni Qurish uchun O'rganing",
    description:
      "Onlayn kurslarimiz bilan kelajakka sarmoya qiling. Malakali murabbiylar tomonidan tayyorlangan darsliklar yordamida yangi ko'nikmalarni o'zlashtiring va mijozlarni jalb qilish strategiyalarini o'rganing. Hoziroq ro'yxatdan o'ting va o'rganishni boshlang!",
    url: "https://clone-anvar-qi7x.vercel.app",
    type: "website",
    images: [
      {
        url: "https://clone-anvar-qi7x.vercel.app/dream.png",
        width: 800,
        height: 600,
        alt: "Kurs sotuvi va mijozlarni jalb qilish",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eng Yaxshi Onlayn Kurslar: Sarmoya Qiling va Kelajagingizni Qurish uchun O'rganing",
    description:
      "Onlayn kurslarimiz bilan kelajakka sarmoya qiling. Malakali murabbiylar tomonidan tayyorlangan darsliklar yordamida yangi ko'nikmalarni o'zlashtiring va mijozlarni jalb qilish strategiyalarini o'rganing. Hoziroq ro'yxatdan o'ting va o'rganishni boshlang!",
    image: "https://clone-anvar-qi7x.vercel.app/dream.png",
    site: "@yourtwitterhandle",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-black" >{children}</body>
      <Footer />
    </html>
  );
}
