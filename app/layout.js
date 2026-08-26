import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/global/Header";
import Footer from "@/app/components/global/Footer";
import Container from "@/app/components/layout/Container";
import SkipLink from "@/app/components/global/SkipLink";
import StructuredData from "@/app/components/seo/StructuredData";
import ScrollProgress from "@/app/components/global/ScrollProgress";
import ScrollToTop from "@/app/components/global/ScrollToTop";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://kannanthangavel.com"),
  title: "Kannan Thangavel",
  description: "UX/UI Designer & Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.className}>
      <head>
        <StructuredData />
      </head>
      <body className="flex flex-col min-h-screen bg-background">
        <ScrollProgress />
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1">
          <Container>{children}</Container>
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
