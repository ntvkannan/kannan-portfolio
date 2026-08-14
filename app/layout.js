import "./globals.css";
import Header from "@/app/components/global/Header";
import Footer from "@/app/components/global/Footer";
import Container from "@/app/components/layout/Container";

export const metadata = {
  title: "Kannan Thangavel",
  description: "UX/UI Designer & Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-background">
        <Header />
        <main className="flex-1">
          <Container>{children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}
