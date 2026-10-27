import "./globals.css";
import { Bricolage_Grotesque, IBM_Plex_Sans } from "next/font/google";

const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-display" });
const body = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });

export const metadata = {
  title: "Soufiane Ouadaker – Développeur web full stack",
  description:
    "Portfolio de Soufiane Ouadaker : développeur web full stack (Symfony, React, Next.js) et étudiant en Big Data & Cloud Computing à l’ENSET Mohammedia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans text-base leading-relaxed antialiased">{children}</body>
    </html>
  );
}
