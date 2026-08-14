import "./globals.css";

export const metadata = {
  title: "Kannan Thangavel",
  description: "UX/UI Designer & Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
